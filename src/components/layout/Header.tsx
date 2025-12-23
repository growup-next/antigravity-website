"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";

import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const navItems = [
    { name: "私たちの想い", href: "/mission" },
    {
        name: "事業案内",
        href: "/service",
        subItems: [
            { name: "デジタル人材育成・研修", href: "/service/training" },
            { name: "Webマーケティング", href: "/service/marketing" },
        ],
    },
    { name: "実績・事例", href: "/case-study" },
    {
        name: "会社案内",
        href: "/about",
        subItems: [
            { name: "会社概要", href: "/about/company" },
            { name: "代表あいさつ", href: "/about/message" },
        ],
    },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/20 backdrop-blur-md shadow-sm border-b border-black/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-10 w-40">
                        <Image
                            src="/logo.png"
                            alt="Media Creates"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group/nav">
                            <Link
                                href={item.href}
                                className="text-sm font-medium text-zinc-800 hover:text-black transition-colors relative flex items-center gap-1 py-1"
                            >
                                {item.name}
                                {item.subItems && (
                                    <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover/nav:rotate-180" />
                                )}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover/nav:w-full" />
                            </Link>

                            {item.subItems && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-200">
                                    <div className="bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl p-2 min-w-[240px] shadow-2xl overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
                                        {item.subItems.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="block px-4 py-2.5 text-sm font-medium text-zinc-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all relative z-10"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Button
                        asChild
                        className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium px-6 shadow-lg hover:shadow-orange-500/25 transition-all"
                    >
                        <Link href="/contact">お問い合わせ</Link>
                    </Button>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden text-zinc-900 z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-2xl pt-24 pb-12 px-6 md:hidden z-40"
                        >
                            <nav className="flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <div key={item.name} className="flex flex-col gap-3">
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-lg font-bold text-zinc-900 text-left"
                                        >
                                            {item.name}
                                        </Link>
                                        {item.subItems && (
                                            <div className="flex flex-col gap-3 pl-4 border-l-2 border-orange-500/20">
                                                {item.subItems.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="text-sm font-medium text-zinc-600 text-left hover:text-orange-600 transition-colors"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <Button
                                    asChild
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mt-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-6 shadow-xl"
                                >
                                    <Link href="/contact">お問い合わせ</Link>
                                </Button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
