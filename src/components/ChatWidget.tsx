"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";

const INITIAL_GREETING =
  "こんにちは！ZeroG Webのご案内AIです。サービス内容、料金、導入の流れなど、お気軽にご質問ください。";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { messages, sendMessage, status, error, stop } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    if (!isOpen) return;
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [isOpen, messages, status]);

  const isBusy = status === "submitted" || status === "streaming";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isBusy) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "チャットを閉じる" : "ZeroG AIに質問する"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-900/40 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 12a8 8 0 0 1-11.6 7.15L4 20l1-4.4A8 8 0 1 1 21 12Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="ZeroG AI チャット"
          className="fixed bottom-24 right-6 z-50 flex h-[min(560px,calc(100vh-120px))] w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/95 text-white shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
              <span className="text-sm font-semibold">AI</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight">ZeroG AI アシスタント</span>
              <span className="text-xs text-neutral-400">サービス内容について回答します</span>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/5 px-4 py-3 text-sm leading-relaxed text-neutral-200">
                  {INITIAL_GREETING}
                </div>
              </div>
            )}

            {messages.map((message) => {
              const isUser = message.role === "user";
              const text = message.parts
                .filter((part) => part.type === "text")
                .map((part) => (part as { type: "text"; text: string }).text)
                .join("");

              return (
                <div key={message.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      isUser
                        ? "rounded-br-md bg-blue-600 text-white"
                        : "rounded-bl-md bg-white/5 text-neutral-200"
                    }`}
                  >
                    {text || (message.role === "assistant" && isBusy ? "考え中..." : "")}
                  </div>
                </div>
              );
            })}

            {status === "submitted" && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/5 px-4 py-3 text-sm text-neutral-400">
                  考え中...
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                通信に失敗しました。時間をおいて再度お試しください。
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-white/10 bg-black/40 px-3 py-3"
          >
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" &&
                    event.shiftKey &&
                    !event.nativeEvent.isComposing
                  ) {
                    event.preventDefault();
                    handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
                  }
                }}
                rows={2}
                placeholder="質問を入力（Shift+Enterで送信）"
                className="max-h-32 min-h-[40px] flex-1 resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-blue-400 focus:outline-none"
              />
              {isBusy ? (
                <button
                  type="button"
                  onClick={() => stop()}
                  className="rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/20"
                >
                  停止
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  送信
                </button>
              )}
            </div>
            <p className="mt-2 text-[10px] leading-tight text-neutral-500">
              回答はAIが生成しています。重要な情報は必ず公式ページまたはお問い合わせ窓口でご確認ください。
            </p>
          </form>
        </div>
      )}
    </>
  );
}
