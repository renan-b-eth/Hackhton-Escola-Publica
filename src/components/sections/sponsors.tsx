"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Eye,
  Code2,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Impacto Social Real (ESG)",
    description:
      "Associe sua marca a uma causa transformadora. Contribua diretamente para a inclusão digital e o desenvolvimento de jovens talentos da rede pública.",
  },
  {
    icon: Eye,
    title: "Brand Awareness na Nova Geração",
    description:
      "Posicione sua empresa como referência em inovação e responsabilidade social perante milhares de estudantes, educadores e famílias.",
  },
  {
    icon: Code2,
    title: "Acesso a Talentos Brutos",
    description:
      "Descubra jovens programadores, designers e empreendedores antes do mercado. Construa um pipeline de talentos direto da fonte.",
  },
  {
    icon: Award,
    title: "Certificação Internacional",
    description:
      "Selo de parceiro certificado pela Rendey LLC (USA). Reconhecimento internacional pelo apoio à educação tecnológica no Brasil.",
  },
  {
    icon: TrendingUp,
    title: "ROI Social Mensurável",
    description:
      "Relatórios detalhados de impacto com métricas reais: alunos impactados, projetos criados e habilidades desenvolvidas.",
  },
  {
    icon: Users,
    title: "Networking Estratégico",
    description:
      "Conecte-se com outros patrocinadores, mentores e líderes educacionais em um ecossistema de inovação social.",
  },
];

export function SponsorsSection() {
  return (
    <section id="apoiar" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neon-purple text-sm font-semibold tracking-widest uppercase">
            Para Empresas & Patrocinadores
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Por que{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Apoiar?
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Investir na educação pública é investir no futuro do Brasil. Veja
            como sua empresa pode fazer parte dessa revolução.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="group relative p-6 rounded-2xl bg-gray-900/60 border border-white/5 hover:border-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-white/10 flex items-center justify-center mb-4 group-hover:border-neon-blue/30 transition-colors">
                  <benefit.icon className="w-6 h-6 text-neon-blue" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
