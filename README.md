This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## AI チャットボット (RAG)

サイト右下には、ZeroG Web のサービス情報を学習した AI チャットボットが組み込まれています。Vercel AI SDK + Google Gemini + Pinecone の RAG 構成です。

### 構成ファイル

- [`src/app/api/chat/route.ts`](src/app/api/chat/route.ts) — チャット API (Edge 不使用 / Node.js runtime)。Pinecone で関連ドキュメントを取得し、Gemini へシステムプロンプトに差し込む RAG。
- [`src/components/ChatWidget.tsx`](src/components/ChatWidget.tsx) — `@ai-sdk/react` の `useChat` を使ったフローティングチャット UI。`src/app/layout.tsx` から全ページで読み込み。
- [`src/lib/embeddings.ts`](src/lib/embeddings.ts) — Gemini (`gemini-embedding-001`) のベクトル化ユーティリティ。クエリ / ドキュメントで taskType を切り替えます。
- [`src/lib/pinecone.ts`](src/lib/pinecone.ts) — Pinecone クライアントとインデックス取得ヘルパー。
- [`scripts/seed.ts`](scripts/seed.ts) — ZeroG Web のサービス情報を Pinecone に upsert するシードスクリプト。

### セットアップ手順

1. **API キーを取得する**
   - Gemini API キー: [Google AI Studio](https://aistudio.google.com/app/apikey) で発行
   - Pinecone API キー: [Pinecone ダッシュボード](https://app.pinecone.io/)

2. **Pinecone でインデックスを作成**
   - Metric: `cosine`
   - Dimensions: `768`（デフォルト）。変更する場合は `PINECONE_EMBEDDING_DIMENSIONS` を合わせること
   - Type: Serverless（推奨）

3. **環境変数を設定**
   - [`.env.local.example`](.env.local.example) をコピーして `.env.local` を作成し、各キーを埋める

   ```bash
   cp .env.local.example .env.local
   ```

4. **ベクトル DB にサイト情報を投入**

   ```bash
   npm run seed
   ```

5. **開発サーバーを起動して動作確認**

   ```bash
   npm run dev
   ```

   画面右下の吹き出しアイコンをクリックするとチャットが開きます。

### Vercel デプロイ時の注意

- Vercel のプロジェクト設定 → Environment Variables に `GOOGLE_GENERATIVE_AI_API_KEY` / `PINECONE_API_KEY` / `PINECONE_INDEX_NAME` を登録してください（任意で `PINECONE_NAMESPACE`、`PINECONE_EMBEDDING_DIMENSIONS` も追加可能）。
- `npm run seed` はローカルから一度実行すれば OK です（コンテンツを更新した場合は再実行してください）。
