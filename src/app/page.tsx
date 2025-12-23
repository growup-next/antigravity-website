"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Services from "@/components/sections/Services";
import Advantage from "@/components/sections/Advantage";
import CaseStudy from "@/components/sections/CaseStudy";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans text-zinc-900 bg-transparent">
      <Header />

      <main className="relative z-10">
        <Hero />
        <Mission />
        <Services />
        <Advantage />
        <CaseStudy />
      </main>

      <Footer />
    </div>
  );
}
