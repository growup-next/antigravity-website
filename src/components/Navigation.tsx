"use client";

import { useState } from "react";
import Image from "next/image";

const desktopLinks = [
  { label: "こんな方に", href: "#targets" },
  { label: "サービスとは", href: "#intro" },
  { label: "ディレクター", href: "#director" },
  { label: "料金", href: "#simulator" },
  { label: "制作実績", href: "#cases" },
  { label: "FAQ", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

const mobileLinks = [
  { label: "こんな方に", href: "#targets" },
  { label: "ZeroG Webとは", href: "#intro" },
  { label: "ディレクターについて", href: "#director" },
  { label: "制作の流れ", href: "#workflow" },
  { label: "月額¥0の仕組み", href: "#infra" },
  { label: "料金シミュレーター", href: "#simulator" },
  { label: "制作実績", href: "#cases" },
  { label: "制作タイプ別", href: "#business-types" },
  { label: "品質・技術", href: "#benefits" },
  { label: "AI更新機能", href: "#ai-assistant" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="section-container flex items-center justify-between h-full">
        <a href="#">
          <Image
            src="/zerog-web-logo.png"
            alt="ZeroG Web"
            width={120}
            height={34}
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {desktopLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#simulator" className="shiny-cta !py-2 !px-5 !text-sm">
            <span>見積もりする</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <span
            className="block w-[18px] h-[1.5px] bg-white transition-transform"
            style={{
              transform: isOpen ? "rotate(45deg) translate(2px, 4px)" : "none",
            }}
          />
          <span
            className="block w-[18px] h-[1.5px] bg-white transition-opacity"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <span
            className="block w-[18px] h-[1.5px] bg-white transition-transform"
            style={{
              transform: isOpen ? "rotate(-45deg) translate(2px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 py-4 px-6 bg-neutral-900 border-b border-white/10">
          {mobileLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-neutral-400 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4">
            <a
              href="#simulator"
              className="shiny-cta w-full text-center block"
              onClick={() => setIsOpen(false)}
            >
              <span>見積もりする</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
