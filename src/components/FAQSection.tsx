"use client";

import Script from "next/script";
import { useState } from "react";

const faqs = [
  {
    q: "本当に月額費用はかかりませんか？",
    a: "基本的なサイト運用において、従来のような毎月の保守費やサーバー管理費を前提としない構成で制作します。ただし、独自ドメイン費用、外部サービスの有料プラン、AIツール利用料などが必要になる場合があります。正式なお見積もり時に必要な費用を明確にご説明します。",
  },
  {
    q: "5万円の基本プランには何が含まれますか？",
    a: "トップページ制作、スマホ対応（レスポンシブデザイン）、SEO基本設定、電話番号・メールリンク設置などが含まれます。下層ページ追加、お問い合わせフォーム、ブログ、AIチャットボットなどは必要に応じてオプションで追加できます。",
  },
  {
    q: "納品後、自分で更新できますか？",
    a: "はい。納品時にAIへの指示の出し方をレクチャーします。キャンペーン告知、画像差し替え、営業時間変更、文言修正など、軽微な更新を日本語で依頼できる運用を想定しています。専門的なコード知識がなくても対応できます。",
  },
  {
    q: "AIでの更新は初心者でも使えますか？",
    a: "専門用語やコードの知識がなくても使えるように、具体的な指示例をお渡しします。必要に応じて、納品時に一緒に操作を確認します。「春のキャンペーン画像に差し替えて」のような自然な日本語で依頼できます。",
  },
  {
    q: "WordPressとは何が違いますか？",
    a: "WordPressのように管理画面から更新する方式ではなく、AIに日本語で指示しながらサイトを更新する新しい運用を想定しています。プラグイン管理やサーバー保守の負担を減らし、シンプルで軽量なサイト運用を目指します。",
  },
  {
    q: "スマホ対応やSEO対策は含まれますか？",
    a: "はい。レスポンシブ対応、タイトル・説明文・OGPなどのSEO基本設定を含めて制作します。必要に応じて構造化データやアクセス解析（GA4）の設定も追加できます。",
  },
  {
    q: "公開後の修正やサポートはありますか？",
    a: "納品時に運用方法をレクチャーします。追加の修正や継続サポートが必要な場合は、内容に応じて別途ご相談いただけます。小さな変更はAIへの指示で対応できるケースが多くあります。",
  },
  {
    q: "AIチャットボットとは何ですか？",
    a: "サイト訪問者の質問に24時間自動応答できるチャット機能です。サービス内容、料金、営業時間、よくある質問などを案内できます。必要に応じてオプションで追加できます（追加費用：5万円）。",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />

      <section id="faq" className="border-t border-white/5">
        <div className="section-container py-24">
          {/* Section Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
              よくある質問
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              気になる疑問に、
              <br />
              まとめてお答えします。
            </h2>
            <p className="text-base text-neutral-400 max-w-xl mx-auto">
              料金・納期・機能についての疑問を整理しました。
              ここにない質問は、右下のAIチャットボットでもその場で確認できます。
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`glass-card overflow-hidden transition-colors animate-on-scroll ${isOpen ? "border-blue-500/20" : "hover:border-white/12"}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium text-white leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`w-6 h-6 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chatbot nudge */}
          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-sm text-neutral-500 leading-relaxed">
              ここにない質問は、右下のAIチャットボットでも確認できます。
              <br />
              料金・納期・機能について、その場でお気軽にご質問ください。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
