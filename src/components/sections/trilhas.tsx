"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, Accessibility, ChevronRight, Users, Lightbulb, Code2 } from "lucide-react";

const trilhas = [
  {
    id: "ia-educacao",
    icon: Brain,
    title: "Inteligência Artificial na Educação",
    subtitle: "Trilha Principal",
    description:
      "Desenvolva soluções que utilizam IA para transformar a experiência de aprendizado dentro da escola pública. Crie ferramentas inteligentes que ajudem professores e alunos a alcançar melhores resultados.",
    desafios: [
      "Assistente de estudos personalizado com IA",
      "Sistema de detecção precoce de dificuldades de aprendizagem",
      "Ferramenta de correção automática de redações",
      "Plataforma de recomendação de conteúdo adaptativo",
    ],
    tecnologias: ["Python", "TensorFlow", "OpenAI API", "LangChain", "RAG"],
    color: "from-neon-blue to-cyan-400",
    glow: "neon-blue",
    badge: "🔥 Mais Popular",
    vagas: "20 vagas",
  },
  {
    id: "gestao-escolar",
    icon: BarChart3,
    title: "Gestão Escolar Inteligente",
    subtitle: "Trilha Dados",
    description:
      "Crie dashboards e sistemas que transformem dados escolares em decisões inteligentes. Ajude gestores a otimizar recursos, melhorar o desempenho acadêmico e aumentar o engajamento da comunidade escolar.",
    desafios: [
      "Dashboard de acompanhamento de frequência e desempenho",
      "Sistema de comunicação integrada com famílias",
      "Predição de evasão escolar com machine learning",
      "Gestão inteligente de recursos e infraestrutura",
    ],
    tecnologias: ["React", "Node.js", "PostgreSQL", "Chart.js", "Power BI"],
    color: "from-neon-purple to-pink-400",
    glow: "neon-purple",
    badge: "📊 Dados",
    vagas: "15 vagas",
  },
  {
    id: "inclusao-digital",
    icon: Accessibility,
    title: "Inclusão Digital & Acessibilidade",
    subtitle: "Trilha Impacto",
    description:
      "Desenvolva tecnologias assistivas e soluções que quebrem barreiras de acesso à educação. Crie ferramentas que tornem o aprendizado mais inclusivo para todos os alunos, independentemente de suas limitações.",
    desafios: [
      "Tradutor de Libras em tempo real usando visão computacional",
      "Leitor de texto acessível para deficientes visuais",
      "Plataforma de aprendizado para alunos com TEA",
      "Ferramenta de legendagem automática em tempo real",
    ],
    tecnologias: ["React Native", "Computer Vision", "WebSpeech API", "ESP32", "IoT"],
    color: "from-emerald-400 to-teal-400",
    glow: "emerald-400",
    badge: "♿ Impacto Social",
    vagas: "15 vagas",
  },
];

export function TrilhasSection() {
  return (
    <section id="trilhas" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/[0.03] to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[180px]" />

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
            Escolha seu Caminho
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Trilhas do{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Hackathon
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Três caminhos para transformar a educação pública com tecnologia.
            Escolha a trilha que mais combina com seu time e suas habilidades.
          </p>
        </motion.div>

        {/* Trilhas Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {trilhas.map((trilha, i) => (
            <motion.div
              key={trilha.id}
              className="group relative flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${trilha.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative flex flex-col h-full p-6 sm:p-8 rounded-3xl bg-gray-900/60 border border-white/5 group-hover:border-white/15 transition-all duration-300">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${trilha.color} bg-opacity-10 text-xs font-semibold`}
                    style={{
                      background: `linear-gradient(to right, ${trilha.color.includes("neon-blue") ? "rgba(0,212,255,0.1)" : trilha.color.includes("neon-purple") ? "rgba(168,85,247,0.1)" : "rgba(52,211,153,0.1)"}, ${trilha.color.includes("neon-blue") ? "rgba(0,212,255,0.05)" : trilha.color.includes("neon-purple") ? "rgba(168,85,247,0.05)" : "rgba(52,211,153,0.05)"})`,
                    }}
                  >
                    {trilha.badge}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{trilha.vagas}</span>
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${trilha.color} p-[1px] mb-5`}
                >
                  <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                    <trilha.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Title */}
                <div className="mb-3">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {trilha.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {trilha.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {trilha.description}
                </p>

                {/* Desafios */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      Desafios Sugeridos
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {trilha.desafios.map((desafio, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <ChevronRight className="w-3.5 h-3.5 text-gray-600 flex-shrink-0 mt-0.5" />
                        {desafio}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tecnologias */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      Tecnologias
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trilha.tecnologias.map((tech, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/5">
            <Users className="w-5 h-5 text-neon-blue" />
            <p className="text-gray-400 text-sm">
              Equipes de <span className="text-white font-semibold">3 a 5 alunos</span> por trilha.
              Orientadores podem acompanhar múltiplas equipes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
