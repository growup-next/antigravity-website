import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

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
    <html lang="ja" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased overflow-x-hidden">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
