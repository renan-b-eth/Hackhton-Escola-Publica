"use client";

import { motion } from "framer-motion";

const desafios = [
  {
    num: "01",
    titulo: "Inteligência Artificial na Educação",
    subtitulo: "Trilha Principal · 20 vagas",
    descricao:
      "Ferramentas que usam IA para transformar o aprendizado dentro da escola pública. Assistentes de estudo, detecção de dificuldades, correção automática.",
    temas: ["Assistente de estudos personalizado", "Detecção precoce de dificuldades", "Correção automática de redações", "Recomendação de conteúdo adaptativo"],
    tecnologias: "Python · TensorFlow · OpenAI API · LangChain",
  },
  {
    num: "02",
    titulo: "Gestão Escolar Inteligente",
    subtitulo: "Trilha Dados · 15 vagas",
    descricao:
      "Dados escolares transformados em decisões. Dashboards para gestores, sistemas de comunicação com famílias, predição de evasão.",
    temas: ["Dashboard de frequência e desempenho", "Comunicação com famílias", "Predição de evasão escolar", "Gestão de recursos e infraestrutura"],
    tecnologias: "React · Node.js · PostgreSQL · Chart.js",
  },
  {
    num: "03",
    titulo: "Inclusão Digital & Acessibilidade",
    subtitulo: "Trilha Impacto · 15 vagas",
    descricao:
      "Tecnologias que quebram barreiras de acesso à educação. Soluções para alunos com deficiência visual, auditiva ou TEA.",
    temas: ["Tradutor de Libras em tempo real", "Leitor de texto para deficientes visuais", "Plataforma para alunos com TEA", "Legendagem automática em tempo real"],
    tecnologias: "React Native · Computer Vision · WebSpeech API · IoT",
  },
];

export function TrilhasSection() {
  return (
    <section id="trilhas" className="section-light relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* Cabeçalho assimétrico */}
        <div className="flex items-end justify-between mb-2">
          <motion.p
            className="kicker"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            Desafios
          </motion.p>
          <span className="hidden sm:block font-sans text-[10px] text-stone uppercase tracking-widest">
            Escolha uma trilha
          </span>
        </div>

        <div className="divider-h mb-10" />

        <motion.h2
          className="font-display font-bold text-ink leading-tight mb-14"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Três problemas reais.<br />
          <span className="text-stone font-semibold italic">Suas soluções.</span>
        </motion.h2>

        {/* Lista editorial — não cards */}
        <div className="space-y-0">
          {desafios.map((d, i) => (
            <motion.div
              key={d.num}
              className="group grid sm:grid-cols-[80px_1fr] lg:grid-cols-[100px_1fr_260px] gap-6 lg:gap-12 py-8 sm:py-10 border-t border-hairline last:border-b hover:bg-paper/50 transition-colors duration-200"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Número grande */}
              <div className="flex items-start">
                <span
                  className="font-display font-black text-hairline leading-none select-none"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  {d.num}
                </span>
              </div>

              {/* Conteúdo */}
              <div>
                <p className="kicker mb-2 text-rouge">{d.subtitulo}</p>
                <h3
                  className="font-display font-bold text-ink leading-tight mb-3"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
                >
                  {d.titulo}
                </h3>
                <p className="font-sans text-stone text-sm leading-relaxed mb-5 max-w-2xl">
                  {d.descricao}
                </p>
                <ul className="space-y-1">
                  {d.temas.map((t, j) => (
                    <li key={j} className="font-sans text-xs text-stone flex items-start gap-2">
                      <span className="text-rouge mt-0.5">—</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tecnologias — coluna direita (só lg) */}
              <div className="hidden lg:flex flex-col justify-start pt-1">
                <p className="kicker mb-2">Tecnologias</p>
                <p className="font-mono text-xs text-stone leading-relaxed">
                  {d.tecnologias}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rodapé */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="font-sans text-xs text-stone">
            Equipes de <strong className="text-ink">3 a 5 alunos</strong> por desafio.
            Inscrições via formulário abaixo.
          </p>
          <button
            onClick={() => document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-rouge text-white font-sans text-xs font-semibold uppercase tracking-[0.18em] px-6 py-3 hover:bg-rouge-deep transition-colors"
          >
            Inscreva-se →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
