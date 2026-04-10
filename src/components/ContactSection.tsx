export default function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-white/5">
      {/* CTA Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-3xl" />
      </div>

      <div className="section-container py-32 text-center relative z-10">
        <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
          AIと共に歩む、持続可能なWeb戦略
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          成長の追い風に、
          <br />
          しましょう。
        </h2>

        <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-6">
          ZeroG Webは、単なる制作代行サービスではありません。
          最先端のAI技術をすべてのビジネスオーナーの「味方」へと翻訳し、
          デジタルシフト（DX）を支えるパートナーシップです。
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10">
          技術の進歩を、我慢やコストの理由にするのではなく、成長の追い風にしましょう。
          まずは見積もりシミュレーターで、
          あなたの理想がどれほどの驚きを持って実現できるか確かめてみてください。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#simulator" className="shiny-cta">
            <span>見積もりシミュレーターへ</span>
          </a>
          <a href="mailto:info@antigravity.co.jp" className="btn-outline">
            メールで相談する
          </a>
        </div>

        <p className="text-sm text-neutral-500 mt-8 leading-relaxed">
          AIと共に、新しいビジネスのステージでお会いできるのを楽しみにしています。
        </p>
      </div>
    </section>
  );
}
