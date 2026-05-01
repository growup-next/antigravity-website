"use client";

import { useState } from "react";

interface Option {
  id: string;
  label: string;
  price: number;
  description: string;
}

const BASE_PRICE = 50000;

const options: Option[] = [
  { id: "pages", label: "下層ページ追加（5ページまで）", price: 30000, description: "会社概要・サービス紹介など追加ページ" },
  { id: "blog", label: "ブログ機能", price: 20000, description: "記事投稿・カテゴリ管理機能" },
  { id: "contact", label: "お問い合わせフォーム", price: 15000, description: "自動返信メール付きフォーム" },
  { id: "analytics", label: "GA4ダッシュボード", price: 10000, description: "Google Analytics連携と初期設定" },
  { id: "chatbot", label: "AIチャットボット", price: 50000, description: "24時間自動応答チャット" },
  { id: "branding", label: "ロゴ・名刺制作", price: 35000, description: "AIデザインによるロゴと名刺データ" },
];

function formatPrice(price: number): string {
  return price.toLocaleString("ja-JP");
}

export default function SimulatorSection() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleOption = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const totalPrice =
    BASE_PRICE +
    options
      .filter((opt) => selected.has(opt.id))
      .reduce((sum, opt) => sum + opt.price, 0);

  return (
    <section id="simulator" className="border-t border-white/5">
      <div className="section-container py-24">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
            料金シミュレーター
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            あなたのプランを、
            <br />
            その場で見積もり。
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">
            必要な機能を選ぶだけ。追加費用や月額費用は一切ありません。
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Options List */}
            <div className="lg:col-span-2">
              {/* Base Price Card */}
              <div className="glass-card p-6 mb-4 border-blue-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-blue-400 uppercase mb-1">
                      基本プラン（必須）
                    </div>
                    <div className="text-lg font-medium text-white">
                      トップページ制作
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">
                      レスポンシブデザイン・SEO基本設定込み
                    </div>
                    <div className="text-xs text-neutral-500 mt-2">
                      ※ 電話番号やメールアドレスのリンク設置は基本プラン内で行えます
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white whitespace-nowrap">
                    ¥{formatPrice(BASE_PRICE)}
                  </div>
                </div>
              </div>

              {/* Option Cards */}
              <div className="space-y-3">
                {options.map((option) => {
                  const isSelected = selected.has(option.id);
                  return (
                    <label
                      key={option.id}
                      className={`flex items-center gap-4 glass-card p-5 cursor-pointer transition-colors ${
                        isSelected ? "border-blue-500/30" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="simulator-checkbox flex-shrink-0"
                        checked={isSelected}
                        onChange={() => toggleOption(option.id)}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white">
                          {option.label}
                        </div>
                        <div className="text-xs text-neutral-500 mt-0.5">
                          {option.description}
                        </div>
                      </div>
                      <div className={`text-sm font-semibold whitespace-nowrap ${isSelected ? "text-blue-400" : "text-neutral-300"}`}>
                        +¥{formatPrice(option.price)}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Price Summary - Sticky */}
            <div className="lg:col-span-1">
              <div className="glass-card p-8 lg:sticky lg:top-[80px]">
                <div className="text-sm text-neutral-500 mb-2">
                  お見積もり合計
                </div>
                <div className="text-5xl font-bold text-white leading-[1.1] mb-1">
                  ¥{formatPrice(totalPrice)}
                </div>
                <div className="text-sm text-neutral-500 mb-6">
                  税込 ¥{formatPrice(Math.round(totalPrice * 1.1))}
                </div>

                <div className="text-sm text-white mb-4 pb-4 border-b border-white/5">
                  <div className="flex justify-between mb-2">
                    <span className="text-neutral-500">基本プラン</span>
                    <span>¥{formatPrice(BASE_PRICE)}</span>
                  </div>
                  {options
                    .filter((opt) => selected.has(opt.id))
                    .map((opt) => (
                      <div key={opt.id} className="flex justify-between mb-2">
                        <span className="text-neutral-500">{opt.label}</span>
                        <span>¥{formatPrice(opt.price)}</span>
                      </div>
                    ))}
                </div>

                <div className="flex items-center gap-2 mb-6 text-sm text-blue-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  月額費用: ¥0
                </div>

                <a href="#contact" className="shiny-cta w-full text-center block">
                  <span>この内容で相談する</span>
                </a>

                <p className="text-xs text-neutral-600 mt-4 text-center">
                  ※ 正式な見積もりはヒアリング後にご提示します
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
