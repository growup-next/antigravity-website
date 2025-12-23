"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center pt-20 px-6 overflow-hidden">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="text-left z-10">
                    <FadeIn delay={0.1}>
                        <div className="mb-6 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 backdrop-blur-sm">
                            <span className="text-sm font-medium text-orange-600 tracking-wider">
                                Kyoto Web & HR Strategy Partner
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-800 mb-6 leading-tight">
                            Grow Together <br />
                            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-lime-500">Digital Intelligence.</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-lg leading-relaxed">
                            その課題を、自走できる力へ。<br />
                            「デジタル人材」の育成とマーケティング支援で、<br />
                            御社の変革を支え続けます。
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12 shadow-lg hover:shadow-orange-500/30 transition-all text-base">
                                デジタル人材育成について
                            </Button>
                            <Button size="lg" variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50 rounded-full px-8 h-12 text-base bg-white/50 backdrop-blur-sm">
                                Webマーケティングについて
                            </Button>
                        </div>
                    </FadeIn>
                </div>

                {/* Visual Element (Glass Panel with Image) */}
                <FadeIn delay={0.4} direction="left" className="hidden lg:flex justify-center items-center relative">
                    <div className="relative w-[500px] h-[600px] rounded-[40px] border border-white/40 shadow-2xl overflow-hidden group">
                        {/* ヒーロー画像: 20代男性のイメージ */}
                        <div className="absolute inset-0">
                            <Image
                                src="/hero_training.png"
                                alt="Engaged employee learning on laptop"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent mix-blend-overlay" />
                        </div>

                        {/* Glass Reflection effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50 pointer-events-none" />
                    </div>

                    {/* Floating Elements (Decorations) */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-lime-300/30 blur-2xl -z-10"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-orange-300/30 blur-3xl -z-10"
                    />
                </FadeIn>
            </div>
        </section>
    );
}
