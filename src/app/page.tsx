import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import ClientInit from "@/components/ClientInit";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import WorkflowSection from "@/components/WorkflowSection";
import InfraSection from "@/components/InfraSection";
import BenefitsSection from "@/components/BenefitsSection";
import AiAssistantSection from "@/components/AiAssistantSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const FluidBackground = dynamic(
  () => import("@/components/FluidBackground")
);
const SimulatorSection = dynamic(
  () => import("@/components/SimulatorSection")
);
const ContactFormSection = dynamic(
  () => import("@/components/ContactFormSection")
);

export default function Home() {
  return (
    <>
      <ClientInit />
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
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
