import Image from "next/image";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="border-t border-white/5">
      <div className="section-container py-24">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">
          <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase mb-3">
            プロ品質の証明
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            安いだけじゃない。
            <br />
            プロ品質を、AIで。
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto">
            「AIが作るなら、品質はそれなりでは？」という心配は不要です。
            プロのディレクターの最終確認と、AIの効率的な実装で、
            品質とスピードを両立しています。
          </p>
          <div className="mt-10 rounded-2xl overflow-hidden max-w-2xl mx-auto">
            <Image
              src="/image02.webp"
              alt="AIが制作したプロ品質のWebサイトイメージ"
              width={1270}
              height={952}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="glass-card p-8 md:p-12 mb-6 animate-on-scroll animate-delay-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-semibold tracking-wide text-blue-400 uppercase mb-3">
                速さには、ちゃんと理由がある
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 leading-[1.1]">
                最新技術が、
                <br />
                <span className="text-blue-400">速さの正体</span>です。
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                GoogleがWeb品質基準として定めるCore Web Vitalsに最適化されたNext.jsフレームワークを採用。
                Notion・Vercel・AI企業各社が使う同じインフラで配信されるため、
                表示速度・安定性・SEOが高い水準で揃います。
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                さらにこの最新コード構造は、AIが直接読み書きできる設計になっています。
                納品後の更新もAIへの指示ひとつで完結。
                技術的に陳腐化しにくく、長く使い続けられるサイトです。
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/image03.webp"
                alt="最新技術スタックで構築されたWebサイトのイメージ"
                width={1456}
                height={816}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* SEO */}
        <div className="glass-card p-8 md:p-12 mb-6 animate-on-scroll animate-delay-200">
          <p className="text-xs font-semibold tracking-wide text-blue-400 uppercase mb-3">
            検索エンジンに愛される「電子の名札」
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 leading-[1.1]">
            SEO対策も、
            <br />
            標準で完備。
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 hover:border-blue-500/30 transition-colors">
              <h4 className="text-xl font-medium text-white mb-2">
                電子の名札（メタタグ）
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                検索エンジンが内容を正しく理解するための設定を最適化。
                タイトル、説明文、OGP画像まで、すべて設定済みで納品します。
              </p>
            </div>
            <div className="glass-card p-6 hover:border-green-500/30 transition-colors">
              <h4 className="text-xl font-medium text-white mb-2">
                地図情報の提供（構造化データ）
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                AIが検索エンジン向けにサイトの構造を分かりやすく翻訳して伝えます。
                公開時点で必要な基本設定を整えた状態からスタートできます。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <p className="text-lg text-neutral-400 leading-relaxed text-center mt-8 max-w-2xl mx-auto animate-on-scroll">
          「速くて、検索に見つかりやすい」。
          この基本性能が最初から備わっているため、
          公開時点で必要な基本設定を整えた状態からスタートできます。
        </p>
      </div>
    </section>
  );
}
