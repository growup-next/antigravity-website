"use client";

import FadeIn from "@/components/ui/FadeIn";
import CharacterAnimation from "@/components/ui/CharacterAnimation";

export default function Advantage() {
    const advantages = [
        {
            num: "01",
            title: "実践型ノウハウ",
            desc: "机上の空論ではなく、現場を知るプロフェッショナルが教える「明日から使える生きたスキル」を提供します。"
        },
        {
            num: "02",
            title: "AI × デジタル最前線",
            desc: "生成AIなどの最新技術をいち早く研修カリキュラムやマーケティング施策に導入し、競合優位性を築きます。"
        },
        {
            num: "03",
            title: "伴走型トータルサポート",
            desc: "研修して終わり、作って終わりではありません。その後の定着、運用、成果創出まで徹底的に伴走します。"
        }
    ];

    return (
        <section id="advantage" className="py-24 px-6 md:py-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[300px] bg-white/5 skew-y-6 -z-10 backdrop-blur-sm" />

            <div className="container mx-auto">
                <FadeIn className="text-center mb-20">
                    <CharacterAnimation
                        text="Advantage"
                        className="text-orange-500 font-medium tracking-widest uppercase mb-2 w-full block"
                        delay={0.1}
                    />
                    <CharacterAnimation
                        text="選ばれる理由"
                        className="text-3xl font-bold text-zinc-800 w-full block"
                        delay={0.3}
                    />
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {advantages.map((item, i) => (
                        <FadeIn
                            key={i}
                            delay={i * 0.2}
                            direction="up"
                            className="relative p-8 rounded-3xl bg-white/40 border border-white/50 backdrop-blur-md shadow-lg"
                        >
                            <div className="text-6xl font-bold text-white/50 mb-4 font-sans italic absolute -top-6 -right-4 drop-shadow-sm select-none">
                                {item.num}
                            </div>
                            <h4 className="text-xl font-bold text-zinc-800 mb-4 relative z-10">
                                {item.title}
                            </h4>
                            <p className="text-zinc-600 leading-relaxed relative z-10 text-sm">
                                {item.desc}
                            </p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
