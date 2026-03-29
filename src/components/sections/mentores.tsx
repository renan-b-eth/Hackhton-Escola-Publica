"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Users, Award } from "lucide-react";

const mentores = [
  {
    nome: "Lucas Feliciano",
    cargo: "Mentor Técnico · Idealizador",
    empresa: "FIAP · Engenharia de Software",
    foto: "/foto2.png",
    especialidades: ["Java", "TypeScript", "Python", "Computer Vision"],
    hackathons: "ElevenLabs 🥇 · Microsoft ImagineCup 🏆 · InovaHC 🥉 · NASA Space Apps · Itaú · ICTi",
    linkedin: "https://linkedin.com/in/lucas-feliciano-software",
  },
  {
    nome: "Renan Bezerra",
    cargo: "Execução & Estratégia · Mentor de Negócios",
    empresa: "Rendey LLC · E.E. Nancy",
    foto: "/foto1.jpg",
    especialidades: ["IA", "Full Stack", "EdTech", "Empreendedorismo"],
    hackathons: "Microsoft ImagineCup 🏆 · InovaHC 🥉 · MIT Hacking Medicine · NASA Space Apps · Itaú",
    linkedin: "https://www.linkedin.com/in/renan-b-eth/",
  },
  {
    nome: "Yuki Tanaka",
    cargo: "Produto & Gestão · Mentora de Produto",
    empresa: "Scrum.org PSPO I · Cambridge",
    foto: "/foto3.png",
    especialidades: ["Product Management", "Scrum PSPO I", "AI Products"],
    hackathons: "ElevenLabs 🥇 · ImagineCup 🏆 · XP+Poli-USP Top 8 · NASA · MIT Hacking Medicine · +8",
    linkedin: "https://www.linkedin.com/in/yt-yukitanaka/",
  },
];

const jurados = [
  { nome: "Banca avaliadora", cargo: "Em definição" },
];

const comunidadesMentoria = [
  {
    nome: "Women in Tech",
    descricao: "Comunidade dedicada a empoderar mulheres na tecnologia, oferecendo mentorias em carreira tech e desenvolvimento profissional.",
    especialidade: "Carreira & Tecnologia",
    mentoringAreas: ["Desenvolvimento Web", "Mobile", "Cloud Computing", "Carreira em Tech"],
    icone: Users,
  },
  {
    nome: "Women in Data",
    descricao: "Grupo focado em dados e analytics para mulheres, com workshops práticos e mentorias especializadas.",
    especialidade: "Dados & Analytics",
    mentoringAreas: ["Data Science", "Machine Learning", "SQL & Databases", "Visualização de Dados"],
    icone: Award,
  },
];

export function MentoresSection() {
  return (
    <section id="mentores" className="section-light relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-end justify-between mb-2">
          <motion.p
            className="kicker"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            Mentores & Jurados
          </motion.p>
          <span className="hidden sm:block font-sans text-[10px] text-stone uppercase tracking-widest">
            +25 hackathons acumulados
          </span>
        </div>

        <div className="divider-h mb-10" />

        <motion.h2
          className="font-display font-bold text-ink leading-tight mb-14"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Quem vai estar<br />
          <span className="text-stone italic">ao seu lado.</span>
        </motion.h2>

        {/* Fichas técnicas — grid de 3 */}
        <div className="grid md:grid-cols-3 gap-px bg-hairline mb-14">
          {mentores.map((m, i) => (
            <motion.div
              key={i}
              className="bg-editorial p-6 lg:p-8 flex flex-col gap-5"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Foto + nome */}
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden bg-hairline">
                  <Image
                    src={m.foto}
                    alt={m.nome}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex flex-col gap-0.5 pt-0.5">
                  <h3 className="font-display font-bold text-ink text-base leading-tight">
                    {m.nome}
                  </h3>
                  <p className="font-sans text-[11px] text-stone leading-snug">{m.cargo}</p>
                  <p className="font-sans text-[10px] text-stone/70">{m.empresa}</p>
                </div>
              </div>

              {/* Especialidades */}
              <div>
                <p className="kicker mb-2">Expertise</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.especialidades.map((e, j) => (
                    <span
                      key={j}
                      className="font-mono text-[10px] text-stone border border-hairline px-2 py-0.5"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hackathons */}
              <div className="mt-auto">
                <p className="kicker mb-1.5">Hackathons</p>
                <p className="font-sans text-[11px] text-stone leading-relaxed">{m.hackathons}</p>
              </div>

              {/* LinkedIn */}
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-widest text-stone hover:text-ink transition-colors w-fit"
              >
                <Linkedin className="w-3 h-3" />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>

        {/* Comunidades de Mentoria */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block bg-ink text-editorial font-sans text-[9px] font-semibold uppercase tracking-widest px-3 py-1">
              Comunidades de Apoio
            </span>
            <span className="font-sans text-[10px] text-stone">
              Mentorias especializadas para você
            </span>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-px bg-hairline">
            {comunidadesMentoria.map((comunidade, i) => (
              <motion.div
                key={i}
                className="bg-editorial p-6 lg:p-8"
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-rouge/10 flex items-center justify-center flex-shrink-0">
                    <comunidade.icone className="w-6 h-6 text-rouge" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-ink text-lg mb-1">
                      {comunidade.nome}
                    </h4>
                    <span className="inline-block font-sans text-[9px] uppercase tracking-widest text-rouge bg-rouge/10 px-2 py-0.5">
                      {comunidade.especialidade}
                    </span>
                  </div>
                </div>
                
                <p className="font-sans text-xs text-stone leading-relaxed mb-5">
                  {comunidade.descricao}
                </p>
                
                <div>
                  <p className="kicker mb-2">Áreas de Mentoria</p>
                  <div className="flex flex-wrap gap-2">
                    {comunidade.mentoringAreas.map((area, j) => (
                      <span
                        key={j}
                        className="font-mono text-[10px] text-stone border border-hairline px-2.5 py-1"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Banca avaliadora */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="kicker mb-4">Banca Avaliadora</p>
          <div className="divider-h mb-6" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-hairline">
            {jurados.map((j, i) => (
              <div
                key={i}
                className="p-5 border-b sm:border-b-0 sm:border-r border-hairline last:border-0"
              >
                <p className="font-sans font-semibold text-sm text-ink leading-tight">{j.nome}</p>
                <p className="font-sans text-[11px] text-stone mt-1">{j.cargo}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
