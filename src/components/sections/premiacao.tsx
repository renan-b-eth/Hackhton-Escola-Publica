"use client";

import { motion } from "framer-motion";

const podio = [
  {
    lugar: "1°",
    titulo: "Primeiro Lugar",
    alunos: ["Premiação a confirmar", "Certificado de Excelência", "Mentoria exclusiva com organizadores"],
    escola: ["Reconhecimento institucional", "Destaque em inovação tecnológica"],
  },
  {
    lugar: "2°",
    titulo: "Segundo Lugar",
    alunos: ["Premiação a confirmar", "Certificado de Participação Destaque", "Mentoria com organizadores"],
    escola: ["Certificação de Escola Inovadora"],
  },
  {
    lugar: "3°",
    titulo: "Terceiro Lugar",
    alunos: ["Premiação a confirmar", "Certificado de Participação"],
    escola: ["Menção Honrosa"],
  },
];

const especiais = [
  { titulo: "Melhor Pitch", descricao: "Apresentação mais clara e persuasiva" },
  { titulo: "Inovação Social", descricao: "Maior impacto na comunidade escolar" },
  { titulo: "Melhor Uso de IA", descricao: "IA aplicada de forma mais criativa" },
  { titulo: "Escola Destaque", descricao: "Maior engajamento de participantes" },
];

export function PremiacaoSection() {
  return (
    <section id="premiacao" className="section-dark relative py-20 sm:py-28">
      {/* Watermark */}
      <div
        aria-hidden
        className="absolute right-0 bottom-0 select-none pointer-events-none font-display font-black leading-none"
        style={{ fontSize: "clamp(120px, 22vw, 320px)", opacity: 0.03, color: "#ECE8E1", lineHeight: 1 }}
      >
        1°
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-end justify-between mb-2">
          <motion.p
            className="kicker text-stone"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            Premiação
          </motion.p>
        </div>

        <div className="divider-h-dark mb-10" />

        <motion.h2
          className="font-display font-bold text-editorial leading-tight mb-14"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Reconhecimento<br />
          <span className="text-stone italic">para quem entrega.</span>
        </motion.h2>

        {/* Pódio — blocos editoriais */}
        <div className="grid md:grid-cols-3 gap-px bg-editorial/10 mb-12">
          {podio.map((p, i) => (
            <motion.div
              key={i}
              className="bg-void p-6 lg:p-8 flex flex-col"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Número grande */}
              <span
                className={`font-display font-black leading-none mb-3 ${i === 0 ? "text-rouge" : "text-editorial/30"}`}
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                {p.lugar}
              </span>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone mb-5">
                {p.titulo}
              </p>

              {/* Alunos */}
              <div className="mb-5">
                <p className="kicker text-stone mb-2">Para os alunos</p>
                <ul className="space-y-1.5">
                  {p.alunos.map((a, j) => (
                    <li key={j} className="font-sans text-xs text-editorial/70 flex gap-2">
                      <span className="text-rouge">—</span>{a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Escola */}
              <div className="mt-auto">
                <p className="kicker text-stone mb-2">Para a escola</p>
                <ul className="space-y-1.5">
                  {p.escola.map((e, j) => (
                    <li key={j} className="font-sans text-xs text-editorial/70 flex gap-2">
                      <span className="text-rouge">—</span>{e}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prêmios especiais — linha editorial */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="kicker text-stone mb-4">Prêmios Especiais</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-editorial/10">
            {especiais.map((e, i) => (
              <div key={i} className="bg-void p-5">
                <p className="font-display font-semibold text-editorial text-sm mb-1">{e.titulo}</p>
                <p className="font-sans text-xs text-stone leading-relaxed">{e.descricao}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Participação universal */}
        <motion.div
          className="mt-10 border border-editorial/10 p-6 sm:p-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="kicker text-stone mb-3">Todos os participantes recebem</p>
          <p className="font-sans text-sm text-editorial/70 leading-relaxed">
            Certificado de participação · Kit de boas-vindas · Acesso a gravações · Networking com mentores · Acesso à comunidade alumni
          </p>
        </motion.div>
      </div>
    </section>
  );
}
