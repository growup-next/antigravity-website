export default function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-white/5">
      {/* CTA Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-3xl" />
      </div>

      <div className="section-container py-32 text-center relative z-10">
        <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3 animate-on-scroll">
          まずはご相談から
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 animate-on-scroll animate-delay-100">
          新しい挑戦を、
          <br />
          熱が冷めないうちにWebへ。
        </h2>

        <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-6 animate-on-scroll animate-delay-200">
          新規事業、新店舗オープン、キャンペーン告知、セミナー集客。
          まだ内容が固まりきっていなくても大丈夫です。
          ヒアリングを通じて、目的・ターゲット・必要な導線を整理し、
          最短ルートで公開できる形に整えます。
        </p>
        <p className="text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10 animate-on-scroll animate-delay-300">
          BNI・京都中小企業家同友会など、地域コミュニティや紹介経由でご訪問の方も
          どうぞお気軽にご相談ください。
          「技術の話ではなく、事業の話から始めたい」という方を歓迎しています。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll animate-delay-400">
          <a href="#simulator" className="shiny-cta">
            <span>まずは事業の構想を相談する</span>
          </a>
          <a href="#simulator" className="btn-outline">
            料金をシミュレートする
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6 animate-on-scroll animate-delay-500">
          <a href="#simulator" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
            新店舗・新サービスのWeb相談をする →
          </a>
          <span className="hidden sm:block text-neutral-700">|</span>
          <a href="#simulator" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors">
            キャンペーンLPについて相談する →
          </a>
        </div>

        <p className="text-sm text-neutral-600 mt-10 leading-relaxed animate-on-scroll animate-delay-500">
          紹介・コミュニティ経由の方もお気軽にご相談ください。
        </p>
      </div>
    </section>
  );
}
