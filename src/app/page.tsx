import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { TrilhasSection } from "@/components/sections/trilhas";
import { CronogramaSection } from "@/components/sections/cronograma";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ChallengeSection } from "@/components/sections/challenge";
import { MetodologiaSection } from "@/components/sections/metodologia";
import { MentoresSection } from "@/components/sections/mentores";
import { PremiacaoSection } from "@/components/sections/premiacao";
import { TeamSection } from "@/components/sections/team";
import { ProjectsResultsSection } from "@/components/sections/projects-results";
import { AuthoritySection } from "@/components/sections/authority";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { EscolaPionheiraSection } from "@/components/sections/escola-pioneira";
import { SponsorsSection } from "@/components/sections/sponsors";
import { RegulamentoSection } from "@/components/sections/regulamento";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <TrilhasSection />
      <CronogramaSection />
      <HowItWorksSection />
      <ChallengeSection />
      <MetodologiaSection />
      <MentoresSection />
      <PremiacaoSection />
      <TeamSection />
      <ProjectsResultsSection />
      <AuthoritySection />
      <EcosystemSection />
      <EscolaPionheiraSection />
      <SponsorsSection />
      <RegulamentoSection />
      <FooterSection />
    </main>
  );
}
