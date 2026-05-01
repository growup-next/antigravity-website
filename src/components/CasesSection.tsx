const cases = [
  {
    name: "株式会社 ONE by ONE",
    type: "コーポレートサイト",
    typeColor: "bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30",
    aiPoints: [
      "コピーライティングをAIと共同で作成し、短時間で完成度の高い文章を実現",
      "デザインの方向性をAIと壁打ちしながら決定、複数案を素早く比較",
      "レスポンシブ実装・SEO設定をAIが効率化",
    ],
    directorPoints: [
      "事業の強みと想いをヒアリングし、ターゲットに刺さる構成を設計",
      "競合との差別化ポイントを整理し、伝わる言葉に落とし込む",
    ],
    url: "https://www.1-by-1.jp/",
    gradient: "from-blue-900/20 to-purple-900/20",
    borderColor: "hover:border-blue-500/30",
  },
  {
    name: "京都税理士業AI研究会",
    type: "研究会サイト",
    typeColor: "bg-green-500/15 text-green-400 ring-1 ring-green-500/30",
    aiPoints: [
      "研究会の活動内容・ミッションの文章化をAIで効率化",
      "会員向けの情報設計をAIと検討しながら構築",
      "専門的な税務・AI関連の情報を整理し、読みやすく構造化",
    ],
    directorPoints: [
      "専門家コミュニティとしての信頼感と親しみやすさのバランスを設計",
      "新規会員獲得を意識した参加導線と情報構造を整備",
    ],
    url: "https://kyoto-tax-ai-lab.kai-design.net/",
    gradient: "from-green-900/20 to-teal-900/20",
    borderColor: "hover:border-green-500/30",
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="border-t border-white/5">
      <div className="section-container py-24">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
            制作実績
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            実際にAIを活用して
            <br />
            制作したサイト。
          </h2>
          <p className="text-base text-neutral-400 max-w-xl mx-auto">
            「AIが作った」ではなく、「AIを活用し、プロのディレクションで仕上げた」サイトです。
            設計・ライティング・デザイン・実装の各工程でAIを効率化ツールとして活用しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <div
              key={c.name}
              className={`glass-card overflow-hidden group transition-colors ${c.borderColor} animate-on-scroll ${i === 1 ? "animate-delay-100" : ""}`}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${c.gradient} p-8 border-b border-white/5`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium mb-3 ${c.typeColor}`}>
                      {c.type}
                    </span>
                    <h3 className="text-2xl font-semibold text-white">{c.name}</h3>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                {/* AI Points */}
                <div className="mb-6">
                  <p className="text-xs font-semibold tracking-wide text-blue-400 uppercase mb-3">
                    AI活用ポイント
                  </p>
                  <ul className="space-y-2">
                    {c.aiPoints.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-neutral-400">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-blue-500 flex-shrink-0 mt-0.5">
                          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Director Points */}
                <div className="mb-6">
                  <p className="text-xs font-semibold tracking-wide text-amber-400 uppercase mb-3">
                    ディレクションで重視したポイント
                  </p>
                  <ul className="space-y-2">
                    {c.directorPoints.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-neutral-400">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-amber-500 flex-shrink-0 mt-0.5">
                          <path d="M8 1l2 5h5l-4 3 1.5 5L8 11l-4.5 3L5 9 1 6h5L8 1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  サイトを見る
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-neutral-600 text-center mt-8 animate-on-scroll">
          ※ 掲載許可をいただいたサイトのみ掲載しています。
        </p>
      </div>
    </section>
  );
}
