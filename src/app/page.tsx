import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import ClientInit from "@/components/ClientInit";
import HeroSection from "@/components/HeroSection";
import TargetSection from "@/components/TargetSection";
import IntroSection from "@/components/IntroSection";
import DirectorSection from "@/components/DirectorSection";
import WorkflowSection from "@/components/WorkflowSection";
import InfraSection from "@/components/InfraSection";
import BenefitsSection from "@/components/BenefitsSection";
import AiAssistantSection from "@/components/AiAssistantSection";
import CasesSection from "@/components/CasesSection";
import BusinessTypeSection from "@/components/BusinessTypeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const FluidBackground = dynamic(
  () => import("@/components/UnicornBackground")
);
const SimulatorSection = dynamic(
  () => import("@/components/SimulatorSection")
);
const FAQSection = dynamic(
  () => import("@/components/FAQSection")
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
        <TargetSection />
        <IntroSection />
        <DirectorSection />
        <WorkflowSection />
        <InfraSection />
        <SimulatorSection />
        <CasesSection />
        <BusinessTypeSection />
        <BenefitsSection />
        <AiAssistantSection />
        <FAQSection />
        <ContactSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
