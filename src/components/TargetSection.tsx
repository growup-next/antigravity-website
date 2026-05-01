export default function TargetSection() {
  const targets = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-400">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="currentColor" opacity="0" />
          <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      color: "bg-blue-500/10",
      title: "新しく事業を立ち上げる個人事業主の方",
      description: "開業届を出したばかり、またはこれから独立する方。まず「顔となるサイト」を低コストで持ちたい。",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-400">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      color: "bg-green-500/10",
      title: "新店舗オープンに合わせてWebサイトを用意したい方",
      description: "飲食店、美容サロン、整体院、教室など。オープン日に合わせて最短ルートで公開したい。",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      color: "bg-purple-500/10",
      title: "セミナー・イベント・キャンペーン用LPを短期間で公開したい中小企業",
      description: "告知から公開まで時間がない。デザイン会社への依頼では間に合わない案件も対応可能です。",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-400">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      color: "bg-amber-500/10",
      title: "制作会社に数十万円かける前に、まずは小さく始めたい方",
      description: "「まずは試してみたい」「予算を抑えて早く動きたい」という方に最適な出発点です。",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      color: "bg-cyan-500/10",
      title: "月額保守費をかけず、自分で更新できるサイトを持ちたい方",
      description: "「更新のたびに業者に頼んでいる」「毎月の保守費が負担」という方の悩みを解消します。",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose-400">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      color: "bg-rose-500/10",
      title: "BNI・地域コミュニティ・紹介営業で信頼を伝えるWebサイトが必要な方",
      description: "名刺交換後、「サイトを見て連絡しよう」と思ってもらえる。紹介ビジネスの信頼構築を支援します。",
    },
  ];

  return (
    <section id="targets" className="border-t border-white/5">
      <div className="section-container py-24">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
            こんな方におすすめです
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            新しい挑戦を、
            <br />
            Webで素早く形にしたい方へ。
          </h2>
          <p className="text-base text-neutral-400 max-w-xl mx-auto">
            アイデアが固まりきっていなくても大丈夫。
            「こんなサイトが欲しい」という想いから一緒に整理します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {targets.map((item, i) => {
            const delay = ["", "animate-delay-100", "animate-delay-200", "", "animate-delay-100", "animate-delay-200"][i] ?? "";
            return (
              <div
                key={item.title}
                className={`glass-card p-6 flex gap-4 group hover:border-white/15 transition-colors animate-on-scroll ${delay}`}
              >
                <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-sm text-neutral-500 mb-6">
            「自分のケースは当てはまるのだろうか？」と思ったら、まずお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="shiny-cta">
              <span>事業の構想を相談する</span>
            </a>
            <a href="#simulator" className="btn-outline">
              料金をシミュレートする
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
