"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Lightbulb, Code, Presentation, Trophy } from "lucide-react";

const metodos = [
  {
    icon: Lightbulb,
    title: "Ideação Colaborativa",
    description:
      "Os alunos trabalham em equipes multidisciplinares para identificar problemas reais na comunidade e propor soluções tecnológicas inovadoras.",
    color: "from-neon-blue to-cyan-400",
  },
  {
    icon: Code,
    title: "Desenvolvimento Prático",
    description:
      "Uso de metodologias ágeis (Scrum), linguagens de programação modernas e ferramentas de design para prototipagem rápida de MVPs.",
    color: "from-neon-purple to-pink-400",
  },
  {
    icon: Users,
    title: "Mentoria do Mercado",
    description:
      "Profissionais experientes e especialistas guiam os estudantes em tempo real, fornecendo feedback prático e conhecimento profissional.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Presentation,
    title: "Apresentação e Pitch",
    description:
      "Os times apresentam suas soluções para uma banca de especialistas, exercitando habilidades de comunicação e argumentação.",
    color: "from-amber-400 to-orange-500",
  },
];

const pilares = [
  {
    label: "Aprendizado Prático",
    desc: "Experiência real de desenvolvimento de software",
  },
  {
    label: "Competência Técnica",
    desc: "Desenvolvimento de hard skills em tecnologia",
  },
  {
    label: "Soft Skills",
    desc: "Colaboração, liderança e comunicação efetiva",
  },
];

export function MetodologiaSection() {
  return (
    <section id="metodologia" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/[0.03] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neon-blue text-sm font-semibold tracking-widest uppercase">
            Abordagem Pedagógica
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Metodologia do{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              EstaHack
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Um formato estruturado baseado em metodologias internacionais de
            educação em tecnologia, adaptado para a realidade brasileira.
          </p>
        </motion.div>

        {/* Métodos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metodos.map((metodo, i) => (
            <motion.div
              key={i}
              className="group relative p-6 rounded-2xl bg-gray-900/60 border border-white/5 hover:border-white/15 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metodo.color} p-[1px] mb-4`}
                >
                  <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                    <metodo.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {metodo.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {metodo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pilares */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-xl" />
          <div className="relative p-8 rounded-2xl bg-gray-900/90 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-neon-blue" />
              <h3 className="text-2xl font-bold text-white">
                Pilares Educacionais
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pilares.map((pilar, i) => (
                <motion.div
                  key={i}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                >
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold mb-1">
                        {pilar.label}
                      </p>
                      <p className="text-gray-400 text-sm">{pilar.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
