"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Quem pode participar do EstaHack?",
    a: "Alunos regularmente matriculados na rede estadual de ensino de São Paulo. O evento é 100% gratuito.",
  },
  {
    q: "Como funcionam as equipes?",
    a: "Equipes de 3 a 5 alunos. Podem ser da mesma escola ou de escolas diferentes da rede estadual. Um responsável lidera a inscrição.",
  },
  {
    q: "Preciso saber programar para participar?",
    a: "Não necessariamente. Os desafios aceitam equipes com perfis variados: desenvolvedores, designers, gestores e comunicadores. O importante é a solução, não só o código.",
  },
  {
    q: "Onde acontece o evento?",
    a: "Presencialmente na E.E. Nancy de Oliveira Fidalgo, em São Paulo. O endereço completo será enviado após confirmação da inscrição.",
  },
  {
    q: "O que é fornecido durante os 3 dias?",
    a: "Alimentação (café da manhã, almoço e jantar), infraestrutura técnica, acesso a mentores, workshops e materiais de apoio. Tudo incluso, sem custo.",
  },
  {
    q: "Como são avaliados os projetos?",
    a: "Por uma banca de representantes da FIAP, Estant3D, Rendey LLC e SEDUC-SP. Os critérios são: inovação, viabilidade técnica, impacto social e qualidade da apresentação.",
  },
  {
    q: "Quais são os prêmios?",
    a: "Os prêmios ainda estão sendo confirmados com os patrocinadores. Todos os participantes recebem certificado de participação, kit de boas-vindas e acesso à comunidade alumni.",
  },
  {
    q: "Como posso apoiar ou patrocinar?",
    a: "Acesse a seção 'Apoio & Patrocínio' nesta página e preencha o formulário. Nossa equipe entrará em contato para alinhar as possibilidades.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="regulamento" className="section-light relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-end justify-between mb-2">
          <motion.p
            className="kicker"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            FAQ & Regulamento
          </motion.p>
        </div>

        <div className="divider-h mb-10" />

        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">
          {/* Coluna título */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              className="font-display font-bold text-ink leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Perguntas<br />
              <span className="italic text-stone">frequentes.</span>
            </h2>
            <p className="font-sans text-xs text-stone mt-4 leading-relaxed">
              Dúvidas não respondidas aqui? Entre em contato via Instagram.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            className="space-y-0"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-hairline last:border-b">
                <button
                  className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-sans font-semibold text-sm text-ink group-hover:text-rouge transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 font-display text-lg text-stone transition-transform duration-200 ${
                      open === i ? "rotate-45 text-rouge" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="pb-5 pr-8">
                    <p className="font-sans text-sm text-stone leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
