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
import { TopTeamsGrid, type TeamItem } from "@/components/teams";

const TEAMS: TeamItem[] = [
  {
    imageSrc: "/WhatsApp Image 2025-11-11 at 16.51.27_05dc1019.jpg",
    name: "SOFTCORE",
    rank: 1,
  },
  {
    imageSrc: "/WhatsApp Image 2025-11-11 at 16.51.27_5feefb0a.jpg",
    name: "GACKS",
    rank: 2,
  },
  {
    imageSrc: "/WhatsApp Image 2025-11-11 at 16.51.27_48e88934.jpg",
    name: "TRIO-RGB",
    rank: 3,
  },
  {
    imageSrc: "/WhatsApp Image 2025-11-11 at 16.51.27_72cd6af1.jpg",
    name: "TEAM REEF CIPHER",
    rank: 4,
  },
  {
    imageSrc: "/WhatsApp Image 2025-11-11 at 16.51.27_4926a697.jpg",
    name: "STACK 3",
    rank: 5,
  },
  {
    imageSrc: "/WhatsApp Image 2025-11-11 at 16.51.27_da969197.jpg",
    name: "INNOMINDS",
    rank: 6,
  },
  {
    imageSrc: "/WhatsApp Image 2025-11-11 at 16.51.27_ddbfba8d.jpg",
    name: "B-COR",
    rank: 7,
  },
  {
    imageSrc: "/WhatsApp Image 2025-11-11 at 16.51.28_3b9189e5.jpg",
    name: "OCEAN GUARDIAN",
    rank: 8,
  },
  {
    imageSrc: "/WhatsApp Image 2025-11-11 at 16.51.28_645fef47.jpg",
    name: "TEAM LIVAY",
    rank: 9,
  },
  {
    imageSrc: "/WhatsApp Image 2025-11-11 at 16.51.28_af9deb38.jpg",
    name: "ARROWTECK",
    rank: 10,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <CodeBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <ImageCarousel
          images={TEAMS.map((team) => ({
            src: team.imageSrc,
            alt: team.name,
          }))}
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
