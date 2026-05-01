import Image from "next/image";

export default function DirectorSection() {
  const credentials = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-blue-400">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      text: "IT実務経験30年以上。印刷・ソフトウェア開発・Web制作を経て、現在はAI/DX活用支援に従事。",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-green-400">
          <path d="M10 2L2 6v5c0 4.42 3.37 8.56 8 9.56 4.63-1 8-5.14 8-9.56V6L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      text: "中小企業・個人事業主向けのAI/DX活用を支援。難しい専門用語を使わず、ビジネス課題に寄り添った提案を心がけています。",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-amber-400">
          <path d="M17 11c0 5-7 9-7 9s-7-4-7-9a7 7 0 1114 0z" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      text: "元BNIメンバー。紹介・信頼・人柄が重要なビジネスにおいて、Webサイトがどう機能するかを理解しています。",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-purple-400">
          <path d="M18 5H2a1 1 0 00-1 1v8a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 15v3M13 15v3M4 18h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      text: "京都中小企業家同友会に所属。中小企業の現場課題や経営者の想いに向き合いながら、実践的なWeb戦略を提案します。",
    },
  ];

  return (
    <section id="director" className="bg-black/20 border-t border-white/5">
      <div className="section-container py-24">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
              ディレクターについて
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 leading-snug">
              AI任せではありません。
              <br />
              設計するのは、現場を知るWebディレクターです。
            </h2>
            <p className="text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
              「AIが安く作るサービス」は増えています。
              ZeroG Webが違うのは、30年以上のIT実務経験を持つディレクターが
              「何のためのサイトか」を徹底的に整理した上で、AIを制作チームとして活用する点です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Profile Card */}
            <div className="glass-card p-8 animate-on-scroll">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                  <Image
                    src="/kyo-miyagi.jpg"
                    alt="宮城 京"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wide text-blue-400 uppercase mb-1">
                    Webディレクター
                  </div>
                  <div className="text-xl font-semibold text-white">宮城 京</div>
                  <div className="text-sm text-neutral-500 mt-0.5">
                    GROW UP NEXT 代表
                  </div>
                </div>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                「ビジネスの想いを、正しく伝わる形に」をモットーに、
                IT・印刷・Web制作の現場経験を活かしたディレクションを行っています。
                技術の話だけでなく、事業の課題や目標から一緒に考えることを大切にしています。
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                AIを「魔法の道具」ではなく、優秀な制作スタッフとして使いこなすことで、
                品質を落とさず、コストとスピードを両立させます。
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4 animate-on-scroll animate-delay-100">
              {credentials.map((item, i) => (
                <div key={i} className="glass-card p-4 flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Block */}
          <div className="glass-card p-8 text-center border-blue-500/20 animate-on-scroll animate-delay-200">
            <p className="text-base text-neutral-300 leading-relaxed mb-6">
              まだ内容が固まっていなくても大丈夫です。
              「こんなことがしたい」「こんな悩みがある」という段階からご相談いただけます。
              <br />
              <span className="text-neutral-400 text-sm mt-2 inline-block">
                紹介・コミュニティ経由の方も、お気軽にどうぞ。
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="shiny-cta">
                <span>まずは事業の構想を相談する</span>
              </a>
              <a href="#workflow" className="btn-outline">
                制作の流れを見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
