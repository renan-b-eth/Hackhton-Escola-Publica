import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AuthoritySection } from "@/components/sections/authority";
import { SquadSection } from "@/components/sections/squad";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { SponsorsSection } from "@/components/sections/sponsors";
import { FormsSection } from "@/components/sections/forms";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AuthoritySection />
      <SquadSection />
      <EcosystemSection />
      <SponsorsSection />
      <FormsSection />
      <FooterSection />
    </main>
  );
}
