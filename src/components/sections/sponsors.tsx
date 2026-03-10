"use client";

import { motion } from "framer-motion";
import { Heart, Eye, Code2, Award, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

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
    <section id="patrocinadores" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Master Sponsor Card */}
        <div className="mb-20">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex flex-col items-center justify-center py-6 sm:py-10">
                <Image
                  src="/fiap.png"
                  alt="FIAP Logo"
                  width={384}
                  height={150}
                  className="w-48 sm:w-72 md:w-96 h-auto object-contain drop-shadow-2xl bg-white/5 p-4 sm:p-8 rounded-3xl mb-8"
                />
                <p className="text-gray-300 text-lg sm:text-xl text-center max-w-4xl leading-relaxed">
                  A <span className="text-white font-bold">FIAP</span> é o centro de excelência em tecnologia mais respeitado do país.
                  Referência no ensino superior focada em inovação e negócios, forma profissionais altamente capacitados que lideram a transformação digital e tecnológica em grandes empresas globais.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefícios Section */}
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
