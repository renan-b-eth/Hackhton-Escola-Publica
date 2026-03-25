import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { SobreSection } from "@/components/sections/sobre";
import { TrilhasSection } from "@/components/sections/trilhas";
import { CronogramaSection } from "@/components/sections/cronograma";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { OrganizacaoSection } from "@/components/sections/organizacao";
import { MentoresSection } from "@/components/sections/mentores";
import { PremiacaoSection } from "@/components/sections/premiacao";
import { SponsorsSection } from "@/components/sections/sponsors";
import { FormsSection } from "@/components/sections/forms";
import { FaqSection } from "@/components/sections/faq";
import { FooterSection } from "@/components/sections/footer";
import { EscolaPionheiraSection } from "@/components/sections/escola-pioneira";
import { TractionSection } from "@/components/sections/traction";

export default function Home() {
  return (
    <main>
      {/* Navbar — fixa */}
      <Navbar />

      {/* 1. Hero — manifesto assimétrico */}
      <HeroSection />

      {/* 2. Sobre — dark, números grandes, manifesto */}
      <SobreSection />

      {/* 3. Desafios — claro, lista editorial vertical */}
      <TrilhasSection />

      {/* 3.1. Institucional - Escola Pioneira */}
      <EscolaPionheiraSection />

      {/* 3.2. Tração - Prova de Execução */}
      <TractionSection />

      {/* 4. Cronograma — dark, tabela editorial */}
      <CronogramaSection />

      {/* 5. Como Funciona — claro, passos com respiro */}
      <HowItWorksSection />

      {/* 6. Organização — dark, dossiê com texto vertical */}
      <OrganizacaoSection />

      {/* 7. Mentores — claro, fichas técnicas */}
      <MentoresSection />

      {/* 8. Premiação — dark, blocos sólidos */}
      <PremiacaoSection />

      {/* 9. Apoio — claro, Jornada B separada */}
      <SponsorsSection />

      {/* 10. Inscrição — dark, Jornada A */}
      <FormsSection />

      {/* 11. FAQ — claro, accordion */}
      <FaqSection />

      {/* 12. Footer — dark, mínimo */}
      <FooterSection />
    </main>
  );
}
