import Image from "next/image";

export default function IntroSection() {
  const painPoints = [
    {
      label: "数十万円の初期費用",
      after: "5万円〜",
      color: "blue",
    },
    {
      label: "数ヶ月の制作期間",
      after: "最短3日",
      color: "green",
    },
    {
      label: "専門知識が必要な維持管理",
      after: "日本語で指示するだけ",
      color: "purple",
    },
  ];

  const colorMap: Record<string, { icon: string; border: string; text: string }> = {
    blue: { icon: "bg-blue-500/10", border: "hover:border-blue-500/30", text: "text-blue-400" },
    green: { icon: "bg-green-500/10", border: "hover:border-green-500/30", text: "text-green-400" },
    purple: { icon: "bg-purple-500/10", border: "hover:border-purple-500/30", text: "text-purple-400" },
  };

  return (
    <section id="intro" className="border-t border-white/5">
      <div className="section-container py-24">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
            なぜ今、AIなのか
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Webサイト制作の常識を、
            <br />
            AIが覆す。
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto">
            これまでプロ品質のWebサイトを持つには、
            高い壁が3つありました。
            プロのディレクションとAI技術の組み合わせが、その常識を塗り替えます。
          </p>
          <div className="mt-10 rounded-2xl overflow-hidden max-w-2xl mx-auto">
            <Image
              src="/image01.webp"
              alt="AIが脳のように進化するイメージ"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* 3つの壁 → 解決 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {painPoints.map((item, i) => {
            const c = colorMap[item.color];
            const delay = i === 1 ? "animate-delay-100" : i === 2 ? "animate-delay-200" : "";
            return (
              <div
                key={item.label}
                className={`glass-card p-8 text-center group transition-colors ${c.border} animate-on-scroll ${delay}`}
              >
                <div className={`w-12 h-12 rounded-lg ${c.icon} flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={c.text}>
                    <path d="M13 7l5 5-5 5M6 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-500 mb-2 line-through">
                  {item.label}
                </p>
                <p className="text-xs text-neutral-500 mb-3">↓</p>
                <p className={`text-2xl font-bold ${c.text}`}>
                  {item.after}
                </p>
              </div>
            );
          })}
        </div>

        {/* 本文 */}
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            従来は「人の手」が数週間かけて行っていた設計やプログラミングを、
            プロのディレクターの設計力とAIの処理速度を組み合わせることで、
            品質を落とさず大幅に効率化しました。
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            ITへの苦手意識がある方もご安心ください。
            ディレクターがヒアリングで「何が必要か」を整理した上で進めるため、
            オーナー様は「管理に追われる時間」から解放され、
            <strong className="text-white">本業に集中できる時間</strong>を取り戻せます。
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed">
            制作の効率化がもたらすメリットは、単なるコスト削減に留まりません。
            ビジネスのアイデアを熱いうちに形にできる
            「圧倒的なスピード感」こそが、現代のWeb戦略における最大の武器です。
          </p>
        </div>
      </div>
    </section>
  );
}
