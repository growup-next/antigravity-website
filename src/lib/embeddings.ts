import { google } from "@ai-sdk/google";
import { embed, embedMany } from "ai";
import { EMBEDDING_DIMENSIONS } from "./pinecone";

const EMBEDDING_MODEL_ID = "gemini-embedding-001";

function buildProviderOptions(
  taskType: "RETRIEVAL_DOCUMENT" | "RETRIEVAL_QUERY",
) {
  return {
    google: {
      outputDimensionality: EMBEDDING_DIMENSIONS,
      taskType,
    },
  };
}

export async function embedQuery(text: string): Promise<number[]> {
  const { embedding } = await embed({
    model: google.embedding(EMBEDDING_MODEL_ID),
    value: text,
    providerOptions: buildProviderOptions("RETRIEVAL_QUERY"),
  });
  return embedding;
}

export async function embedDocuments(texts: string[]): Promise<number[][]> {
  const { embeddings } = await embedMany({
    model: google.embedding(EMBEDDING_MODEL_ID),
    values: texts,
    providerOptions: buildProviderOptions("RETRIEVAL_DOCUMENT"),
  });
  return embeddings;
}
