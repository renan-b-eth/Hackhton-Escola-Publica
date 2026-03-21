"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, ChevronDown, Calendar, MapPin, Users, Sparkles, Timer } from "lucide-react";
import Image from "next/image";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Event date: May 15, 2027
    const eventDate = new Date("2027-05-15T08:00:00-03:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
      {units.map((unit, i) => (
        <motion.div
          key={unit.label}
          className="relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity" />
          <div className="relative bg-gray-900/80 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[72px] text-center backdrop-blur-sm">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-mono">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mt-0.5">
              {unit.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

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
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/10 rounded-full blur-[200px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ───── COLUNA ESQUERDA — Texto ───── */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <motion.div
              className="flex justify-center lg:justify-start items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="relative w-28 h-28 sm:w-36 sm:h-36">
                <Image
                  src="/logoestahack.png"
                  alt="EstaHack"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Badge de Destaque */}
            <motion.div
              className="flex justify-center lg:justify-start mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 text-neon-blue text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                1º Hackathon das Escolas Estaduais de SP
              </span>
            </motion.div>

            {/* Título Principal */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 60 }}
              >
                EstaHack
              </motion.span>
              <motion.span
                className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                O Futuro da Educação
              </motion.span>
              <motion.span
                className="block text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Pública é Tecnologia
              </motion.span>
            </motion.h1>

            {/* Descrição */}
            <motion.p
              className="text-base sm:text-lg text-gray-400 max-w-xl mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              36 horas de maratona de inovação para alunos da rede estadual de São Paulo.
              Crie soluções tecnológicas para problemas reais da sua comunidade.
            </motion.p>

            {/* Info rápida do evento */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="w-4 h-4 text-neon-blue" />
                <span>15–17 de Maio, 2027</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-neon-purple" />
                <span>E.E. Nancy de Oliveira Fidalgo</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Users className="w-4 h-4 text-neon-pink" />
                <span>Vagas Limitadas</span>
              </div>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                <Timer className="w-4 h-4 text-neon-blue" />
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  Contagem Regressiva para o Evento
                </span>
              </div>
              <CountdownTimer />
            </motion.div>

            {/* Botões CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto group relative overflow-hidden"
                onClick={() => scrollToSection("inscricao")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">Inscreva-se Agora</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto group"
                onClick={() => scrollToSection("trilhas")}
              >
                Ver Trilhas do Hackathon
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                { value: "36h", label: "de Maratona" },
                { value: "3", label: "Trilhas" },
                { value: "R$15k+", label: "em Prêmios" },
                { value: "100%", label: "Gratuito" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center lg:text-left p-3 rounded-xl bg-white/[0.02] border border-white/5"
                  whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 255, 0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
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
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">
                    Inscrições Abertas
                  </span>
                </div>
                <p className="text-white font-bold text-lg leading-tight">
                  Junte-se ao maior hackathon da rede pública
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  E.E. Nancy de Oliveira Fidalgo · São Paulo – SP
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gray-900 border border-neon-blue/30 rounded-2xl px-4 py-3 shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-neon-blue text-xs font-semibold">🏆 1º Hackathon</p>
              <p className="text-white text-sm font-bold">Escola Estadual</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-gray-900 border border-neon-purple/30 rounded-2xl px-4 py-3 shadow-xl"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <p className="text-neon-purple text-xs font-semibold">📚 Pré-TCC</p>
              <p className="text-white text-sm font-bold">Projeto Escolar</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection("trilhas")}
      >
        <ChevronDown className="w-6 h-6 text-gray-500 hover:text-neon-blue transition-colors" />
      </motion.div>
    </section>
  );
}
