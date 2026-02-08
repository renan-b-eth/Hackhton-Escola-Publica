"use client";

import { motion } from "framer-motion";
import { Brain, Building2, ExternalLink } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Tecnologia Pedagógica",
    description:
      "Powered by Rendey Class — IA aplicada à educação pública. Uma plataforma que usa inteligência artificial para personalizar o aprendizado e potencializar resultados.",
    link: "https://rendey-class-front.vercel.app/",
    linkLabel: "Conhecer Rendey Class",
    gradient: "from-neon-blue to-cyan-400",
    glow: "neon-blue",
  },
  {
    icon: Building2,
    title: "Estrutura Internacional",
    description:
      "Apoio Institucional: Rendey LLC (New Mexico, USA). Uma empresa registrada nos Estados Unidos que garante credibilidade e alcance internacional ao projeto.",
    link: "https://rendey.store",
    linkLabel: "Visitar Rendey LLC",
    gradient: "from-neon-purple to-pink-400",
    glow: "neon-purple",
  },
];

export function EcosystemSection() {
  return (
    <section id="ecossistema" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neon-blue text-sm font-semibold tracking-widest uppercase">
            O Ecossistema
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Base Sólida,{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Impacto Real
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Um projeto sustentado por tecnologia de ponta e respaldo
            institucional internacional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.a
              key={i}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              <div className="relative h-full p-8 rounded-2xl bg-gray-900/80 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${card.gradient} p-[1px] mb-6`}
                >
                  <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="flex items-center gap-2 text-neon-blue text-sm font-medium group-hover:gap-3 transition-all">
                  {card.linkLabel}
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
