import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZeroG Web — AIエージェントが、あなたの専属Webチームに",
  description:
    "5万円から、月額0円。AIエージェントが制作から日々の更新までをシームレスにアシスト。圧倒的な低価格とスピードで、高品質なWebサイトを実現します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
