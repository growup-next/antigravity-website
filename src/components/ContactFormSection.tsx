"use client";

import { useState, useRef } from "react";
import Script from "next/script";

const RECAPTCHA_SITE_KEY = "6Lfpw68sAAAAAF7GgsrOkjYnep8UDAhR5kidgZBE";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

type FormState = "idle" | "submitting" | "success" | "error" | "error-recaptcha";

export default function ContactFormSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setFormState("submitting");

    let token: string;
    try {
      token = await new Promise<string>((resolve, reject) => {
        if (!window.grecaptcha) {
          reject(new Error("reCAPTCHA not loaded"));
          return;
        }
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
            .then(resolve)
            .catch(reject);
        });
      });
    } catch {
      setFormState("error-recaptcha");
      return;
    }

    try {
      formData.append("g-recaptcha-response", token);

      const res = await fetch("https://ssgform.com/s/4vJp8ubyG5er", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-colors";
  const labelClass = "block text-sm font-medium text-neutral-300 mb-1.5";

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <section id="contact-form" className="border-t border-white/5">
        <div className="section-container py-24">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
              お問い合わせ
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              まずはお気軽にご相談ください。
            </h2>
            <p className="text-sm text-neutral-400">
              通常2営業日以内にご返信いたします。
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {formState === "success" ? (
              <div className="glass-card p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-green-400">
                    <path d="M6 14l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">送信が完了しました</h3>
                <p className="text-sm text-neutral-400">
                  お問い合わせありがとうございます。<br />
                  内容を確認のうえ、担当者よりご連絡いたします。
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-8 btn-outline !py-2 !px-6 !text-sm"
                >
                  新しいお問い合わせ
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
                {/* 会社名 */}
                <div>
                  <label className={labelClass}>
                    会社名
                  </label>
                  <input
                    type="text"
                    name="会社名"
                    className={inputClass}
                    placeholder="株式会社〇〇"
                  />
                </div>

                {/* 部署名（任意） */}
                <div>
                  <label className={labelClass}>
                    部署名
                  </label>
                  <input
                    type="text"
                    name="部署名"
                    className={inputClass}
                    placeholder="営業部"
                  />
                </div>

                {/* お名前（必須） */}
                <div>
                  <label className={labelClass}>
                    お名前 <span className="text-blue-400 text-xs ml-1">必須</span>
                  </label>
                  <input
                    type="text"
                    name="お名前"
                    required
                    className={inputClass}
                    placeholder="山田 太郎"
                  />
                </div>

                {/* メールアドレス（必須） */}
                <div>
                  <label className={labelClass}>
                    メールアドレス <span className="text-blue-400 text-xs ml-1">必須</span>
                  </label>
                  <input
                    type="email"
                    name="メールアドレス"
                    required
                    className={inputClass}
                    placeholder="example@company.com"
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label className={labelClass}>
                    電話番号
                  </label>
                  <input
                    type="tel"
                    name="電話番号"
                    className={inputClass}
                    placeholder="03-0000-0000"
                  />
                </div>

                {/* お問い合わせ内容（必須） */}
                <div>
                  <label className={labelClass}>
                    お問い合わせ内容 <span className="text-blue-400 text-xs ml-1">必須</span>
                  </label>
                  <textarea
                    name="お問い合わせ内容"
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="ご質問・ご要望をご記入ください。"
                  />
                </div>

                {formState === "error" && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    送信に失敗しました。時間をおいて再度お試しいただくか、メールにてご連絡ください。
                  </p>
                )}
                {formState === "error-recaptcha" && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    reCAPTCHAの読み込みに失敗しました。ページを再読み込みしてお試しください。
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="shiny-cta w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>
                    {formState === "submitting" ? "送信中..." : "送信する"}
                  </span>
                </button>

                <p className="text-xs text-neutral-600 text-center">
                  送信内容は<a href="https://growup-next.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-400 transition-colors">プライバシーポリシー</a>に従い取り扱います。
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
