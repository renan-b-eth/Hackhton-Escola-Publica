"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-neon-purple/10 via-transparent to-transparent" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background event image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/imagem1.png"
          alt="Evento Hackathon"
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
          priority
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ───── COLUNA ESQUERDA — Texto ───── */}
          <div className="text-center lg:text-left">

            {/* Título com Logo */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex justify-center items-center w-full mb-4">
                  <div className="relative w-40 h-40 sm:w-56 sm:h-56 flex-shrink-0 mx-auto">
                    <Image
                      src="/logoestahack.png"
                      alt="Logo EstaHack"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
              <br />
              <motion.span
                className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 60 }}
              >
                A Primeira Hackathon
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 60 }}
              >
                das Escolas Estaduais
              </motion.span>
            </motion.h1>

            {/* Descrição */}
            <motion.p
              className="text-lg sm:text-xl text-gray-400 max-w-xl mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Conectando alunos da rede pública à tecnologia, inovação e ao mercado
              de trabalho global. Uma iniciativa da{" "}
              <span className="text-white font-semibold">
                E.E. Nancy de Oliveira Fidalgo
              </span>
              .
            </motion.p>

            {/* Badge Pré-TCC */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                🎓 Projeto desenvolvido dentro da escola como Pré-TCC
              </span>
            </motion.div>

            {/* Botões */}
            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto group"
                onClick={() => scrollToSection("inscricao")}
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Quero ser Mentor
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => scrollToSection("inscricao")}
              >
                Quero Patrocinar
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { value: "36h", label: "Maratona" },
                { value: "100+", label: "Alunos Impactados" },
                { value: "3", label: "Organizadores" },
                { value: "∞", label: "Possibilidades" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ───── COLUNA DIREITA — Imagem dos Alunos ───── */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 rounded-3xl blur-2xl" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/imagem-alunos.jpg"
                alt="Alunos da E.E. Nancy de Oliveira Fidalgo apresentando seus projetos no EstaHack"
                width={800}
                height={600}
                className="w-full h-auto object-cover object-center"
                priority
              />
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Legenda */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">Nossos Alunos</span>
                </div>
                <p className="text-white font-bold text-lg leading-tight">
                  Soluções reais criadas dentro da escola
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Projeto Pré-TCC · E.E. Nancy de Oliveira Fidalgo · EstaHack 2026
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gray-900 border border-neon-blue/30 rounded-2xl px-4 py-3 shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-neon-blue text-xs font-semibold">🏆 1º Hackathon</p>
              <p className="text-white text-sm font-bold">Escola Estadual</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </section>
  );
}
