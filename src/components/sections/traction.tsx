"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Server } from "lucide-react";

const milestones = [
  {
    icon: Server,
    title: "Estrutura de Stands Confirmada",
    desc: "Espaço físico garantido e planejado para imersão total das equipes.",
  },
  {
    icon: CheckCircle2,
    title: "Parcerias em Desenvolvimento",
    desc: "Buscando parceiros estratégicos de tecnologia para viabilizar o evento.",
  },
  {
    icon: Zap,
    title: "Créditos de API (MiniMax 2.7)",
    desc: "US$ 50 em créditos por equipe para integrar IA generativa aos projetos.",
  },
];

export function TractionSection() {
  return (
    <section id="tracao" className="relative py-24 overflow-hidden section-light">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="kicker mb-4 inline-block">Tração Real</span>
          <h2
            className="font-display font-bold text-ink leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            A Primeira Edição <span className="italic text-stone">já é realidade.</span>
          </h2>
          <p className="font-sans text-stone text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mt-6">
            Não é só uma promessa. Já conquistamos a infraestrutura, apoio e ferramentas necessárias para 
            fazer este evento acontecer com nível profissional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              className="bg-hairline p-8 flex flex-col items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-white flex items-center justify-center border border-stone/10 text-ink">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-ink text-lg mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-stone leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
