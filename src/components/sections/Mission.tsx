"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";

export default function Mission() {
    return (
        <section id="mission" className="py-24 px-6 md:py-32 relative">
            <div className="container mx-auto max-w-4xl text-center">
                <FadeIn viewportMargin="-100px">
                    <h2 className="text-orange-500 font-medium tracking-widest uppercase mb-4">Mission</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-8">
                        Empowerment by Digital
                    </h3>
                    <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light">
                        DX時代において、真に求められるのはシステムだけではありません。<br />
                        それを使いこなし、ビジネスを変革できる<span className="text-orange-600 font-normal">「人」</span>の力です。<br />
                        私たちは、貴社のデジタル人材を育て、<br />
                        共に走るパートナーとして未来を創ります。
                    </p>

                </FadeIn>
            </div>

            <div className="mt-16 w-full">
                <InfiniteCarousel />
            </div>
        </section>
    );
}
