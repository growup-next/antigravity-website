"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/FadeIn";
import CharacterAnimation from "@/components/ui/CharacterAnimation";

export default function Services() {
    return (
        <section id="service" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <FadeIn className="text-center mb-16">
                    <CharacterAnimation
                        text="Our Service"
                        className="text-orange-500 font-medium tracking-widest uppercase mb-2 block"
                        delay={0.1}
                    />
                    <CharacterAnimation
                        text="事業案内"
                        className="text-3xl font-bold text-zinc-800 block"
                        delay={0.3}
                    />
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Service 1: HR Training */}
                    <FadeIn
                        delay={0.2}
                        direction="left"
                        className="group relative rounded-[40px] border border-white/40 bg-white/20 backdrop-blur-md p-8 lg:p-12 overflow-hidden hover:bg-white/30 transition-all duration-500 shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-200/40 transition-colors" />

                        <div className="relative z-10">
                            <div className="mb-6 inline-block rounded-lg bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                                重点事業
                            </div>
                            <h4 className="text-2xl font-bold text-zinc-800 mb-4">
                                デジタル人材育成・研修事業
                            </h4>
                            <p className="text-zinc-600 mb-8 leading-relaxed">
                                現場直結の実践型トレーニングで、即戦力となるデジタル人材を育成します。
                                助成金を活用したリスキリング支援も可能です。
                            </p>

                            <ul className="space-y-3 mb-8">
                                {["AI活用階層別研修（新人/管理職）", "デジタル人材リスキリング研修", "助成金活用支援"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Button variant="outline" className="w-full rounded-xl border-orange-200 text-orange-700 hover:bg-orange-50 hover:text-orange-800">
                                サービス詳細を見る
                            </Button>
                        </div>
                    </FadeIn>

                    {/* Service 2: Web Marketing */}
                    <FadeIn
                        delay={0.4}
                        direction="right"
                        className="group relative rounded-[40px] border border-white/40 bg-white/20 backdrop-blur-md p-8 lg:p-12 overflow-hidden hover:bg-white/30 transition-all duration-500 shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-lime-200/40 transition-colors" />

                        <div className="relative z-10">
                            <div className="mb-6 inline-block rounded-lg bg-lime-100 px-3 py-1 text-xs font-bold text-lime-700">
                                プロフェッショナル支援
                            </div>
                            <h4 className="text-2xl font-bold text-zinc-800 mb-4">
                                Webマーケティング事業
                            </h4>
                            <p className="text-zinc-600 mb-8 leading-relaxed">
                                成果を生み出すプロフェッショナルが、戦略立案から運用までトータルサポート。
                                集客と売上アップを実現します。
                            </p>

                            <ul className="space-y-3 mb-8">
                                {["SNS運用サポート", "ECサイト制作・運用サポート", "ホームページ制作・運用サポート"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Button variant="outline" className="w-full rounded-xl border-zinc-200 text-zinc-700 hover:bg-zinc-50">
                                サービス詳細を見る
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
