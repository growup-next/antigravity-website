export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* CTA Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-blue-900/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10 text-center pt-40 pb-20 md:pt-48 md:pb-32">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
          </span>
          <span className="text-xs font-medium tracking-wide text-blue-400">
            AIを活用した次世代Web制作
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
          5万円から。月額0円。
          <br />
          <span className="text-blue-400">AIエージェント</span>が、
          <br className="md:hidden" />
          あなたの専属Webチームに。
        </h1>

        {/* Sub Headline */}
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10">
          自律的に動くAIエージェントが、制作から日々の更新までをシームレスにアシスト。圧倒的な低価格とスピードで、ビジネスのアイデアを熱いうちに形にします。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#simulator" className="shiny-cta">
            <span>無料で見積もりする</span>
          </a>
          <a href="#intro" className="btn-outline">
            詳しく見る
          </a>
        </div>

        {/* Credibility Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/5 max-w-3xl mx-auto">
          {[
            { value: "¥50,000〜", label: "初期費用" },
            { value: "¥0", label: "月額費用" },
            { value: "3日〜", label: "最短納期" },
            { value: "100%", label: "所有権お客様" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
