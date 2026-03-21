"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Gift, GraduationCap, Laptop, BookOpen, Sparkles, ChevronRight } from "lucide-react";

const premios = [
  {
    lugar: "1º Lugar",
    titulo: "Grand Champion",
    icone: Trophy,
    cor: "from-yellow-400 to-amber-500",
    premiosAlunos: [
      "Premiação em breve",
      "Certificado de Excelência Técnica",
      "Mentoria exclusiva com os organizadores",
    ],
    premiosEscola: [
      "Reconhecimento Institucional",
      "Destaque em Inovação Tecnológica",
    ],
    badge: "🏆 Grand Champion",
  },
  {
    lugar: "2º Lugar",
    titulo: "Vice-Campeão",
    icone: Medal,
    cor: "from-gray-300 to-gray-400",
    premiosAlunos: [
      "Premiação em breve",
      "Certificado de Participação Destaque",
      "Mentoria com os organizadores",
    ],
    premiosEscola: [
      "Certificação de Escola Inovadora",
    ],
    badge: "🥈 Vice-Campeão",
  },
  {
    lugar: "3º Lugar",
    titulo: "Terceiro Lugar",
    icone: Award,
    cor: "from-amber-600 to-amber-700",
    premiosAlunos: [
      "Premiação em breve",
      "Certificado de Participação",
    ],
    premiosEscola: [
      "Menção Honrosa",
    ],
    badge: "🥉 Terceiro Lugar",
  },
];

const premiosEspeciais = [
  {
    titulo: "Melhor Pitch",
    descricao: "Para a equipe com a apresentação mais clara, envolvente e persuasiva.",
    icone: Star,
    premio: "Em breve",
    cor: "from-neon-blue to-cyan-400",
  },
  {
    titulo: "Inovação Social",
    descricao: "Para o projeto com maior potencial de impacto positivo na comunidade escolar.",
    icone: Sparkles,
    premio: "Em breve",
    cor: "from-neon-purple to-pink-400",
  },
  {
    titulo: "Melhor Uso de IA",
    descricao: "Para a solução que utiliza inteligência artificial de forma mais criativa e eficaz.",
    icone: Laptop,
    premio: "Em breve",
    cor: "from-emerald-400 to-teal-400",
  },
  {
    titulo: "Escola Destaque",
    descricao: "Para a instituição com maior engajamento e participação de alunos no evento.",
    icone: GraduationCap,
    premio: "Em breve",
    cor: "from-amber-400 to-orange-400",
  },
];

export function PremiacaoSection() {
  return (
    <section id="premiacao" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/[0.02] to-transparent" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
            Recompensas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Premiação{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              EstaHack 2026
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Reconhecimento para estudantes e escolas que se destacarem na maratona de inovação.
          </p>
        </motion.div>

        {/* Podium - Top 3 */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {premios.map((premio, i) => (
            <motion.div
              key={i}
              className={`group relative flex flex-col ${i === 0 ? "lg:-mt-4 lg:mb-0" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${premio.cor} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className={`relative flex flex-col h-full p-6 sm:p-8 rounded-3xl bg-gray-900/60 border transition-all duration-300 ${
                i === 0 ? "border-yellow-500/30 group-hover:border-yellow-500/50" : "border-white/5 group-hover:border-white/15"
              }`}>
                {/* Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${premio.cor} text-xs font-bold text-gray-900`}>
                    {premio.badge}
                  </span>
                  {i === 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[10px] font-semibold uppercase">
                      Maior Prêmio
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${premio.cor} p-[1px] mb-5`}>
                  <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                    <premio.icone className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-1">{premio.lugar}</h3>
                <p className="text-gray-500 text-sm mb-6">{premio.titulo}</p>

                {/* Prêmios Alunos */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      Para os Alunos
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {premio.premiosAlunos.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <ChevronRight className="w-3.5 h-3.5 text-gray-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prêmios Escola */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      Para a Escola
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {premio.premiosEscola.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <ChevronRight className="w-3.5 h-3.5 text-gray-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prêmios Especiais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Gift className="w-6 h-6 text-neon-blue" />
            <h3 className="text-2xl font-bold text-white">Prêmios Especiais</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {premiosEspeciais.map((premio, i) => (
              <motion.div
                key={i}
                className="group relative p-5 rounded-2xl bg-gray-900/60 border border-white/5 hover:border-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${premio.cor} p-[1px] mb-4`}>
                  <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                    <premio.icone className="w-5 h-5 text-white" />
                  </div>
                </div>

                <h4 className="text-white font-bold mb-1">{premio.titulo}</h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{premio.descricao}</p>
                <p className="text-sm text-gray-400 font-semibold">{premio.premio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Participação */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-3xl blur-xl" />
          <div className="relative p-8 rounded-3xl bg-gray-900/80 border border-white/10 text-center">
            <Award className="w-10 h-10 text-neon-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Todos os Participantes Recebem
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              Além dos prêmios principais, todos os participantes do EstaHack 2026 recebem:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Certificado de Participação",
                "Acesso à Comunidade Alumni",
                "Kit de Boas-Vindas",
                "Acesso a Gravações",
                "Networking com Mentores",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
