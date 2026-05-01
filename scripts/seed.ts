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
    text: "従来は「人の手」が数週間かけて行っていた設計やプログラミングを、プロのディレクターの設計とAIの圧倒的なスピードを組み合わせたハイブリッド共創で実現しました。ITに苦手意識がある方でも、プロが設計しAIが高速に構築するため、品質とスピードを両立しながら、オーナーは本業に集中できます。",
  },
  {
    source: "制作ワークフロー",
    category: "制作フロー",
    text: "ZeroG Webの制作ワークフローは、AIとプロの共創で最短3日の超速ローンチを実現する4ステップです。STEP 01『ヒアリング＆サイト設計』（プロのディレクターが担当、目安0.5日）では、ビジネスの課題やオーナー様の想いを経験豊富なディレクターが直接伺い、AIの能力を最大限に引き出すための強固なサイト設計図（DESIGN.md）を作成します。",
  },
  {
    source: "制作ワークフロー",
    category: "制作フロー",
    text: "STEP 02『AIハイブリッド構築』（ディレクター×AIの共創、目安1.5日）では、作成した設計図をもとに、ディレクターがAIと高度な壁打ちを実施します。AIの圧倒的な処理速度を活かし、プロ品質のデザインとプログラムコードを一気に組み上げ、ヒューマンエラーを排除しコストと時間を劇的に圧縮します。",
  },
  {
    source: "制作ワークフロー",
    category: "制作フロー",
    text: "STEP 03『最終調整・デプロイ』（プロのディレクターが担当、目安1.0日）では、完成したサイトをプロの視点で厳格にチェックします。お問い合わせフォームなどの機能連携、独自ドメインの設定、セキュリティ対策（SSL）を完璧にセットアップし、ボタン一つで世界中に公開します。",
  },
  {
    source: "制作ワークフロー",
    category: "制作フロー",
    text: "STEP 04『アカウント譲渡＆運用レクチャー』（安心のサポート、納品時）では、サイトの所有権は100%お客様にお渡しします。さらに、納品時にはAI専属デジタル秘書への「指示の出し方（プロンプトのコツ）」を丁寧にレクチャーします（基本料金内）。ITが苦手な方でも、その日からご自身で簡単にサイトを更新できるようになります。",
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
    text: "基本プラン（必須）はトップページ制作で、価格は5万円（税込5.5万円）です。レスポンシブデザインとSEOの基本設定が含まれています。電話番号やメールアドレスのリンク設置も基本プラン内で行えます。月額費用は一切かかりません。",
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
