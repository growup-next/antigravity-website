export default function AiAssistantSection() {
  const examples = [
    "「トップページの写真を、季節に合わせて桜の画像に変えて」",
    "「キャンペーン情報を、この文章で追加して」",
  ];

  return (
    <section id="ai-assistant" className="bg-black/40 border-t border-white/5">
      <div className="section-container py-24">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
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

        {/* Chat-like Demo */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="space-y-4">
            {examples.map((example) => (
              <div key={example} className="flex justify-end">
                <div className="rounded-2xl rounded-br-md px-5 py-3 max-w-[85%] bg-blue-600 text-white">
                  <p className="text-sm leading-relaxed">{example}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-start">
              <div className="glass-card rounded-2xl rounded-bl-md px-5 py-3 max-w-[85%]">
                <p className="text-sm text-neutral-300 leading-relaxed">
                  承知しました。トップページのヒーロー画像を桜の画像に変更し、
                  キャンペーン情報を追加しました。ご確認ください。
                </p>
                <p className="text-xs mt-2 text-green-400">
                  — ZeroG AI
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-column benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
