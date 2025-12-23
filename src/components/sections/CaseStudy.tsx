"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import CharacterAnimation from "@/components/ui/CharacterAnimation";

export default function CaseStudy() {
    const cases = [
        {
            cat: "Education",
            title: "全社的なAI活用研修で、業務時間を月200時間削減",
            company: "製造業 A社様",
            result: "業務効率 15% UP"
        },
        {
            cat: "Marketing",
            title: "ECサイトのリニューアルとSNS運用で売上が昨対比150%達成",
            company: "小売業 B社様",
            result: "ROAS 300% 達成"
        },
        {
            cat: "Education",
            title: "未経験エンジニア育成研修により、内製化体制の構築に成功",
            company: "IT企業 C社様",
            result: "採用コスト 50% 削減"
        }
    ];

    return (
        <section id="case-study" className="py-24 px-6 md:pb-40">
            <div className="container mx-auto">
                <FadeIn className="text-center flex flex-col items-center mb-16 gap-6">
                    <div>
                        <CharacterAnimation
                            text="Case Study"
                            className="text-orange-500 font-medium tracking-widest uppercase mb-2 block"
                            delay={0.1}
                        />
                        <CharacterAnimation
                            text="導入事例"
                            className="text-3xl font-bold text-zinc-800 block"
                            delay={0.3}
                        />
                    </div>
                    <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-2 group">
                        すべての実績を見る
                        <span className="block w-4 h-[1px] bg-current transition-all group-hover:w-6" />
                    </a>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((item, i) => (
                        <FadeIn
                            key={i}
                            delay={i * 0.15}
                            direction="up"
                            className="group cursor-pointer rounded-2xl bg-white border border-zinc-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border ${item.cat === "Education" ? "text-orange-600 border-orange-200 bg-orange-50" : "text-lime-600 border-lime-200 bg-lime-50"
                                    }`}>
                                    {item.cat}
                                </span>
                            </div>
                            <h4 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-xs text-zinc-500 mb-6">{item.company}</p>

                            <div className="border-t border-zinc-100 pt-4">
                                <p className="text-sm font-bold text-zinc-800 flex items-center gap-2">
                                    <span className="text-lg">🏆</span>
                                    {item.result}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
