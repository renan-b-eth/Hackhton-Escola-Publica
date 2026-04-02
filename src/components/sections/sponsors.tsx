"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, Heart } from "lucide-react";

const SPONSOR_FORM = "https://forms.gle/d6qBswpQHPAw918n6";

const patrocinadoresAtuais = {
  principal: null as { nome: string; site: string; logo: string; nivel: string } | null,
  parceiros: [] as { nome: string; site: string; logo: string; nivel: string }[],
};

const comunidadesApoio = [
  {
    nome: "Women in Tech",
    descricao: "Comunidade dedicada a empoderar mulheres na tecnologia",
    beneficio: "Em negociacao",
    icone: Users,
  },
  {
    nome: "Women in Data",
    descricao: "Grupo focado em dados e analytics para mulheres",
    beneficio: "Em negociacao",
    icone: Award,
  },
];

const beneficios = [
  "Visibilidade para alunos, educadores e familias",
  "Acesso a jovens talentos antes do mercado",
  "Relatorios de impacto com metricas reais",
  "Networking com lideres educacionais e tecnologicos",
];

const cotasPatrocinio = [
  {
    nome: "Patrocinador Master",
    valor: "R$ 15.000+",
    beneficios: [
      "Logo no banner principal do evento",
      "Palestra de 30 min no palco",
      "Divulgação em todos os canais",
      "Certificado de Patrocinador Master",
      "Relatório de impacto detalhado",
    ],
  },
  {
    nome: "Patrocinador Ouro",
    valor: "R$ 8.000 - R$ 14.999",
    beneficios: [
      "Logo em materiais do evento",
      "Banner dedicado no local",
      "Divulgação nas redes sociais",
      "Certificado de Patrocinador Ouro",
    ],
  },
  {
    nome: "Patrocinador Prata",
    valor: "R$ 3.000 - R$ 7.999",
    beneficios: [
      "Logo no site e materiais",
      "Divulgação nas redes sociais",
      "Certificado de Patrocinador Prata",
    ],
  },
  {
    nome: "Apoio em Produtos",
    valor: "Brindes / Kits / Alimentação",
    beneficios: [
      "Brindes para os participantes",
      "Kits para os times",
      "Alimentação durante o evento",
      "Licenças de software",
    ],
  },
];

export function SponsorsSection() {
  return (
    <section id="patrocinadores" className="section-light relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* Cabeçalho */}
        <div className="flex items-end justify-between mb-2">
          <motion.p
            className="kicker"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
          >
            Apoio & Patrocínio
          </motion.p>
        </div>

        <div className="divider-h mb-12" />

        {/* Título Principal */}
        <motion.h2
          className="font-display font-bold text-ink leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Esta iniciativa existe<br />
          <span className="italic text-stone">graças a quem acredita.</span>
        </motion.h2>

        {/* Grid Principal */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Coluna Esquerda - Patrocinadores e Apoiadores */}
          <div className="space-y-10">
            
            {/* Patrocinador Master */}
            {patrocinadoresAtuais.principal && (
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block bg-rouge text-white font-sans text-[9px] font-semibold uppercase tracking-widest px-3 py-1">
                  Patrocinador Master
                </span>
              </div>
              <Link
                href={patrocinadoresAtuais.principal.site}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative h-20 w-48 border-2 border-rouge/30 bg-white p-4 hover:border-rouge transition-colors">
                  <Image 
                    src={patrocinadoresAtuais.principal.logo} 
                    alt={patrocinadoresAtuais.principal.nome} 
                    fill 
                    className="object-contain p-2" 
                    sizes="192px" 
                  />
                </div>
              </Link>
              <p className="font-sans text-[10px] text-stone/70 mt-2 uppercase tracking-widest">
                {patrocinadoresAtuais.principal.nome}
              </p>
            </motion.div>
            )}

            {/* Parceiros Estratégicos */}
            {patrocinadoresAtuais.parceiros.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block border border-stone text-stone font-sans text-[9px] font-semibold uppercase tracking-widest px-3 py-1">
                  Parceiros Estratégicos
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                {patrocinadoresAtuais.parceiros.map((parceiro, i) => (
                  <Link
                    key={i}
                    href={parceiro.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative h-14 w-32 border border-hairline bg-white p-2 hover:border-stone transition-colors">
                      <Image 
                        src={parceiro.logo} 
                        alt={parceiro.nome} 
                        fill 
                        className="object-contain p-1.5" 
                        sizes="128px" 
                      />
                    </div>
                    <p className="font-sans text-[9px] text-stone/70 mt-1.5 uppercase tracking-widest">
                      {parceiro.nome}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
            )}

            {/* Comunidades de Apoio - Mentorias */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-ink text-editorial font-sans text-[9px] font-semibold uppercase tracking-widest px-3 py-1">
                  Apoio com Mentorias
                </span>
              </div>
              <div className="space-y-4">
                {comunidadesApoio.map((comunidade, i) => (
                  <div
                    key={i}
                    className="border border-hairline p-5 bg-white hover:border-stone transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-ink/5 flex items-center justify-center flex-shrink-0">
                        <comunidade.icone className="w-5 h-5 text-ink" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display font-bold text-ink text-sm mb-1">
                          {comunidade.nome}
                        </h4>
                        <p className="font-sans text-xs text-stone leading-relaxed">
                          {comunidade.descricao}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <Heart className="w-3 h-3 text-rouge" />
                          <span className="font-sans text-[10px] text-rouge font-medium">
                            {comunidade.beneficio}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefícios */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t border-hairline pt-8"
            >
              <p className="kicker mb-4">Por que apoiar o EstaHack?</p>
              <ul className="space-y-3">
                {beneficios.map((b, i) => (
                  <li key={i} className="font-sans text-xs text-stone flex gap-3">
                    <span className="text-rouge font-bold mt-0.5 flex-shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Coluna Direita - Seja o Próximo Patrocinador */}
          <motion.div
            className="lg:sticky lg:top-24 space-y-6"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Card Principal - Próxima Edição */}
            <div className="bg-ink text-editorial p-8 lg:p-10">
              <div className="mb-6">
                <span className="inline-block bg-rouge text-white font-sans text-[9px] font-semibold uppercase tracking-widest px-3 py-1 mb-4">
                  Segunda Edição
                </span>
                <h3
                  className="font-display font-bold leading-tight mb-3"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  Seja você o próximo<br />patrocinador do EstaHack
                </h3>
                <p className="font-sans text-sm text-stone/70 leading-relaxed">
                  Apoie a próxima edição e faça parte da transformação da educação pública em São Paulo.
                </p>
              </div>

              {/* Cotas de Patrocínio */}
              <div className="divider-h border-stone/20 mb-6" />
              
              <div className="space-y-4 mb-8">
                <p className="font-sans text-[10px] uppercase tracking-widest text-stone/50 mb-4">
                  Cotas de Patrocínio
                </p>
                {cotasPatrocinio.map((cota, i) => (
                  <div
                    key={i}
                    className="border border-stone/20 p-4 hover:border-stone/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-display font-bold text-sm text-editorial">
                        {cota.nome}
                      </h4>
                      <span className="font-mono text-xs text-rouge">
                        {cota.valor}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {cota.beneficios.slice(0, 3).map((b, j) => (
                        <li key={j} className="font-sans text-[10px] text-stone/60 flex gap-2">
                          <span className="text-rouge">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA Principal */}
              <a
                href={SPONSOR_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-rouge text-white font-sans text-xs font-semibold uppercase tracking-[0.18em] px-6 py-5 text-center hover:bg-rouge-deep transition-colors flex items-center justify-center gap-2"
              >
                Quero Patrocinar a 2ª Edição
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="font-sans text-[10px] text-stone/40 text-center mt-3">
                Preencha o formulário e nossa equipe entrará em contato
              </p>
            </div>

            {/* Card Secundário - Contato Direto */}
            <div className="border border-hairline p-6">
              <h4 className="font-display font-bold text-ink text-sm mb-3">
                Prefere falar diretamente?
              </h4>
              <p className="font-sans text-xs text-stone mb-4 leading-relaxed">
                Entre em contato com nossa equipe para discutir oportunidades de parceria personalizadas.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:contato@estahack.com.br"
                  className="block font-sans text-xs text-ink hover:text-rouge transition-colors"
                >
                  ✉ contato@estahack.com.br
                </a>
                <p className="font-sans text-[10px] text-stone/70">
                  Resposta em até 48h úteis
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
