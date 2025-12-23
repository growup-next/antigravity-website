"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import CharacterAnimation from "@/components/ui/CharacterAnimation";

export default function PrivacyPolicyPage() {
    return (
        <div className="relative min-h-screen font-sans text-zinc-900 bg-transparent">
            <Header />

            <main className="relative z-10 pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <FadeIn>
                        <CharacterAnimation
                            text="Privacy Policy"
                            className="text-orange-500 font-medium tracking-widest uppercase mb-4 block"
                            delay={0.1}
                        />
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-12">
                            プライバシーポリシー
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="prose prose-zinc max-w-none space-y-12 text-zinc-600 leading-relaxed">
                            <section>
                                <p>
                                    株式会社メディアクリエイツは、お客様のプライバシーを尊重し個人情報に対して十分な配慮を行い、以下の通り適正な管理を行うことに努めております。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-zinc-800 border-l-4 border-orange-500 pl-4">利用目的</h2>
                                <p>
                                    お客様から提供を受けた個人情報は、より良い商品･サービスの告知、有用な情報のお届け、その他正当な目的のためにのみ利用いたします。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-zinc-800 border-l-4 border-orange-500 pl-4">個人情報の収集</h2>
                                <p>
                                    お客様の個人情報を収集させていただく場合は、収集目的等を明示したうえ、必要な範囲内で収集させていただきます。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-zinc-800 border-l-4 border-orange-500 pl-4">第三者提供の制限</h2>
                                <p>
                                    お客様の個人情報は、以下の場合を除き第三者に開示、提供、譲渡することは致しません。
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>業務委託先、グループ関連会社において業務遂行上必要な場合</li>
                                    <li>法的拘束力がある第三者機関から開示要求があった場合</li>
                                    <li>お客様本人の同意があった場合</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-zinc-800 border-l-4 border-orange-500 pl-4">委託先の管理</h2>
                                <p>
                                    個人情報の処理を外部へ委託する場合は、漏えいや再提供を行わないように、委託先との契約により義務づけ、適切な管理をいたします。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-zinc-800 border-l-4 border-orange-500 pl-4">法令遵守</h2>
                                <p>
                                    個人情報保護に関する関係法令を遵守すると共に、本ポリシーの内容は継続的に精査し、改善に努めます。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-zinc-800 border-l-4 border-orange-500 pl-4">個人情報に関するお問い合わせ</h2>
                                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 md:p-8 space-y-2 text-sm md:text-base">
                                    <p className="font-bold text-zinc-800">株式会社メディアクリエイツ</p>
                                    <p>〒600-8491</p>
                                    <p>京都市下京区室町通四条下る鶏鉾町480番地 オフィスワン四条烏丸7Ｆ</p>
                                    <p className="pt-2">
                                        TEL : 075-741-6547 / FAX : 075-741-6507 / オンラインFAX : 020-4662-3298
                                    </p>
                                </div>
                            </section>
                        </div>
                    </FadeIn>
                </div>
            </main>

            <Footer />
        </div>
    );
}
