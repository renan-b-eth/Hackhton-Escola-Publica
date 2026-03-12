import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { BannerEventoSection } from "@/components/sections/banner-evento";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ChallengeSection } from "@/components/sections/challenge";
import { TeamSection } from "@/components/sections/team";
import { AuthoritySection } from "@/components/sections/authority";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { MetodologiaSection } from "@/components/sections/metodologia";
import { RegulamentoSection } from "@/components/sections/regulamento";
import { EscolaPionheiraSection } from "@/components/sections/escola-pioneira";
import { SponsorsSection } from "@/components/sections/sponsors";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <BannerEventoSection />
      <HowItWorksSection />
      <ChallengeSection />
      <TeamSection />
      <AuthoritySection />
      <EcosystemSection />
      <MetodologiaSection />
      <RegulamentoSection />
      <EscolaPionheiraSection />
      <SponsorsSection />
      <FooterSection />
    </main>
  );
}
