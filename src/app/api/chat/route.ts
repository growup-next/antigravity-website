import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";
import { embedQuery } from "@/lib/embeddings";
import { getPineconeIndex } from "@/lib/pinecone";

export const runtime = "nodejs";
export const maxDuration = 30;

const CHAT_MODEL_ID = "gemini-2.5-flash";
const TOP_K = 5;

const BASE_SYSTEM_PROMPT = `あなたは「ZeroG Web」のウェブサイトに常駐する案内AIアシスタントです。
以下のルールを厳守して、訪問者からの質問に日本語で丁寧かつ簡潔に回答してください。

1. 回答は、下記の「参考情報」に書かれた内容を最優先の根拠にしてください。
2. 参考情報に記載がない事柄を推測して断定しないでください。わからない場合は「現在ご案内できる情報がありません。お問い合わせフォームからご連絡ください」と案内してください。
3. ZeroG Webのサービス、料金、導入手順、運用方法などに関係ない質問には、丁重にお断りしつつ、本サービスに関する質問への誘導を行ってください。
4. 回答は結論から先に述べ、必要に応じて箇条書きで補足してください。回答の末尾に参考情報をそのまま貼り付けることは避けてください。
5. 外部URLの推測や、存在しない機能の案内は絶対に行わないでください。`;

function extractLatestUserText(messages: UIMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i--) {
    const message = messages[i];
    if (message.role !== "user") continue;
    const text = message.parts
      .filter((part): part is { type: "text"; text: string } => part.type === "text")
      .map((part) => part.text)
      .join("\n")
      .trim();
    if (text.length > 0) return text;
  }
  return "";
}

async function retrieveContext(query: string): Promise<string> {
  if (!query) return "";

  if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME) {
    return "";
  }

  try {
    const queryVector = await embedQuery(query);
    const index = getPineconeIndex();
    const response = await index.query({
      vector: queryVector,
      topK: TOP_K,
      includeMetadata: true,
    });

    const chunks = (response.matches ?? [])
      .map((match) => {
        const metadata = match.metadata as
          | { text?: string; source?: string }
          | undefined;
        if (!metadata?.text) return null;
        const source = metadata.source ? ` (出典: ${metadata.source})` : "";
        return `- ${metadata.text}${source}`;
      })
      .filter((chunk): chunk is string => chunk !== null);

    if (chunks.length === 0) return "";
    return chunks.join("\n");
  } catch (error) {
    console.error("[chat] Pinecone retrieval failed:", error);
    return "";
  }
}

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      return Response.json(
        {
          error:
            "GOOGLE_GENERATIVE_AI_API_KEY is not set. Please configure environment variables.",
        },
        { status: 500 },
      );
    }

    const latestUserText = extractLatestUserText(messages);
    const context = await retrieveContext(latestUserText);

    const systemPrompt = context
      ? `${BASE_SYSTEM_PROMPT}\n\n# 参考情報（ZeroG Web 公式情報の抜粋）\n${context}`
      : `${BASE_SYSTEM_PROMPT}\n\n# 参考情報\n（現在、ベクトル検索から取得できた関連情報はありません。一般的なZeroG Webの案内として、ウェブサイト上に記載されている範囲でのみ回答してください。）`;

    const modelMessages = await convertToModelMessages(messages);

    const result = streamText({
      model: google(CHAT_MODEL_ID),
      system: systemPrompt,
      messages: modelMessages,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("[chat] Unexpected error:", error);
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
