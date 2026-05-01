"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    badge: "プロのディレクターが担当",
    badgeColor: "bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30",
    duration: "目安 0.5日",
    title: "ヒアリング＆サイト設計",
    description:
      "ビジネスの課題やオーナー様の想いを、経験豊富なディレクターが直接伺います。その内容を基に、AIの能力を最大限に引き出すための強固なサイト設計図（DESIGN.md）を作成します。",
  },
  {
    number: "02",
    badge: "ディレクター × AIの共創",
    badgeColor: "bg-purple-500/15 text-purple-400 ring-1 ring-purple-500/30",
    duration: "目安 1.5日",
    title: "AIハイブリッド構築",
    description:
      "作成した設計図を基に、ディレクターがAIと高度な壁打ちを実施。AIの圧倒的な処理速度を活かし、プロ品質のデザインとプログラムコードを一気に組み上げます。繰り返し作業や実装作業をAIで効率化し、コストと時間を大幅に圧縮します。",
  },
  {
    number: "03",
    badge: "プロのディレクターが担当",
    badgeColor: "bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30",
    duration: "目安 1.0日",
    title: "最終調整・デプロイ",
    description:
      "完成したサイトをプロの視点で厳格にチェック。お問い合わせフォームなどの機能連携、独自ドメイン設定、SSL対応など、公開に必要な基本設定を整えます。",
  },
  {
    number: "04",
    badge: "安心のサポート",
    badgeColor: "bg-green-500/15 text-green-400 ring-1 ring-green-500/30",
    duration: "納品時",
    title: "アカウント譲渡＆運用レクチャー",
    description:
      "サイトの所有権は100%お客様にお渡しします。さらに、納品時にはAI専属デジタル秘書への「指示の出し方（プロンプトのコツ）」を丁寧にレクチャーいたします（基本料金内）。ITが苦手な方でも、その日からご自身で簡単にサイトを更新できるようになります。",
  },
];

export default function WorkflowSection() {
  const [activeSteps, setActiveSteps] = useState<boolean[]>([false, false, false, false]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSteps((prev) => {
              if (prev[i]) return prev;
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <section id="workflow" className="bg-black/20 border-t border-white/5">
      <div className="section-container py-24">
        {/* Section Header */}
        <div className="text-center mb-4 animate-on-scroll">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
            制作ワークフロー
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            AIとプロの共創で、
            <br />
            最短3日の超速ローンチ。
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto mb-4">
            無駄な会議や複雑な確認作業を極限まで排除。
            AIとプロのディレクターが連携する独自の4ステップで、
            ご相談から驚異的なスピードでサイトを完成させます。
          </p>
          <p className="text-sm text-neutral-500 max-w-xl mx-auto">
            ※ 上記はオンラインでのヒアリングがスムーズに完了した場合の最短スケジュールです。要件の規模や打ち合わせ手法により柔軟に調整いたします。
          </p>
        </div>

        {/* Steps - Timeline */}
        <div className="flex flex-col md:flex-row gap-16 mt-16">
          {/* Sticky sidebar (desktop) */}
          <div className="hidden md:block md:w-1/3 animate-on-scroll animate-delay-100">
            <div className="sticky top-32">
              <p className="text-xs font-medium tracking-wide text-blue-400 uppercase mb-4">
                Process
              </p>
              <h3 className="text-2xl font-medium text-white mb-4">
                プロが設計し、
                <br />
                AIが高速に構築。
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                人間のきめ細やかな設計とAIの圧倒的スピードを組み合わせた、ZeroG Web独自のハイブリッドワークフロー。
              </p>
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="md:w-2/3 space-y-0">
            {steps.map((step, i) => {
              const delays = ["", "animate-delay-100", "animate-delay-200", "animate-delay-300"];
              return (
                <div
                  key={step.number}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className={`flex gap-6 group animate-on-scroll ${delays[i]}`}
                >
                  {/* Step number + connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors duration-500 ${
                        activeSteps[i]
                          ? "bg-blue-600 text-white"
                          : "bg-neutral-800 border border-white/10 text-neutral-400"
                      }`}
                    >
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-white/10 min-h-[60px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-10 flex-1 min-w-0">
                    {/* STEP label + badge + duration */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <p className="text-xs font-semibold tracking-wide text-blue-400 uppercase">
                        STEP {step.number}
                      </p>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${step.badgeColor}`}>
                        {step.badge}
                      </span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="text-neutral-500 flex-shrink-0">
                        <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M6.5 3.5V6.5L8.5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      <span className="text-sm font-semibold text-neutral-300">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
