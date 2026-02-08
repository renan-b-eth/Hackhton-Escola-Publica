import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { OrganizerSection } from "@/components/sections/organizer";
import { EcosystemSection } from "@/components/sections/ecosystem";
import { SponsorsSection } from "@/components/sections/sponsors";
import { FormsSection } from "@/components/sections/forms";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <OrganizerSection />
      <EcosystemSection />
      <SponsorsSection />
      <FormsSection />
      <FooterSection />
    </main>
  );
}
