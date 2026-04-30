"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCE_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReduceMotion(callback: () => void) {
  const mq = window.matchMedia(REDUCE_MOTION_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReduceMotion() {
  return window.matchMedia(REDUCE_MOTION_QUERY).matches;
}

function getReduceMotionServerSnapshot() {
  return false;
}

const USER_MSG = "春のキャンペーン用に、桜の画像に変更して";
const AI_REPLY =
  "承知しました。トップページのヒーロー画像を桜の画像に変更し、キャンペーン情報を追加しました。ご確認ください。";

const TYPE_INTERVAL_MS = 80;
const TYPE_DURATION_MS = USER_MSG.length * TYPE_INTERVAL_MS;
const THINK_END_MS = TYPE_DURATION_MS + 2000;
const SWITCH_END_MS = THINK_END_MS + 600;
const RESET_START_MS = 9500;
const CYCLE_MS = 10000;

type Phase = "typing" | "thinking" | "switching" | "responded" | "reset";

export default function AiAssistantSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [phase, setPhase] = useState<Phase>("typing");
  const [typedCount, setTypedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeReduceMotion,
    getReduceMotion,
    getReduceMotionServerSnapshot,
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !isVisible) return;

    const timers: number[] = [];
    let typeInterval: number | undefined;

    const runCycle = () => {
      setPhase("typing");
      setTypedCount(0);

      let i = 0;
      typeInterval = window.setInterval(() => {
        i += 1;
        setTypedCount(i);
        if (i >= USER_MSG.length && typeInterval !== undefined) {
          window.clearInterval(typeInterval);
        }
      }, TYPE_INTERVAL_MS);

      timers.push(window.setTimeout(() => setPhase("thinking"), TYPE_DURATION_MS));
      timers.push(window.setTimeout(() => setPhase("switching"), THINK_END_MS));
      timers.push(window.setTimeout(() => setPhase("responded"), SWITCH_END_MS));
      timers.push(window.setTimeout(() => setPhase("reset"), RESET_START_MS));
    };

    runCycle();
    const cycleId = window.setInterval(runCycle, CYCLE_MS);

    return () => {
      window.clearInterval(cycleId);
      if (typeInterval !== undefined) window.clearInterval(typeInterval);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [reduceMotion, isVisible]);

  const showAfterImage =
    reduceMotion || phase === "switching" || phase === "responded";
  const showAiReply = reduceMotion || phase === "responded";
  const displayedText = reduceMotion ? USER_MSG : USER_MSG.slice(0, typedCount);
  const showCaret = !reduceMotion && phase === "typing";

  return (
    <section
      ref={sectionRef}
      id="ai-assistant"
      className="bg-black/40 border-t border-white/5"
    >
      <div className="section-container py-24">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
            納品後の更新体験
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            日本語で指示するだけ。
            <br />
            操作マニュアルは不要です。
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto">
            ZeroG Webの真の価値は、納品後にあります。
            サイトは「作ってから」が本番。
            制作を担当したAIエージェントが、あなたの専属デジタル秘書になります。
          </p>
        </div>

        {/* Live Demo: Chat (left) + Preview (right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 animate-on-scroll animate-delay-100 items-start">
          {/* Chat Column */}
          <div className="space-y-4 min-h-[280px]" aria-live="polite">
            <div className="flex justify-end">
              <div className="rounded-2xl rounded-br-md px-5 py-3 max-w-[85%] bg-blue-600 text-white">
                <p className="text-sm leading-relaxed min-h-[1.5em]">
                  「{displayedText}
                  {showCaret && (
                    <span
                      className="inline-block w-[2px] h-[1em] align-[-0.15em] ml-[1px] bg-white animate-typing-caret"
                      aria-hidden
                    />
                  )}
                  {(reduceMotion || typedCount >= USER_MSG.length) && "」"}
                </p>
              </div>
            </div>

            {/* Thinking dots */}
            <div
              className={`flex justify-start transition-opacity duration-300 ${
                !reduceMotion && phase === "thinking"
                  ? "opacity-100"
                  : "opacity-0 h-0 overflow-hidden"
              }`}
              aria-hidden={reduceMotion || phase !== "thinking"}
            >
              <div className="glass-card rounded-2xl rounded-bl-md px-5 py-3">
                <div className="flex gap-1.5 items-center h-[1.25rem]">
                  <span className="w-2 h-2 rounded-full bg-neutral-300 animate-thinking-dot [animation-delay:0ms]" />
                  <span className="w-2 h-2 rounded-full bg-neutral-300 animate-thinking-dot [animation-delay:160ms]" />
                  <span className="w-2 h-2 rounded-full bg-neutral-300 animate-thinking-dot [animation-delay:320ms]" />
                </div>
              </div>
            </div>

            {/* AI reply */}
            <div
              className={`flex justify-start transition-all duration-500 ${
                showAiReply
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <div className="glass-card rounded-2xl rounded-bl-md px-5 py-3 max-w-[95%]">
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {AI_REPLY}
                </p>
                <p className="text-xs mt-2 text-green-400">— ZeroG AI</p>
              </div>
            </div>
          </div>

          {/* Preview Column */}
          <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10 bg-neutral-200 shadow-2xl">
            <Image
              src="/preview-winter.webp"
              alt="変更前のサイトプレビュー（冬のカフェ）"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`object-contain transition-opacity duration-[600ms] ease-in-out ${
                showAfterImage ? "opacity-0" : "opacity-100"
              }`}
              priority={false}
            />
            <Image
              src="/preview-spring.webp"
              alt="変更後のサイトプレビュー（桜のカフェ）"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`object-contain transition-opacity duration-[600ms] ease-in-out ${
                showAfterImage ? "opacity-100" : "opacity-0"
              }`}
              priority={false}
            />
          </div>
        </div>

        {/* 2-column benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-on-scroll animate-delay-200">
          <div className="glass-card p-8 group hover:border-blue-500/30 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-3 leading-[1.3]">
              AIが「設計図」を熟知
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              ZeroG Webは単なるツールではありません。
              あなたのサイトのコードを直接理解した上で変更を実行する、
              専属のデジタル秘書です。
            </p>
          </div>
          <div className="glass-card p-8 group hover:border-green-500/30 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-400">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-3 leading-[1.3]">
              リアルタイムで更新
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              外部業者に修正を依頼し、見積もりを待ち、
              数日後にようやく反映される——そんなタイムロスはもうありません。
              ビジネスの変化に合わせてリアルタイムで情報を更新できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
