import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ParticipateSection } from "@/components/participate-section";
import { ChallengesSection } from "@/components/challenges-section";
import { PrizesSection } from "@/components/prizes-section";
import { SponsorsSection } from "@/components/sponsors-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";
import { CodeBackground } from "@/components/code-background";
import { ImageCarousel } from "@/components/slider-section";

import slider1 from "../assets/1.png";
import slider2 from "../assets/2.png";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <CodeBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <ImageCarousel
          images={[
            { src: slider1.src, alt: "First Slide" },
            { src: slider2.src, alt: "Second Slide" },
          ]}
        />
        <AboutSection />
        <ChallengesSection />
        <PrizesSection />
        <ParticipateSection />
        <SponsorsSection />
        <FaqSection />
        <ContactSection />
      </main>
    </div>
  );
}
