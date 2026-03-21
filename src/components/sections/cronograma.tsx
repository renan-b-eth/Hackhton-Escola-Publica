"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Mic, Code, Trophy, Coffee, Presentation, Handshake, GraduationCap, Star } from "lucide-react";

const dias = [
  {
    dia: "Sexta-feira",
    data: "15 de Maio",
    tema: "Abertura & Formação",
    cor: "from-neon-blue to-cyan-400",
    icone: GraduationCap,
    eventos: [
      {
        horario: "08:00 – 09:00",
        titulo: "Credenciamento & Welcome Coffee",
        descricao: "Recepção dos participantes, entrega de kits e networking inicial.",
        icone: Coffee,
        destaque: false,
      },
      {
        horario: "09:00 – 10:00",
        titulo: "Cerimônia de Abertura",
        descricao: "Palavras da direção da E.E. Nancy, organizadores e parceiros institucionais.",
        icone: Mic,
        destaque: true,
      },
      {
        horario: "10:00 – 11:30",
        titulo: "Keynote: O Futuro da Educação Pública com Tecnologia",
        descricao: "Palestra inspiradora sobre inovação na educação com convidados especiais do mercado.",
        icone: Star,
        destaque: true,
      },
      {
        horario: "11:30 – 12:30",
        titulo: "Formação de Equipes & Escolha de Trilhas",
        descricao: "Dinâmica de formação de times multidisciplinares e definição das trilhas de atuação.",
        icone: Users,
        destaque: false,
      },
      {
        horario: "12:30 – 14:00",
        titulo: "Almoço & Networking",
        descricao: "Intervalo para refeição e conexões entre participantes e mentores.",
        icone: Handshake,
        destaque: false,
      },
      {
        horario: "14:00 – 15:30",
        titulo: "Workshop: Design Thinking & Prototipagem",
        descricao: "Hands-on sobre metodologias ágeis, ideação e criação de MVPs.",
        icone: Presentation,
        destaque: false,
      },
      {
        horario: "15:30 – 18:00",
        titulo: "Briefing dos Desafios & Início da Maratona",
        descricao: "Apresentação oficial dos desafios por trilha. Começa o cronômetro de 36h!",
        icone: Code,
        destaque: true,
      },
    ],
  },
  {
    dia: "Sábado",
    data: "16 de Maio",
    tema: "Desenvolvimento & Mentoria",
    cor: "from-neon-purple to-pink-400",
    icone: Code,
    eventos: [
      {
        horario: "08:00 – 09:00",
        titulo: "Café da Manhã & Daily Stand-up",
        descricao: "Refeição e alinhamento rápido das equipes sobre o progresso dos projetos.",
        icone: Coffee,
        destaque: false,
      },
      {
        horario: "09:00 – 12:00",
        titulo: "Bloco de Desenvolvimento I",
        descricao: "Foco total em código, design e construção dos MVPs. Mentores circulam pelas equipes.",
        icone: Code,
        destaque: false,
      },
      {
        horario: "10:00 – 11:00",
        titulo: "Mentoria Rotativa — Trilhas IA & Dados",
        descricao: "Sessão de mentoria especializada com profissionais de IA e ciência de dados.",
        icone: Star,
        destaque: true,
      },
      {
        horario: "12:00 – 13:30",
        titulo: "Almoço & Lightning Talks",
        descricao: "Pausa para refeição com apresentações rápidas de 5 minutos sobre tecnologia.",
        icone: Mic,
        destaque: false,
      },
      {
        horario: "13:30 – 17:00",
        titulo: "Bloco de Desenvolvimento II",
        descricao: "Continuação da maratona. Foco em integração, testes e refinamento das soluções.",
        icone: Code,
        destaque: false,
      },
      {
        horario: "15:00 – 16:00",
        titulo: "Mentoria Rotativa — Trilhas Acessibilidade & Gestão",
        descricao: "Sessão de mentoria com especialistas em acessibilidade e gestão educacional.",
        icone: Star,
        destaque: true,
      },
      {
        horario: "17:00 – 18:00",
        titulo: "Checkpoint de Progresso",
        descricao: "Apresentação rápida do status de cada equipe para os organizadores e mentores.",
        icone: Presentation,
        destaque: false,
      },
      {
        horario: "18:00 – 19:30",
        titulo: "Jantar & Momento de Lazer",
        descricao: "Refeição e atividades de descompressão para recarregar as energias.",
        icone: Handshake,
        destaque: false,
      },
      {
        horario: "19:30 – 23:00",
        titulo: "Bloco Noturno de Desenvolvimento",
        descricao: "Maratona continua! Equipes que desejarem podem seguir codando durante a noite.",
        icone: Code,
        destaque: false,
      },
    ],
  },
  {
    dia: "Domingo",
    data: "17 de Maio",
    tema: "Pitch Final & Premiação",
    cor: "from-emerald-400 to-teal-400",
    icone: Trophy,
    eventos: [
      {
        horario: "08:00 – 09:00",
        titulo: "Café da Manhã & Últimos Ajustes",
        descricao: "Refeição e tempo final para ajustes nos projetos e preparação dos pitches.",
        icone: Coffee,
        destaque: false,
      },
      {
        horario: "09:00 – 10:00",
        titulo: "Encerramento da Maratona de Código",
        descricao: "Fim oficial das 36h de desenvolvimento. Submissão dos projetos no portal.",
        icone: Code,
        destaque: true,
      },
      {
        horario: "10:00 – 10:30",
        titulo: "Preparação dos Pitches",
        descricao: "Tempo dedicado para ensaiar as apresentações finais com feedback dos mentores.",
        icone: Presentation,
        destaque: false,
      },
      {
        horario: "10:30 – 13:00",
        titulo: "Demo Day — Apresentações para o Júri",
        descricao: "Cada equipe apresenta seu projeto em 7 minutos + 3 min de Q&A para a banca avaliadora.",
        icone: Mic,
        destaque: true,
      },
      {
        horario: "13:00 – 14:00",
        titulo: "Almoço & Deliberação do Júri",
        descricao: "Intervalo enquanto a banca de especialistas deliberada os vencedores.",
        icone: Handshake,
        destaque: false,
      },
      {
        horario: "14:00 – 15:30",
        titulo: "Cerimônia de Premiação & Encerramento",
        descricao: "Anúncio dos vencedores, entrega de prêmios e certificados. Encerramento oficial do EstaHack 2027.",
        icone: Trophy,
        destaque: true,
      },
    ],
  },
];

export function CronogramaSection() {
  return (
    <section id="cronograma" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.03] to-transparent" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neon-purple text-sm font-semibold tracking-widest uppercase">
            Agenda Completa
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Cronograma dos{" "}
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              3 Dias
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Uma jornada intensa de aprendizado, desenvolvimento e celebração da inovação.
          </p>
        </motion.div>

        {/* Dias */}
        <div className="space-y-12">
          {dias.map((dia, diaIndex) => (
            <motion.div
              key={diaIndex}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: diaIndex * 0.15, duration: 0.6 }}
            >
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${dia.cor} p-[1px]`}>
                  <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                    <dia.icone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white">{dia.dia}</h3>
                    <span className={`px-3 py-0.5 rounded-full bg-gradient-to-r ${dia.cor} text-xs font-semibold text-white`}>
                      {dia.tema}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-sm text-gray-500">{dia.data}</span>
                    <span className="text-gray-700">·</span>
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-sm text-gray-500">E.E. Nancy de Oliveira Fidalgo</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-6 sm:pl-8">
                {/* Vertical line */}
                <div className={`absolute left-2 sm:left-3 top-0 bottom-0 w-px bg-gradient-to-b ${dia.cor} opacity-20`} />

                <div className="space-y-4">
                  {dia.eventos.map((evento, eventoIndex) => (
                    <motion.div
                      key={eventoIndex}
                      className="relative group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: eventoIndex * 0.05, duration: 0.4 }}
                    >
                      {/* Dot on timeline */}
                      <div
                        className={`absolute -left-[18px] sm:-left-[22px] top-4 w-3 h-3 rounded-full border-2 ${
                          evento.destaque
                            ? `bg-gradient-to-r ${dia.cor} border-transparent`
                            : "bg-gray-900 border-gray-700 group-hover:border-gray-500"
                        } transition-colors`}
                      />

                      <div
                        className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 ${
                          evento.destaque
                            ? "bg-white/[0.04] border-white/10 hover:border-white/20"
                            : "bg-white/[0.02] border-white/5 hover:border-white/10"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-gray-600 flex-shrink-0" />
                            <span className="text-sm font-mono text-gray-400 min-w-[110px]">
                              {evento.horario}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <evento.icone className={`w-4 h-4 ${evento.destaque ? "text-white" : "text-gray-500"}`} />
                              <h4 className={`font-semibold ${evento.destaque ? "text-white" : "text-gray-300"}`}>
                                {evento.titulo}
                              </h4>
                              {evento.destaque && (
                                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-gray-500 uppercase tracking-wider">
                                  Destaque
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-0.5">{evento.descricao}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            * O cronograma pode sofrer ajustes. Participantes serão notificados com antecedência.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
