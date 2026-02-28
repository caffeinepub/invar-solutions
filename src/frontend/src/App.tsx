import { Toaster } from "@/components/ui/sonner";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";
import { WhyUsSection } from "./components/WhyUsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "oklch(0.13 0.025 245)",
            border: "1px solid oklch(0.22 0.04 240)",
            color: "oklch(0.95 0.01 220)",
          },
        }}
      />

      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhyUsSection />
        <IndustriesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
