"use client";

import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Award,
  MapPin,
  Clock,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

const regras = [
  {
    icon: Shield,
    title: "Propriedade Intelectual",
    desc: "Todos os projetos serão registrados na Biblioteca Nacional de Propriedade Intelectual (www.bn.gov.br) para proteção de direitos autorais.",
  },
  {
    icon: FileText,
    title: "Resolução 104 SEDUC",
    desc: "Este projeto é regulamentado pela Resolução 104 da Secretaria de Educação, reconhecendo-se como atividade curricular válida para Pré-TCC.",
  },
  {
    icon: Award,
    title: "Sistema de Pontuação",
    desc: "Critérios de avaliação: Inovação (30%), Viabilidade Técnica (25%), Impacto Social (25%), Apresentação (20%).",
  },
  {
    icon: MapPin,
    title: "Local das Finais",
    desc: "E.E. Nancy de Oliveira Fidalgo - Zona Leste, São Paulo. Todas as apresentações e premiação acontecem no auditório da escola.",
  },
];

const cronograma = [
  {
    fase: "Inscrição de Equipes",
    periodo: "Janeiro - Fevereiro",
    descricao: "Escolas e equipes fazem inscrição",
  },
  {
    fase: "Capacitação",
    periodo: "Fevereiro",
    descricao: "Workshops com mentores sobre desenvolvimento e pitch",
  },
  {
    fase: "Hackathon",
    periodo: "Março (36 horas)",
    descricao: "Maratona de desenvolvimento na Nancy de Oliveira Fidalgo",
  },
  {
    fase: "Demo Day",
    periodo: "Março",
    descricao: "Apresentação de projetos e premiação",
  },
  {
    fase: "Registro de IP",
    periodo: "Pós-evento",
    descricao: "Registro dos projetos na Biblioteca Nacional",
  },
];

const criterios = [
  {
    categoria: "Inovação",
    peso: "30%",
    detalhes: [
      "Originalidade da solução",
      "Uso criativo de tecnologia",
      "Diferencial competitivo",
    ],
  },
  {
    categoria: "Viabilidade Técnica",
    peso: "25%",
    detalhes: [
      "Código funcional",
      "Arquitetura bem estruturada",
      "Integração de ferramentas apropriadas",
    ],
  },
  {
    categoria: "Impacto Social",
    peso: "25%",
    detalhes: [
      "Relevância do problema",
      "Potencial impacto comunitário",
      "Sustentabilidade da solução",
    ],
  },
  {
    categoria: "Apresentação",
    peso: "20%",
    detalhes: [
      "Clareza na comunicação",
      "Qualidade do pitch",
      "Domínio do tema",
    ],
  },
];

export function RegulamentoSection() {
  return (
    <section id="regulamento" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.03] to-transparent" />

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
            Normatização e Proteção
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Regulamento &{" "}
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Proteção Intelectual
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Projeto respaldado por legislação oficial, com proteção de direitos
            autorais e reconhecimento na rede estadual.
          </p>
        </motion.div>

        {/* Informações principais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regras.map((regra, i) => (
            <motion.div
              key={i}
              className="group relative p-6 rounded-2xl bg-gray-900/60 border border-white/5 hover:border-white/15 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-pink/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 border border-white/10 flex items-center justify-center mb-4 group-hover:border-neon-purple/30 transition-colors">
                  <regra.icon className="w-6 h-6 text-neon-purple" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {regra.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {regra.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Critérios de Avaliação */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-2xl blur-xl" />
          <div className="relative p-8 rounded-2xl bg-gray-900/90 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-neon-purple" />
              <h3 className="text-2xl font-bold text-white">
                Critérios de Avaliação
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {criterios.map((criterio, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-bold text-lg">
                      {criterio.categoria}
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20">
                      <span className="text-neon-purple font-bold">
                        {criterio.peso}
                      </span>
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {criterio.detalhes.map((detalhe, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-neon-purple flex-shrink-0 mt-0.5" />
                        {detalhe}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cronograma */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 rounded-2xl blur-xl" />
          <div className="relative p-8 rounded-2xl bg-gray-900/90 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-6 h-6 text-neon-pink" />
              <h3 className="text-2xl font-bold text-white">
                Cronograma 2026
              </h3>
            </div>

            <div className="space-y-4">
              {cronograma.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple">
                      <span className="text-white font-bold text-sm">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-bold mb-1">{item.fase}</h4>
                    <p className="text-neon-pink text-sm font-semibold mb-1">
                      {item.periodo}
                    </p>
                    <p className="text-gray-400 text-sm">{item.descricao}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Proteção Intelectual Highlight */}
        <motion.div
          className="relative mt-16 p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-bold text-lg mb-2">
                Proteção de Propriedade Intelectual
              </h4>
              <p className="text-gray-300 mb-3">
                Todos os projetos desenvolvidos no EstaHack 2026 serão
                registrados na{" "}
                <span className="text-white font-semibold">
                  Biblioteca Nacional de Propriedade Intelectual
                </span>{" "}
                (www.bn.gov.br) sob os nomes dos alunos autores, garantindo
                proteção de direitos autorais e reconhecimento ofical.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-semibold">
                  Registro garantido para todos os projetos
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
