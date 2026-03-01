import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { VideoBannerSection } from "@/components/sections/video-banner";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ChallengeSection } from "@/components/sections/challenge";
import { TeamSection } from "@/components/sections/team";
import { AuthoritySection } from "@/components/sections/authority";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { SponsorsSection } from "@/components/sections/sponsors";
import { FormsSection } from "@/components/sections/forms";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <VideoBannerSection />
      <HowItWorksSection />
      <ChallengeSection />
      <TeamSection />
      <AuthoritySection />
      <EcosystemSection />
      <SponsorsSection />
      <FormsSection />
      <FooterSection />
    </main>
  );
}
