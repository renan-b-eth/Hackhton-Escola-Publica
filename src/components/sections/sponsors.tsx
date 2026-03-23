"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SPONSOR_FORM = "https://forms.gle/d6qBswpQHPAw918n6";

const beneficios = [
  "Associação a uma causa de impacto social real (ESG)",
  "Visibilidade para alunos, educadores e famílias",
  "Acesso a jovens talentos antes do mercado",
  "Certificação de parceiro pela Rendey LLC (USA)",
  "Relatórios de impacto com métricas reais",
  "Networking com líderes educacionais e tecnológicos",
];

export function SponsorsSection() {
  return (
    <section id="patrocinadores" className="section-light relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* Cabeçalho — Jornada B: apoio */}
        <div className="flex items-end justify-between mb-2">
          <motion.p
            className="kicker"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            Apoio & Patrocínio
          </motion.p>
        </div>

        <div className="divider-h mb-10" />

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">
          {/* Logo dos atuais patrocinadores */}
          <div>
            <motion.h2
              className="font-display font-bold text-ink leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              Esta iniciativa existe<br />
              <span className="italic text-stone">graças a quem acredita.</span>
            </motion.h2>

            <motion.p
              className="font-sans text-stone text-sm leading-relaxed max-w-lg mb-10"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              Patrocinadores que investem na educação pública estadual de São Paulo —
              e no desenvolvimento de jovens talentos.
            </motion.p>

            {/* Logos patrocinadores */}
            <motion.div
              className="flex flex-wrap gap-6 items-center mb-12"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="https://www.fiap.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1.5"
              >
                <div className="relative h-14 w-32 border border-hairline bg-white p-2">
                  <Image src="/fiap.png" alt="FIAP" fill className="object-contain p-1.5" sizes="128px" />
                </div>
                <span className="font-sans text-[9px] uppercase tracking-widest text-stone group-hover:text-ink transition-colors">
                  Patrocinador Principal
                </span>
              </Link>

              <Link
                href="https://estant3d.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1.5"
              >
                <div className="relative h-14 w-32 border border-hairline bg-white p-2">
                  <Image src="/estant3d.PNG" alt="Estant3D" fill className="object-contain p-1.5" sizes="128px" />
                </div>
                <span className="font-sans text-[9px] uppercase tracking-widest text-stone group-hover:text-ink transition-colors">
                  Parceiro Estratégico
                </span>
              </Link>
            </motion.div>

            {/* Benefícios — texto direto */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="kicker mb-4">Por que apoiar?</p>
              <ul className="space-y-2">
                {beneficios.map((b, i) => (
                  <li key={i} className="font-sans text-xs text-stone flex gap-2.5">
                    <span className="text-rouge mt-0.5 flex-shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Jornada B — aparecer como bloco separado */}
          <motion.div
            className="border border-hairline p-8 flex flex-col gap-5 self-start"
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <p className="kicker mb-3">Chamada aberta</p>
              <h3
                className="font-display font-bold text-ink leading-tight"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
              >
                Quero apoiar<br />o EstaHack
              </h3>
            </div>

            <div className="divider-h" />

            <div className="space-y-2.5">
              {["Patrocínio financeiro (cotas)", "Brindes e kits para os times", "Alimentação durante o evento", "Licenças de software"].map((item, i) => (
                <p key={i} className="font-sans text-xs text-stone">
                  <span className="text-rouge">—</span> {item}
                </p>
              ))}
            </div>

            <a
              href={SPONSOR_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink text-ink font-sans text-xs font-semibold uppercase tracking-[0.18em] px-6 py-4 text-center hover:bg-ink hover:text-editorial transition-colors"
            >
              Falar com a organização →
            </a>

            <p className="font-sans text-[10px] text-stone text-center">
              Abre o formulário de contato
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
