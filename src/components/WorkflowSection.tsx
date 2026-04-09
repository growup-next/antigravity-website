const steps = [
  {
    number: "01",
    title: "AIによる自律開発",
    description:
      "ヒアリングしたご要望に基づき、AIが最適なデザインとプログラムコードを瞬時に書き上げます。人間が数日かけて行うコーディングを数分で終えるため、ヒューマンエラーや認識のズレが入り込む余地を最小限に抑えます。",
  },
  {
    number: "02",
    title: "ビジネス機能の連携",
    description:
      "「動く従業員」として機能させるため、お問い合わせフォームやブログ機能などのビジネスツールをプロの手で確実につなぎ込みます。",
  },
  {
    number: "03",
    title: "自動デプロイ",
    description:
      "完成したサイトはボタン一つで世界中に公開されます。独自ドメインの設定や、セキュリティ対策（SSL）も、AIの手順によって完璧にセットアップされます。",
  },
  {
    number: "04",
    title: "アカウント譲渡",
    description:
      "制作専用のGoogleアカウントを新規作成し、全サービスの権限を集約。納品時にアカウントごとお渡しします。「サイトを人質に取られる」不自由さとは無縁です。",
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="bg-black/20 border-t border-white/5">
      <div className="section-container py-24">
        {/* Section Header */}
        <div className="text-center mb-6">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
            制作ワークフロー
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            AIと人の共創で、
            <br />
            最短3日で完成。
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto">
            無駄な会議や複雑な確認作業を極限まで排除。
            AIとプロのディレクターが連携する独自の4ステップで、
            ご相談から驚異的なスピードでサイトを完成させます。
          </p>
        </div>

        {/* Steps - Timeline */}
        <div className="flex flex-col md:flex-row gap-16 mt-16">
          {/* Sticky sidebar (desktop) */}
          <div className="hidden md:block md:w-1/3">
            <div className="sticky top-32">
              <p className="text-xs font-medium tracking-wide text-blue-400 uppercase mb-4">
                Process
              </p>
              <h3 className="text-2xl font-medium text-white mb-4">
                4つのステップで、
                <br />
                完全な自由を。
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                AIの圧倒的なスピードと、人間のきめ細やかさを組み合わせたワークフロー。
              </p>
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="md:w-2/3 space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-6 group">
                {/* Step number + connector */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      i === 0
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
                <div className="pb-10">
                  <p className="text-xs font-semibold tracking-wide text-blue-400 uppercase mb-1">
                    STEP {step.number}
                  </p>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight: クリーン・スレート */}
        <div className="glass-card p-8 md:p-12 text-center mt-12">
          <p className="text-xs font-semibold tracking-wide text-blue-400 uppercase mb-3">
            STEP 04 のポイント
          </p>
          <h3 className="text-2xl font-medium text-white mb-4">
            「クリーン・スレート」型の納品
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-xl mx-auto">
            プロセスの透明性を確保し、完成と同時に
            「お客様が100%の権利を持つ資産」として引き渡します。
            修正のたびに費用が発生する従来型の不自由さは、一切ありません。
          </p>
        </div>
      </div>
    </section>
  );
}
