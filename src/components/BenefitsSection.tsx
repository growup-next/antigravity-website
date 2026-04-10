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
            最新のAIは人間が手作業で行うには細かすぎる最適化を、標準仕様として完璧に実行します。
          </p>
        </div>

        {/* PageSpeed */}
        <div className="glass-card p-8 md:p-12 mb-6 animate-on-scroll animate-delay-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-semibold tracking-wide text-blue-400 uppercase mb-3">
                「3秒の壁」を突破する圧倒的な速さ
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 leading-[1.1]">
                PageSpeed
                <br />
                <span className="text-blue-400">90点以上</span>が標準。
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Webサイトは、表示に3秒以上かかると訪問者の約50%が離脱すると言われています。
                せっかく集客した見込み客を半分捨てているのと同じです。
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                ZeroG Webが制作するサイトは、
                Googleの評価指標（PageSpeed Insights）で90点以上の満点レベルを標準としています。
                この「爆速」の表示スピードこそが、顧客の離脱を防ぎ、
                信頼性を高める最高のおもてなしとなります。
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex flex-col items-center justify-center rounded-full w-[180px] h-[180px] border-2 border-blue-500/30 bg-blue-500/10">
                <span className="text-6xl font-bold text-white leading-none">
                  90
                </span>
                <span className="text-xs text-neutral-500 mt-1 tracking-wide uppercase">
                  PageSpeed
                </span>
              </div>
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
                特別な知識がなくても、公開直後からプロ水準の土俵で戦えます。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <p className="text-lg text-neutral-400 leading-relaxed text-center mt-8 max-w-2xl mx-auto animate-on-scroll">
          「速くて、検索に見つかりやすい」。
          この基本性能が最初から備わっているため、
          公開直後からプロ水準のスタートが切れます。
        </p>
      </div>
    </section>
  );
}
