"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative section-light min-h-screen flex flex-col overflow-hidden pt-14">
      {/* ── Watermark number "36" — fundo, quase invisível ── */}
      <div
        aria-hidden
        className="absolute right-0 bottom-0 select-none pointer-events-none leading-none font-display font-black text-ink"
        style={{ fontSize: "clamp(180px, 32vw, 480px)", opacity: 0.035, lineHeight: 1 }}
      >
        36
      </div>

      {/* ── Selo rotacionado — fora do grid ── */}
      <div
        className="absolute top-20 right-5 sm:right-10 z-10 stamp text-ink text-[9px] border-ink"
        style={{ transform: "rotate(-3deg)" }}
      >
        1º DO&nbsp;ESTADO
      </div>

      {/* ── Conteúdo principal ── */}
      <div className="relative z-10 flex-1 flex flex-col max-w-6xl mx-auto w-full px-5 sm:px-6">

        {/* Linha vermelha topo */}
        <motion.div
          className="rouge-line mt-16 sm:mt-20"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        <div className="flex-1 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start pt-10 pb-8">
          {/* ── COLUNA ESQUERDA — Texto ── */}
          <div className="flex flex-col justify-between h-full">
            {/* Kicker */}
            <motion.p
              className="kicker mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hackathon · Escola Pública · São Paulo
            </motion.p>

            {/* Headline — tipografia dominante assimétrica */}
            <motion.h1
              className="font-display font-black text-ink leading-[0.9] tracking-tight mb-8"
              style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {/* "na" menor e em itálico */}
              <span className="block">Hackathon</span>
              <span
                className="block italic font-semibold text-stone"
                style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
              >
                na escola
              </span>
              <span className="block">
                P<span className="text-rouge">ú</span>blica.
              </span>
            </motion.h1>

            {/* Subtexto direto */}
            <motion.p
              className="font-sans text-stone text-sm sm:text-base leading-relaxed max-w-sm mb-10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Alunos da rede estadual de São Paulo criando soluções
              para problemas que conhecem de perto — enchentes,
              mobilidade, saúde, moradia.
            </motion.p>

            {/* CTAs — Jornada A: participar */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <button
                onClick={() => scrollTo("inscricao")}
                className="bg-rouge text-white font-sans text-xs font-semibold uppercase tracking-[0.18em] px-8 py-4 hover:bg-rouge-deep transition-colors"
              >
                Inscreva-se
              </button>
              <button
                onClick={() => scrollTo("trilhas")}
                className="border border-ink text-ink font-sans text-xs font-semibold uppercase tracking-[0.18em] px-8 py-4 hover:bg-ink hover:text-editorial transition-colors"
              >
                Ver Desafios →
              </button>
            </motion.div>
          </div>

          {/* ── COLUNA DIREITA — Foto (só desktop) ── */}
          <motion.div
            className="hidden lg:block relative w-[340px] xl:w-[420px] self-stretch"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative h-full min-h-[420px] overflow-hidden">
              <Image
                src="/imagem-alunos.jpg"
                alt="Alunos apresentando projetos no EstaHack"
                fill
                className="object-cover object-center"
                priority
                sizes="420px"
              />
              {/* Overlay sutil no rodapé */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-editorial/80 to-transparent h-20" />
              {/* Caption */}
              <p className="absolute bottom-3 left-3 font-sans text-[10px] text-stone">
                e.e. nancy de oliveira fidalgo · são paulo
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── DATA-STRIP — quebra o container, full width ── */}
      <motion.div
        className="data-strip w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-wrap gap-x-8 gap-y-1 items-center">
          <span>15 Maio 2026</span>
          <span className="hidden sm:inline text-stone/40">·</span>
          <span>São Paulo</span>
          <span className="hidden sm:inline text-stone/40">·</span>
          <span>3 Desafios</span>
          <span className="hidden sm:inline text-stone/40">·</span>
          <span>36h de Maratona</span>
          <span className="hidden sm:inline text-stone/40">·</span>
          <span>100% Gratuito</span>
        </div>
      </motion.div>
    </section>
  );
}
