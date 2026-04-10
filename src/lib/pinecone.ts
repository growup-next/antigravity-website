import { Pinecone } from "@pinecone-database/pinecone";

let cachedClient: Pinecone | null = null;

export function getPineconeClient(): Pinecone {
  if (cachedClient) return cachedClient;

  const apiKey = process.env.PINECONE_API_KEY;
  if (!apiKey) {
    throw new Error("PINECONE_API_KEY is not set in environment variables.");
  }

  cachedClient = new Pinecone({ apiKey });
  return cachedClient;
}

export function getPineconeIndex() {
  const indexName = process.env.PINECONE_INDEX_NAME;
  if (!indexName) {
    throw new Error("PINECONE_INDEX_NAME is not set in environment variables.");
  }

  const client = getPineconeClient();
  const namespace = process.env.PINECONE_NAMESPACE || "zerog-web";
  return client.index(indexName).namespace(namespace);
}

export const EMBEDDING_DIMENSIONS = Number(
  process.env.PINECONE_EMBEDDING_DIMENSIONS ?? "768",
);
