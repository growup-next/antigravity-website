import Navigation from "@/components/Navigation";
import FluidBackground from "@/components/FluidBackground";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import WorkflowSection from "@/components/WorkflowSection";
import InfraSection from "@/components/InfraSection";
import SimulatorSection from "@/components/SimulatorSection";
import BenefitsSection from "@/components/BenefitsSection";
import AiAssistantSection from "@/components/AiAssistantSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FluidBackground />
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <WorkflowSection />
        <InfraSection />
        <SimulatorSection />
        <BenefitsSection />
        <AiAssistantSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
