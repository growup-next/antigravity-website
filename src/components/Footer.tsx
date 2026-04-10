import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="https://growup-next.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/growupnext-logo.png"
                alt="GROW UP NEXT"
                width={140}
                height={40}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-neutral-500">
              &copy; 2026 GROW UP NEXT. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://growup-next.com/privacy-policy/" className="text-neutral-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
