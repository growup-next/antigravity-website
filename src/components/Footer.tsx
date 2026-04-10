export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-neutral-500">
            &copy; 2026 ZeroG Web. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              利用規約
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
