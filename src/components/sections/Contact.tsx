"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/FadeIn";
import CharacterAnimation from "@/components/ui/CharacterAnimation";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:py-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl -z-10 translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Info */}
                    <div>
                        <FadeIn>
                            <CharacterAnimation
                                text="Contact"
                                className="text-orange-500 font-medium tracking-widest uppercase mb-2 w-full block"
                                delay={0.1}
                            />
                            <CharacterAnimation
                                text="お問い合わせ"
                                className="text-3xl md:text-4xl font-bold text-zinc-800 mb-8 w-full block"
                                delay={0.3}
                            />
                            <p className="text-lg text-zinc-600 mb-12 leading-relaxed max-w-md">
                                デジタル人材育成、Webマーケティング、または採用に関するご質問など、お気軽にお問い合わせください。
                            </p>
                        </FadeIn>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "メールでのお問い合わせ", value: "info@media-creates.com" },
                                { icon: Phone, label: "お電話でのお問い合わせ", value: "075-741-6547" },
                                { icon: MapPin, label: "所在地", value: "京都市中京区壬生西土居ノ内町20-5 ホンダビル4階" },
                            ].map((item, i) => (
                                <FadeIn key={i} delay={0.4 + i * 0.1} direction="right">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center text-orange-500 shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">{item.label}</p>
                                            <p className="text-zinc-800 font-medium">{item.value}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form Card */}
                    <FadeIn delay={0.6} direction="left">
                        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] p-8 md:p-12 shadow-2xl relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-lime-500/5 rounded-[40px] pointer-events-none" />

                            <form className="relative z-10 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-700 ml-1">お名前</label>
                                        <input
                                            type="text"
                                            placeholder="山田 太郎"
                                            className="w-full bg-white/50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-700 ml-1">貴社名</label>
                                        <input
                                            type="text"
                                            placeholder="株式会社アンティグラビティ"
                                            className="w-full bg-white/50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-700 ml-1">メールアドレス</label>
                                    <input
                                        type="email"
                                        placeholder="example@media-creates.com"
                                        className="w-full bg-white/50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-700 ml-1">お問い合わせ内容</label>
                                    <textarea
                                        rows={4}
                                        placeholder="ご自由にご記入ください"
                                        className="w-full bg-white/50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <Button className="w-full h-14 rounded-2xl bg-zinc-900 hover:bg-black text-white font-bold text-lg group shadow-xl transition-all">
                                    送信する
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <p className="text-[10px] text-zinc-400 text-center px-4">
                                    送信することで、当社の
                                    <Link href="/privacy" className="text-orange-500 hover:underline">プライバシーポリシー</Link>
                                    に同意したものとみなされます。
                                </p>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
