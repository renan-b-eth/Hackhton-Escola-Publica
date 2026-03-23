"use client";

import { motion } from "framer-motion";

type Evento = { horario: string; titulo: string; destaque?: boolean };
type Dia = { dia: string; data: string; tema: string; eventos: Evento[] };

const dias: Dia[] = [
  {
    dia: "Sexta-feira",
    data: "15 de Maio",
    tema: "Abertura & Formação",
    eventos: [
      { horario: "08:00", titulo: "Credenciamento & Welcome Coffee" },
      { horario: "09:00", titulo: "Cerimônia de Abertura", destaque: true },
      { horario: "10:00", titulo: "Keynote — Tecnologia e Educação Pública", destaque: true },
      { horario: "11:30", titulo: "Formação de Equipes & Escolha de Desafios" },
      { horario: "12:30", titulo: "Almoço" },
      { horario: "14:00", titulo: "Workshop — Design Thinking & Prototipagem" },
      { horario: "15:30", titulo: "Briefing dos Desafios — Início da Maratona", destaque: true },
    ],
  },
  {
    dia: "Sábado",
    data: "16 de Maio",
    tema: "Desenvolvimento & Mentoria",
    eventos: [
      { horario: "08:00", titulo: "Café da Manhã & Daily Stand-up" },
      { horario: "09:00", titulo: "Bloco de Desenvolvimento I" },
      { horario: "10:00", titulo: "Mentoria Rotativa — IA & Dados", destaque: true },
      { horario: "12:00", titulo: "Almoço & Lightning Talks" },
      { horario: "13:30", titulo: "Bloco de Desenvolvimento II" },
      { horario: "15:00", titulo: "Mentoria — Acessibilidade & Gestão", destaque: true },
      { horario: "17:00", titulo: "Checkpoint de Progresso" },
      { horario: "19:30", titulo: "Bloco Noturno de Desenvolvimento" },
    ],
  },
  {
    dia: "Domingo",
    data: "17 de Maio",
    tema: "Pitch Final & Premiação",
    eventos: [
      { horario: "08:00", titulo: "Café da Manhã & Últimos Ajustes" },
      { horario: "09:00", titulo: "Encerramento dos 36h de Código", destaque: true },
      { horario: "10:00", titulo: "Preparação dos Pitches" },
      { horario: "10:30", titulo: "Demo Day — Apresentações para o Júri", destaque: true },
      { horario: "13:00", titulo: "Almoço & Deliberação do Júri" },
      { horario: "14:00", titulo: "Cerimônia de Premiação & Encerramento", destaque: true },
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
