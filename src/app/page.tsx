import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ChallengeSection } from "@/components/sections/challenge";
import { TeamSection } from "@/components/sections/team";
import { AuthoritySection } from "@/components/sections/authority";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { SponsorsSection } from "@/components/sections/sponsors";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ChallengeSection />
      <TeamSection />
      <AuthoritySection />
      <EcosystemSection />
      <SponsorsSection />
      <FooterSection />
    </main>
  );
}
