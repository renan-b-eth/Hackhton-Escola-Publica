"use client";

import { motion } from "framer-motion";

const passos = [
  {
    num: "01",
    titulo: "Inscreva-se",
    descricao:
      "Preencha o formulário com seus dados, escola e escolha o desafio que mais combina com você. Vagas limitadas por trilha.",
  },
  {
    num: "02",
    titulo: "Forme seu time",
    descricao:
      "Equipes de 3 a 5 alunos. Podem ser da mesma escola ou de escolas diferentes da rede estadual. Um responsável lidera a inscrição.",
  },
  {
    num: "03",
    titulo: "36 horas de maratona",
    descricao:
      "15 a 17 de Maio de 2026. Sua equipe desenvolve a solução com apoio de mentores, workshops e infraestrutura completa. Tudo gratuito.",
  },
  {
    num: "04",
    titulo: "Pitch e premiação",
    descricao:
      "No Demo Day, cada equipe apresenta para uma banca avaliadora. Os melhores projetos são premiados e todos recebem certificado.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-light relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-end justify-between mb-2">
          <motion.p
            className="kicker"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            Como Funciona
          </motion.p>
        </div>

        <div className="divider-h mb-10" />

        <motion.h2
          className="font-display font-bold text-ink leading-tight mb-16"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Simples.<br />
          <span className="text-stone italic">Direto ao ponto.</span>
        </motion.h2>

        {/* Passos — lista com muito ar */}
        <div className="space-y-0">
          {passos.map((p, i) => (
            <motion.div
              key={i}
              className="grid sm:grid-cols-[80px_1fr] gap-6 sm:gap-12 py-10 border-t border-hairline last:border-b items-start"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Número grande em rouge */}
              <span
                className="font-display font-black text-rouge leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {p.num}
              </span>

              {/* Conteúdo */}
              <div>
                <h3
                  className="font-display font-bold text-ink leading-tight mb-3"
                  style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
                >
                  {p.titulo}
                </h3>
                <p className="font-sans text-stone text-sm leading-relaxed max-w-lg">
                  {p.descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
