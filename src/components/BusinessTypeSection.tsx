const businessTypes = [
  {
    label: "A",
    title: "新店舗オープンLP",
    color: "text-blue-400",
    borderColor: "hover:border-blue-500/30",
    iconBg: "bg-blue-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-400">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    targets: "飲食店、美容サロン、整体、教室など",
    contents: ["店舗の魅力・コンセプト紹介", "メニュー・料金表", "アクセス・地図", "予約・問い合わせ導線"],
    price: "55,000円〜",
  },
  {
    label: "B",
    title: "個人事業主・専門家サイト",
    color: "text-green-400",
    borderColor: "hover:border-green-500/30",
    iconBg: "bg-green-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-400">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    targets: "士業、コンサルタント、講師、カウンセラーなど",
    contents: ["プロフィール・経歴", "サービス内容・料金", "実績・お客様の声", "問い合わせ導線"],
    price: "55,000円〜",
  },
  {
    label: "C",
    title: "キャンペーン・セミナーLP",
    color: "text-purple-400",
    borderColor: "hover:border-purple-500/30",
    iconBg: "bg-purple-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    targets: "中小企業、団体、イベント主催者",
    contents: ["企画内容・参加メリット", "登壇者・開催概要", "タイムスケジュール", "申込・参加導線"],
    price: "55,000円〜",
  },
  {
    label: "D",
    title: "小規模コーポレートサイト",
    color: "text-amber-400",
    borderColor: "hover:border-amber-500/30",
    iconBg: "bg-amber-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-400">
        <path d="M3 21h18M3 7l9-4 9 4v14H3V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21v-8h6v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    targets: "中小企業、スタートアップ、小規模法人",
    contents: ["会社概要・代表メッセージ", "サービス・事業紹介", "アクセス・会社情報", "問い合わせ導線"],
    price: "85,000円〜",
  },
];

export default function BusinessTypeSection() {
  return (
    <section id="business-types" className="bg-black/20 border-t border-white/5">
      <div className="section-container py-24">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
            制作イメージ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            業種や目的に合わせて、
            <br />
            最短ルートで形にします。
          </h2>
          <p className="text-base text-neutral-400 max-w-xl mx-auto">
            「どんなサイトが必要か」のイメージが湧かない方へ。
            よくあるケース別に、構成・対象・費用の目安をまとめました。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {businessTypes.map((bt, i) => {
            const delays = ["", "animate-delay-100", "", "animate-delay-100"];
            return (
              <div
                key={bt.label}
                className={`glass-card p-8 group transition-colors ${bt.borderColor} animate-on-scroll ${delays[i]}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${bt.iconBg} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                    {bt.icon}
                  </div>
                  <div>
                    <div className={`text-xs font-semibold tracking-wide ${bt.color} uppercase mb-1`}>
                      Type {bt.label}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{bt.title}</h3>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1.5">
                      おすすめ対象
                    </p>
                    <p className="text-sm text-neutral-300">{bt.targets}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-1.5">
                      想定構成
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {bt.contents.map((c) => (
                        <span
                          key={c}
                          className="text-xs bg-white/5 text-neutral-400 px-2.5 py-1 rounded-full border border-white/8"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-xs text-neutral-500">想定費用（税込）</span>
                    <p className={`text-xl font-bold ${bt.color}`}>{bt.price}</p>
                  </div>
                  <a href="#contact" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
                    相談する
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-neutral-600 text-center mt-8 max-w-2xl mx-auto animate-on-scroll">
          ※ 掲載内容は制作イメージです。実際の構成・デザイン・費用はヒアリング内容や必要機能に応じて個別にご提案します。
        </p>
      </div>
    </section>
  );
}
