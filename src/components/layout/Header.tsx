"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";

const navItems = [
    { name: "想い", href: "#mission" },
    { name: "事業案内", href: "#service" },
    { name: "選ばれる理由", href: "#advantage" },
    { name: "実績", href: "#case-study" },
    { name: "会社案内", href: "#company" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

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
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-zinc-800 hover:text-black transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Button
                        className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium px-6 shadow-lg hover:shadow-orange-500/25 transition-all"
                    >
                        お問い合わせ
                    </Button>
                </div>

                {/* Mobile Menu Icon (Placeholder) */}
                <button className="md:hidden text-zinc-900">
                    <span className="block w-6 h-0.5 bg-current mb-1.5" />
                    <span className="block w-6 h-0.5 bg-current mb-1.5" />
                    <span className="block w-6 h-0.5 bg-current" />
                </button>
            </div>
        </header>
    );
}
