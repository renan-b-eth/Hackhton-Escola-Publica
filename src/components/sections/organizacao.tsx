"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const parceiros: { nome: string; role: string; logo: string; url: string }[] = [];

const realizacao = [
  { nome: "Lucas Feliciano", cargo: "Mentor Técnico · Idealizador" },
  { nome: "Yuki Tanaka", cargo: "Produto & Gestão · Scrum.org PSPO I" },
];

export function OrganizacaoSection() {
  return (
    <section id="organizadores" className="section-dark relative py-20 sm:py-28 overflow-hidden">
      {/* Watermark */}
      <div
        aria-hidden
        className="absolute left-0 top-0 select-none pointer-events-none font-display font-black leading-none"
        style={{ fontSize: "clamp(160px, 28vw, 420px)", opacity: 0.028, color: "#ECE8E1", lineHeight: 1 }}
      >
        EE
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Layout dossiê: texto vertical + linha + conteúdo */}
        <div className="flex items-start gap-6 sm:gap-10">

          {/* Texto vertical — "REALIZAÇÃO" */}
          <div className="hidden sm:flex flex-col items-center gap-4 pt-2 flex-shrink-0">
            <div className="w-px bg-editorial/15 h-12" />
            <span
              className="text-vertical font-sans text-[9px] uppercase tracking-[0.5em] text-stone select-none"
              style={{ writingMode: "vertical-rl" }}
            >
              Realização
            </span>
            <div className="w-px bg-editorial/15 flex-1 min-h-[120px]" />
          </div>

          {/* Linha vertical separadora */}
          <div className="hidden sm:block w-px bg-editorial/12 self-stretch flex-shrink-0" />

          {/* Conteúdo principal */}
          <div className="flex-1">
            <motion.p
              className="kicker text-stone mb-5"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4 }}
            >
              Organização
            </motion.p>

            {/* Escola */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2
                className="font-display font-bold text-editorial leading-tight mb-2"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
              >
                Escola Anfitriã
              </h2>
              <p className="font-sans text-sm text-stone">
                A ser anunciada em breve · São Paulo · SP
              </p>
            </motion.div>

            <div className="divider-h-dark mb-10" />

            {/* Parceiros */}
            {parceiros.length > 0 && (
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="kicker text-stone mb-6">Parceiros Institucionais</p>
              <div className="flex flex-wrap gap-6">
                {parceiros.map((p, i) => (
                  <a
                    key={i}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-2"
                  >
                    <div className="relative h-12 w-28 sm:w-36 bg-white p-2 flex items-center justify-center">
                      <Image
                        src={p.logo}
                        alt={p.nome}
                        fill
                        className="object-contain p-2"
                        sizes="144px"
                      />
                    </div>
                    <p className="font-sans text-[10px] text-stone uppercase tracking-widest group-hover:text-editorial transition-colors">
                      {p.role}
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>
            )}

            <div className="divider-h-dark mb-10" />

            {/* Realização técnica */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="kicker text-stone mb-5">Realização Técnica</p>
              <div className="space-y-0">
                {realizacao.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-baseline gap-4 py-3 border-b border-editorial/8 last:border-b-0"
                  >
                    <span className="font-display font-semibold text-editorial text-sm min-w-[140px]">
                      {r.nome}
                    </span>
                    <span className="font-sans text-[11px] text-stone">{r.cargo}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
