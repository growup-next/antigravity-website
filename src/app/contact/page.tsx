"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import FadeIn from "@/components/ui/FadeIn";
import CharacterAnimation from "@/components/ui/CharacterAnimation";

export default function ContactPage() {
    return (
        <div className="relative min-h-screen font-sans text-zinc-900 bg-transparent">
            <Header />

            <main className="relative z-10 pt-32 pb-24">
                <div className="container mx-auto px-6 mb-16 text-center">
                    <FadeIn>
                        <CharacterAnimation
                            text="Contact Us"
                            className="text-orange-500 font-medium tracking-widest uppercase mb-4 block"
                            delay={0.1}
                        />
                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-800 mb-6">
                            お問い合わせ
                        </h1>
                        <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                            弊社のサービスや採用についてのご質問、ご相談など、<br className="hidden md:block" />
                            お気軽にお問い合わせください。担当者より折り返しご連絡いたします。
                        </p>
                    </FadeIn>
                </div>

                <Contact />
            </main>

            <Footer />
        </div>
    );
}
