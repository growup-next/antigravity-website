"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-800 text-white">
            {/* CTA Section (Dual Gate) */}
            <div className="grid md:grid-cols-2 border-b border-zinc-800">
                {/* Organization / Training CTA */}
                <div className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-zinc-800">
                    <Image
                        src="/footer_training.png"
                        alt="Corporate Training"
                        fill
                        className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-900/80 to-orange-900/40 opacity-100 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="p-12 md:p-20 flex flex-col items-center text-center relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 relative">
                            組織を強くしたい企業様
                        </h3>
                        <p className="text-zinc-300 mb-8 max-w-sm relative font-medium">
                            デジタル人材育成研修や、助成金を活用したリスキリングのご相談はこちら
                        </p>
                        <Button
                            size="lg"
                            className="bg-white text-orange-600 hover:bg-zinc-100 rounded-full px-8 shadow-lg hover:shadow-orange-500/20 transition-all"
                        >
                            人材育成について相談する
                        </Button>
                    </div>
                </div>

                {/* Marketing CTA */}
                <div className="relative group overflow-hidden">
                    <Image
                        src="/footer_marketing.jpg"
                        alt="Web Marketing"
                        fill
                        className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-900/80 to-lime-900/40 opacity-100 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="p-12 md:p-20 flex flex-col items-center text-center relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 relative">
                            Web集客を強化したい企業様
                        </h3>
                        <p className="text-zinc-300 mb-8 max-w-sm relative font-medium">
                            SNS運用代行やECサイト制作、ホームページ運用改善のご相談はこちら
                        </p>
                        <Button
                            size="lg"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-zinc-900 rounded-full px-8 shadow-lg hover:shadow-lime-500/20 transition-all"
                        >
                            Web集客について相談する
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div>
                        <div className="mb-6 p-2 bg-white rounded-md inline-block">
                            <div className="relative h-10 w-40">
                                <Image
                                    src="/logo.png"
                                    alt="Media Creates"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>

                        <address className="not-italic text-sm text-zinc-400 space-y-4">
                            <div>
                                <p className="font-bold text-zinc-300 mb-1">【本社】</p>
                                <p>〒600-8491</p>
                                <p>京都市下京区室町通四条下る鶏鉾町480番地 オフィスワン四条烏丸 7Ｆ</p>
                            </div>
                            <div>
                                <p className="font-bold text-zinc-300 mb-1">【制作部・研修事業部】</p>
                                <p>〒604-8847</p>
                                <p>京都市中京区壬生西土居ノ内町20-5 ホンダビル4階</p>
                                <p className="mt-1">TEL : 075-741-6547 / FAX : 075-741-6507</p>
                            </div>
                        </address>
                    </div>

                    <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-zinc-400">
                        <Link href="#" className="hover:text-white transition-colors">私たちの想い</Link>
                        <Link href="#" className="hover:text-white transition-colors">事業案内</Link>
                        <Link href="#" className="hover:text-white transition-colors">選ばれる理由</Link>
                        <Link href="#" className="hover:text-white transition-colors">実績・事例</Link>
                        <Link href="#" className="hover:text-white transition-colors">会社案内</Link>
                        <Link href="#" className="hover:text-white transition-colors">プライバシーポリシー</Link>
                    </nav>
                </div>

                <div className="mt-12 pt-8 border-t border-zinc-800 text-center md:text-left text-xs text-zinc-600">
                    &copy; {new Date().getFullYear()} Media Creates Inc. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
