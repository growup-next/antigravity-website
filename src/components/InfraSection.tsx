export default function InfraSection() {
  const points = [
    {
      title: "「サーバー大家さん」からの卒業",
      description:
        "従来のようにレンタルサーバーを借りる必要がありません。物理的なサーバー管理が不要なため、毎月の「固定費という名の税金」をゼロにできます。",
      color: "blue",
    },
    {
      title: "初期費用5万円からのスタート",
      description:
        "基本プランは5万円（税込5.5万円）から。月額保守費を前提としない構成のため、わずか数ヶ月運用するだけで、従来のサービスと比較して圧倒的なコストメリットが生まれます。",
      color: "green",
    },
    {
      title: "精神的な自由",
      description:
        "「月額がかかるから、成果が出るまで不安……」という心理的ハードルがなくなります。一度作ってしまえば、リスクなく長期的に情報を発信し続けることが可能です。",
      color: "purple",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "hover:border-blue-500/30",
    green: "hover:border-green-500/30",
    purple: "hover:border-purple-500/30",
  };

  return (
    <section id="infra" className="border-t border-white/5">
      <div className="section-container py-24">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
            月額0円の仕組み
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            月額費用、
            <br />
            <span className="text-blue-400">¥0</span>。
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto">
            最新の「メンテナンスフリーなモダン構造（サーバーレス構成）」を採用。
            従来のような月額保守費を前提としない構成で制作します。
          </p>
        </div>

        {/* 比較: 従来 vs Antigravity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {/* 従来 */}
          <div className="glass-card p-8 animate-on-scroll animate-delay-100">
            <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase mb-4">
              従来のWeb制作
            </p>
            <div className="space-y-4">
              {[
                { label: "初期費用", value: "30〜100万円" },
                { label: "月額費用", value: "5,000〜20,000円" },
                { label: "修正依頼", value: "都度有料" },
                { label: "所有権", value: "制作会社に依存" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-baseline">
                  <span className="text-sm text-neutral-500">{row.label}</span>
                  <span className="text-xl font-semibold text-white">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Antigravity */}
          <div className="glass-card p-8 border-blue-500/30 animate-on-scroll animate-delay-200">
            <p className="text-xs font-semibold tracking-wide text-blue-400 uppercase mb-4">
              ZeroG Web
            </p>
            <div className="space-y-4">
              {[
                { label: "初期費用", value: "5万円〜" },
                { label: "月額保守費", value: "¥0" },
                { label: "修正依頼", value: "AIに日本語で指示" },
                { label: "所有権", value: "100%お客様" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-baseline">
                  <span className="text-sm text-neutral-500">{row.label}</span>
                  <span className="text-xl font-semibold text-blue-400">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROIポイント */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {points.map((point, i) => {
            const delays = ["animate-delay-100", "animate-delay-200", "animate-delay-300"];
            return (
            <div
              key={point.title}
              className={`glass-card p-8 group transition-colors ${colorMap[point.color]} animate-on-scroll ${delays[i]}`}
            >
              <h3 className="text-xl font-medium text-white mb-3 leading-[1.3]">
                {point.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {point.description}
              </p>
            </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <p className="text-sm text-neutral-600 text-center mt-8 max-w-2xl mx-auto animate-on-scroll leading-relaxed">
          ※ 独自ドメイン費用、外部サービスの有料プラン、AIツール利用料、アクセス増加に伴う有料プラン移行などが必要になる場合があります。正式なお見積もり時に、必要な費用を明確にご説明します。
        </p>
        <p className="text-lg text-neutral-400 leading-relaxed text-center mt-6 max-w-2xl mx-auto animate-on-scroll">
          月額保守費を抑えることは、小規模ビジネスにおける継続的な情報発信を支える重要な基盤です。
          浮いた予算を広告費や新商品の開発に回すことで、
          Webサイトは真の意味で「利益を生む資産」へと変わります。
        </p>
      </div>
    </section>
  );
}
