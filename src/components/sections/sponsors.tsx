"use client";

import { motion } from "framer-motion";
import { Heart, Eye, Code2, Award, TrendingUp, Users, Star } from "lucide-react";
import Link from "next/link";

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
        {/* Patrocinadores Master */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neon-pink text-sm font-semibold tracking-widest uppercase">
            Apoiadores Estratégicos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Patrocinadores
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"> Master</span>
          </h2>
        </motion.div>

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
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Logo */}
                <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl bg-white p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">F</div>
                    <p className="text-xs font-bold text-gray-700">FIAP</p>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-3">
                    <Star className="w-6 h-6 text-neon-pink fill-neon-pink" />
                    <span className="text-sm font-bold text-neon-pink uppercase tracking-widest">
                      Patrocinador Master
                    </span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    FIAP
                  </h3>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-2xl">
                    A FIAP é uma instituição de ensino superior focada em {" "}
                    <span className="text-white font-semibold">Tecnologia, Inovação e Negócios</span>. 
                    Oferecendo programas de graduação, pós-graduação e cursos especializados para 
                    preparar profissionais prontos para o mercado global.
                  </p>

                  <Link
                    href="https://www.fiap.com.br/graduacao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
                  >
                    Conheça os Cursos de Graduação
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Patrocinador Estant3D */}
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
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Logo */}
                <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl bg-white p-6 flex items-center justify-center">
                  <img 
                    src="/estant3d.png" 
                    alt="Estant3D Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-center lg:text-left">
                  <span className="text-sm font-bold text-neon-blue uppercase tracking-widest">
                    Parceiro Estratégico
                  </span>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-2">
                    Estant3D
                  </h3>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-2xl">
                    Fundada a mais de 1 ano, a <span className="text-white font-semibold">Estant3D</span> foca em 
                    <span className="text-white font-semibold"> prototipagem rápida, brindes corporativos, chaveiros tecnológicos 
                    e reposição de peças de maquinários para PMEs</span>. Especializada em inovação e soluções tecnológicas 
                    personalizadas para empresas.
                  </p>

                  <a
                    href="https://estant3d.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    Conheça a Estant3D
                    <span>→</span>
                  </a>
                </div>
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
