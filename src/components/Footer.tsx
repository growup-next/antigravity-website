import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/zerog-web-logo.png"
              alt="ZeroG Web"
              width={100}
              height={28}
              className="h-7 w-auto opacity-80"
            />
            <div className="flex flex-col md:flex-row items-center gap-2 text-neutral-500">
              <span>Powered by</span>
              <a href="https://growup-next.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/growupnext-logo.png"
                  alt="GROW UP NEXT"
                  width={120}
                  height={34}
                  className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
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
