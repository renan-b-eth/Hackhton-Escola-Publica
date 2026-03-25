"use client";

import { motion } from "framer-motion";

type Evento = { horario: string; titulo: string; destaque?: boolean };
type Dia = { dia: string; data: string; tema: string; eventos: Evento[] };

const dias: Dia[] = [
  {
    dia: "Dia 27",
    data: "Desenvolvimento",
    tema: "Horário Escolar + Casa",
    eventos: [
      { horario: "A conf.", titulo: "Credenciamento & Welcome Coffee" },
      { horario: "A conf.", titulo: "Cerimônia de Abertura", destaque: true },
      { horario: "A conf.", titulo: "Briefing dos Desafios & Formação de Equipes" },
      { horario: "A conf.", titulo: "Início do Desenvolvimento (Na escola e em casa)", destaque: true },
    ],
  },
  {
    dia: "Dia 28",
    data: "Desenvolvimento",
    tema: "Trabalho Remoto",
    eventos: [
      { horario: "A conf.", titulo: "Continuação do Desenvolvimento (Em casa)" },
      { horario: "A conf.", titulo: "Desenvolvimento & Mentoria remota" },
      { horario: "A conf.", titulo: "Checkpoint de Progresso" },
    ],
  },
  {
    dia: "Dia 29",
    data: "Refatoração",
    tema: "Apoio & Feedback",
    eventos: [
      { horario: "A conf.", titulo: "Refatoração com apoio e feedback dos mentores", destaque: true },
      { horario: "A conf.", titulo: "Preparação dos Pitches" },
      { horario: "A conf.", titulo: "Demo Day — Apresentações", destaque: true },
      { horario: "A conf.", titulo: "Cerimônia de Premiação & Encerramento", destaque: true },
    ],
  },
];

export function CronogramaSection() {
  return (
    <section id="cronograma" className="section-dark relative py-20 sm:py-28">
      {/* Watermark */}
      <div
        aria-hidden
        className="absolute left-0 top-0 select-none pointer-events-none font-display font-black leading-none"
        style={{ fontSize: "clamp(120px, 22vw, 320px)", opacity: 0.03, color: "#ECE8E1", lineHeight: 1 }}
      >
        36h
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-end justify-between mb-2">
          <motion.p
            className="kicker text-stone"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            Agenda
          </motion.p>
          <span className="hidden sm:block font-mono text-[10px] text-stone">
            15 · 16 · 17 Maio 2026
          </span>
        </div>

        <div className="divider-h-dark mb-10" />

        <motion.h2
          className="font-display font-bold text-editorial leading-tight mb-14"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Cronograma dos<br />
          <span className="text-stone italic">3 dias.</span>
        </motion.h2>

        {/* Dias — tabela editorial */}
        <div className="space-y-12">
          {dias.map((dia, di) => (
            <motion.div
              key={di}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: di * 0.1 }}
            >
              {/* Header do dia */}
              <div className="flex items-baseline gap-4 mb-4">
                <span
                  className="font-display font-black text-editorial"
                  style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
                >
                  {dia.data}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone">
                  {dia.dia} · {dia.tema}
                </span>
              </div>

              {/* Tabela de eventos */}
              <div className="border border-editorial/10">
                {dia.eventos.map((ev, ei) => (
                  <div
                    key={ei}
                    className={`flex items-start gap-6 px-4 sm:px-6 py-3.5 border-b border-editorial/8 last:border-b-0 ${
                      ev.destaque ? "bg-editorial/[0.04]" : ""
                    }`}
                  >
                    {/* Horário */}
                    <span className="font-mono text-[11px] text-stone min-w-[44px] pt-0.5">
                      {ev.horario}
                    </span>
                    {/* Título */}
                    <span
                      className={`font-sans text-sm leading-snug ${
                        ev.destaque ? "text-editorial font-semibold" : "text-stone"
                      }`}
                    >
                      {ev.destaque && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-rouge mr-2 mb-0.5 align-middle" />
                      )}
                      {ev.titulo}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="font-sans text-[11px] text-stone mt-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}
        >
          * Cronograma sujeito a ajustes. Participantes serão notificados com antecedência.
        </motion.p>
      </div>
    </section>
  );
}
