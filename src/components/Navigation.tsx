"use client";

import { useState } from "react";

const navLinks = [
  { label: "AIとは", href: "#intro" },
  { label: "ワークフロー", href: "#workflow" },
  { label: "料金", href: "#simulator" },
  { label: "品質", href: "#benefits" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="section-container flex items-center justify-between h-full">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-white"
        >
          Antigravity Web
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
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
          className="md:hidden flex flex-col gap-[5px] p-2"
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
        <div className="md:hidden absolute top-16 left-0 right-0 py-4 px-6 bg-neutral-900 border-b border-white/10">
          {navLinks.map((link) => (
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
