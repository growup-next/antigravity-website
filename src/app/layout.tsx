import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";
import "./globals.css";

const ChatWidget = dynamic(() => import("@/components/ChatWidget"));

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1DRPS5D41H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1DRPS5D41H');
          `}
        </Script>
      </body>
    </html>
  );
}
