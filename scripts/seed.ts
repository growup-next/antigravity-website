/**
 * ZeroG Web RAG シードスクリプト
 *
 * 使い方:
 *   1. .env.local に GOOGLE_GENERATIVE_AI_API_KEY / PINECONE_API_KEY /
 *      PINECONE_INDEX_NAME を設定する
 *   2. 事前に Pinecone 上で、dimension が PINECONE_EMBEDDING_DIMENSIONS と
 *      一致するインデックスを作成しておく（デフォルト 768）
 *   3. 次のコマンドで実行:
 *      npx tsx scripts/seed.ts
 */

import { config } from "dotenv";
config({ path: ".env.local" });
import { randomUUID } from "node:crypto";

import { embedDocuments } from "../src/lib/embeddings";
import { getPineconeIndex } from "../src/lib/pinecone";

type SeedDocument = {
  id?: string;
  source: string;
  category: string;
  text: string;
};

const documents: SeedDocument[] = [
  {
    source: "トップ / ヒーロー",
    category: "概要",
    text: "ZeroG Webは、AIエージェントが制作から日々の更新までをシームレスにアシストする次世代Web制作サービスです。初期費用5万円から、月額0円、最短3日で納品、所有権は100%お客様のものという特徴を掲げています。",
  },
  {
    source: "なぜ今、AIなのか",
    category: "背景",
    text: "従来Webサイト制作には、数十万円の初期費用、数ヶ月の制作期間、専門知識が必要な維持管理という3つの壁がありました。ZeroG Webはこれらをそれぞれ5万円〜、最短3日、日本語で指示するだけ、という形でAIが解決します。",
  },
  {
    source: "なぜ今、AIなのか",
    category: "背景",
    text: "従来は「人の手」が数週間かけて行っていた設計やプログラミングを、AIが自律的に、かつ瞬時に処理する仕組みを構築しました。ITに苦手意識がある方でも、AIが裏側の複雑な仕組みを肩代わりするため、オーナーは管理に追われず本業に集中できます。",
  },
  {
    source: "制作ワークフロー",
    category: "制作フロー",
    text: "ZeroG Webの制作ワークフローは4ステップです。STEP 01『AIによる自律開発』では、ヒアリング内容をもとにAIが最適なデザインとコードを瞬時に書き上げ、ヒューマンエラーや認識のズレを最小限に抑えます。",
  },
  {
    source: "制作ワークフロー",
    category: "制作フロー",
    text: "STEP 02『ビジネス機能の連携』では、お問い合わせフォームやブログ機能などのビジネスツールをプロの手で確実に接続し、AIが『動く従業員』として機能するように仕上げます。",
  },
  {
    source: "制作ワークフロー",
    category: "制作フロー",
    text: "STEP 03『自動デプロイ』では、完成したサイトをボタン一つで世界中に公開します。独自ドメインの設定やSSLによるセキュリティ対策もAIの手順で完璧にセットアップされます。",
  },
  {
    source: "制作ワークフロー",
    category: "制作フロー",
    text: "STEP 04『アカウント譲渡』では、制作専用のGoogleアカウントを新規作成して全サービスの権限を集約し、納品時にアカウントごとお渡しします。完成と同時にお客様が100%の権利を持つ資産として引き渡す『クリーン・スレート型納品』を採用しています。",
  },
  {
    source: "月額0円の仕組み",
    category: "料金",
    text: "ZeroG Webは、メンテナンスフリーなモダン構造（サーバーレス構成）を採用しているため、月額費用は0円です。従来のようにレンタルサーバーを借りる必要がなく、毎月の固定費がかかりません。",
  },
  {
    source: "月額0円の仕組み",
    category: "料金",
    text: "従来のWeb制作と比較すると、従来は初期費用30〜100万円、月額5,000〜20,000円、修正依頼は都度有料、所有権は制作会社に依存でしたが、ZeroG Webは初期費用5万円〜、月額0円、修正依頼はAIに日本語で指示、所有権100%お客様となります。",
  },
  {
    source: "月額0円の仕組み",
    category: "料金",
    text: "月額費用がないため『成果が出るまで不安』という心理的ハードルがなく、一度作ってしまえばリスクなく長期的に情報発信を続けられます。ランニングコストを排除することで、浮いた予算を広告費や新商品の開発に回せます。",
  },
  {
    source: "料金シミュレーター / 基本プラン",
    category: "料金",
    text: "基本プラン（必須）はトップページ制作で、価格は5万円（税込5.5万円）です。レスポンシブデザインとSEOの基本設定が含まれています。月額費用は一切かかりません。",
  },
  {
    source: "料金シミュレーター / オプション",
    category: "料金",
    text: "追加オプションの料金は以下の通りです: 下層ページ追加（5ページまで）3万円、ブログ機能 2万円、お問い合わせフォーム（自動返信メール付き）1.5万円、GA4ダッシュボード（Google Analytics連携と初期設定）1万円。",
  },
  {
    source: "料金シミュレーター / オプション",
    category: "料金",
    text: "追加オプション続き: AIチャットボット（24時間自動応答）5万円、ロゴ・名刺制作（AIデザイン）3.5万円。正式な見積もりはヒアリング後に提示されます。",
  },
  {
    source: "プロ品質の証明 / PageSpeed",
    category: "品質",
    text: "ZeroG Webが制作するサイトは、Googleの評価指標PageSpeed Insightsで90点以上を標準としています。表示速度が3秒を超えると訪問者の約半数が離脱すると言われる中、爆速表示によって顧客の離脱を防ぎ信頼性を高めます。",
  },
  {
    source: "プロ品質の証明 / SEO",
    category: "品質",
    text: "SEO対策は標準で完備しています。検索エンジンがサイトの内容を正しく理解するためのメタタグ（タイトル、説明文、OGP画像）をすべて設定済みで納品し、構造化データによって検索エンジンにサイト構造をわかりやすく伝えます。公開直後からプロ水準で戦えます。",
  },
  {
    source: "納品後の更新体験",
    category: "運用",
    text: "ZeroG Webの真の価値は納品後にあります。制作を担当したAIエージェントがそのまま専属デジタル秘書として機能し、『トップページの写真を桜の画像に変えて』『キャンペーン情報を追加して』といった日本語の指示だけで更新が完了します。操作マニュアルや専門知識は不要です。",
  },
  {
    source: "納品後の更新体験",
    category: "運用",
    text: "AIはお客様サイトのコードを直接理解した上で変更を実行するため、外部業者に修正を依頼して見積もりを待ち、数日後に反映される、というタイムロスがありません。ビジネスの変化に合わせてリアルタイムで情報更新が可能です。",
  },
  {
    source: "お問い合わせ",
    category: "お問い合わせ",
    text: "ご相談やお見積もり依頼は、サイト内の『料金シミュレーター』で構成を選んだ上で、『この内容で相談する』ボタンからお問い合わせフォームにお進みください。正式な見積もりはヒアリング後に提示いたします。",
  },
];

async function main() {
  console.log(`[seed] Preparing ${documents.length} documents...`);

  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    throw new Error("GOOGLE_GENERATIVE_AI_API_KEY is not set.");
  }
  if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME) {
    throw new Error(
      "PINECONE_API_KEY or PINECONE_INDEX_NAME is not set. Check .env.local.",
    );
  }

  const texts = documents.map((doc) => doc.text);
  console.log(`[seed] Embedding ${texts.length} chunks via Gemini...`);
  const embeddings = await embedDocuments(texts);

  if (embeddings.length !== documents.length) {
    throw new Error(
      `Embedding count mismatch: got ${embeddings.length}, expected ${documents.length}`,
    );
  }

  const index = getPineconeIndex();
  const records = documents.map((doc, i) => ({
    id: doc.id ?? randomUUID(),
    values: embeddings[i],
    metadata: {
      text: doc.text,
      source: doc.source,
      category: doc.category,
    },
  }));

  const batchSize = 100;
  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize);
    console.log(
      `[seed] Upserting batch ${Math.floor(i / batchSize) + 1} (${batch.length} records)...`,
    );
    await index.upsert({ records: batch });
  }

  console.log(`[seed] Done. Upserted ${records.length} vectors into Pinecone.`);
}

main().catch((error) => {
  console.error("[seed] Failed:", error);
  process.exit(1);
});
