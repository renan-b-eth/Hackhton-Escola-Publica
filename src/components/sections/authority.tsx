"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Trophy,
  Flag,
  GraduationCap,
  Brain,
  Rocket,
  Stethoscope,
  Globe,
  Building2,
  Cpu,
  Medal,
  Lightbulb,
  ExternalLink,
  Quote,
  Users,
  Star,
} from "lucide-react";

const badges = [
  {
    icon: Trophy,
    label: "Hackathon Microsoft (2026)",
    detail: "Solução assistiva com ESP32-CAM e IA para pessoas cegas",
    color: "from-yellow-400 to-amber-500",
  },
  {
    icon: Flag,
    label: "Fundador Rendey LLC",
    detail: "New Mexico, USA",
    color: "from-neon-blue to-cyan-400",
  },
  {
    icon: GraduationCap,
    label: "Professor de Dev. de Sistemas",
    detail: "Governo do Estado de SP",
    color: "from-neon-purple to-pink-400",
  },
  {
    icon: Brain,
    label: "Idealizador do Rendey Class",
    detail: "IA aplicada à Educação — concebido durante pós na USP",
    color: "from-emerald-400 to-teal-500",
  },
];

const hackathons = [
  {
    icon: Trophy,
    name: "Hackathon Microsoft",
    year: "2026",
    result: "Solução assistiva com ESP32-CAM e IA",
    highlight: true,
    badge: "🏆 Destaque",
    members: [
      { photo: "/foto1.jpg", name: "Renan" },
      { photo: "/foto2.png", name: "Lucas" },
      { photo: "/foto3.png", name: "Yuki" },
    ],
  },
  {
    icon: Stethoscope,
    name: "II Hackathon Saúde — HCFMUSP / InovaHC",
    year: "2025",
    result: "3º Lugar — EndoFlow (diagnóstico de endometriose)",
    highlight: true,
    badge: "🥉 3º Lugar",
    members: [
      { photo: "/foto1.jpg", name: "Renan" },
      { photo: "/foto2.png", name: "Lucas" },
      { photo: "/foto3.png", name: "Yuki" },
    ],
  },
  {
    icon: Rocket,
    name: "MIT Hacking Medicine",
    year: "2025",
    result: "Inovação em saúde digital",
    highlight: false,
    badge: null,
    members: [
      { photo: "/foto1.jpg", name: "Renan" },
      { photo: "/foto3.png", name: "Yuki" },
    ],
  },
  {
    icon: Globe,
    name: "NASA Space Apps Challenge",
    year: "2024/2025",
    result: "Projeto colaborativo internacional",
    highlight: false,
    badge: null,
    members: [
      { photo: "/foto1.jpg", name: "Renan" },
      { photo: "/foto2.png", name: "Lucas" },
      { photo: "/foto3.png", name: "Yuki" },
    ],
  },
  {
    icon: Building2,
    name: "Hackathon Itaú Unibanco (Cubo Itaú)",
    year: "2024/2025",
    result: "Multicloud & IA",
    highlight: false,
    badge: null,
    members: [
      { photo: "/foto1.jpg", name: "Renan" },
      { photo: "/foto2.png", name: "Lucas" },
    ],
  },
  {
    icon: Cpu,
    name: "ICTi — BOOM Break Our Model",
    year: "2025",
    result: "IA Responsável",
    highlight: false,
    badge: null,
    members: [
      { photo: "/foto1.jpg", name: "Renan" },
      { photo: "/foto2.png", name: "Lucas" },
      { photo: "/foto3.png", name: "Yuki" },
    ],
  },
  {
    icon: Medal,
    name: "Maratona de Informática CPS",
    year: "2017",
    result: "2º Lugar",
    highlight: true,
    badge: "🥈 2º Lugar",
    members: [{ photo: "/foto1.jpg", name: "Renan" }],
  },
  {
    icon: Lightbulb,
    name: "Startup in School — Google / Centro Paula Souza",
    year: "2018",
    result: "Empreendedorismo estudantil",
    highlight: false,
    badge: null,
    members: [{ photo: "/foto1.jpg", name: "Renan" }],
  },
];

const projects = [
  {
    name: "Rendey Class",
    url: "https://rendey-class-front.vercel.app/",
    desc: "IA na Educação",
  },
  {
    name: "Rendey LLC",
    url: "https://rendey.store",
    desc: "Empresa nos EUA",
  },
  {
    name: "Site Pessoal",
    url: "https://site-renanbezerra.vercel.app/",
    desc: "Portfólio",
  },
];

// Avatar component with real photo
function MemberAvatar({
  photo,
  name,
  size = "sm",
}: {
  photo: string;
  name: string;
  size?: "sm" | "md";
}) {
  const dim = size === "md" ? "w-10 h-10" : "w-8 h-8";
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`${dim} rounded-full overflow-hidden border-2 border-white/20 bg-gray-800 flex-shrink-0 relative ring-1 ring-white/5`}
      >
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="40px"
        />
      </div>
      <span className="text-gray-500 text-[9px] font-medium leading-none">
        {name}
      </span>
    </div>
  );
}

export function AuthoritySection() {
  return (
    <section id="autoridade" className="relative py-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/[0.03] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />

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
            Liderado por quem faz
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Autoridade &{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Legado
            </span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            Quem organiza o EstaHack não apenas ensina — compete, ganha e
            transforma.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-blue/20 rounded-3xl blur-xl" />
          <div className="relative rounded-3xl bg-gray-900/90 border border-white/10 backdrop-blur-sm overflow-hidden">
            {/* Top accent line */}
            <div className="h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />

            <div className="p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
                {/* Photo — REAL */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-xl opacity-50"
                      animate={{ opacity: [0.4, 0.7, 0.4] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-2 border-white/20 overflow-hidden bg-gray-800 ring-4 ring-neon-blue/20">
                      <Image
                        src="/foto1.jpg"
                        alt="Prof. Renan Bezerra Santos"
                        fill
                        className="object-cover object-top"
                        sizes="208px"
                        priority
                      />
                    </div>
                    {/* Role badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                      Organizador Principal
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    Renan Bezerra Santos
                  </h3>
                  <p className="text-neon-blue font-medium mb-6">
                    Professor, Desenvolvedor & CEO Rendey LLC
                  </p>

                  {/* Badges Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {badges.map((badge, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                      >
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-r ${badge.color} p-[1px] flex-shrink-0`}
                        >
                          <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                            <badge.icon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold leading-tight">
                            {badge.label}
                          </p>
                          <p className="text-gray-500 text-xs mt-0.5">
                            {badge.detail}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative p-5 rounded-xl bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 border border-white/5 mb-8">
                    <Quote className="absolute top-3 left-3 w-5 h-5 text-neon-blue/30" />
                    <p className="text-gray-300 italic text-sm sm:text-base leading-relaxed pl-6">
                      &ldquo;Minha missão é transformar a sala de aula em uma
                      incubadora de talentos, trazendo a realidade do mercado
                      global para o ensino público.&rdquo;
                    </p>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {projects.map((project, i) => (
                      <a
                        key={i}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant={i === 0 ? "default" : "outline"}
                          size="sm"
                          className="group"
                        >
                          {project.name}
                          <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hackathons Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-4">
              <Star className="w-3.5 h-3.5 text-yellow-400" />
              <span>Histórico de Competições</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Hackathons &{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Competições
              </span>
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Os organizadores competem no mais alto nível — e agora trazem esse
              conhecimento para você.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hackathons.map((hack, i) => (
              <motion.div
                key={i}
                className={`group relative p-5 rounded-2xl border transition-all duration-300 ${hack.highlight
                    ? "bg-gradient-to-b from-white/[0.05] to-white/[0.02] border-neon-blue/20 hover:border-neon-blue/50"
                    : "bg-white/[0.02] border-white/5 hover:border-white/15"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                {hack.highlight && (
                  <div className="absolute -inset-px bg-gradient-to-b from-neon-blue/10 to-neon-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top row: icon + year */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${hack.highlight
                          ? "bg-neon-blue/10 border border-neon-blue/20"
                          : "bg-white/5 border border-white/5"
                        }`}
                    >
                      <hack.icon
                        className={`w-4 h-4 ${hack.highlight ? "text-neon-blue" : "text-gray-500"
                          }`}
                      />
                    </div>
                    <span className="text-xs text-gray-600 font-mono bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      {hack.year}
                    </span>
                  </div>

                  {/* Badge */}
                  {hack.badge && (
                    <span className="inline-flex self-start mb-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400">
                      {hack.badge}
                    </span>
                  )}

                  {/* Name */}
                  <h4 className="text-white text-sm font-semibold leading-snug mb-1.5 flex-1">
                    {hack.name}
                  </h4>

                  {/* Result */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    {hack.result}
                  </p>

                  {/* Members */}
                  {hack.members && hack.members.length > 0 && (
                    <div className="pt-3 border-t border-white/5">
                      <div className="flex items-center gap-1 mb-2">
                        <Users className="w-3 h-3 text-gray-600" />
                        <span className="text-[10px] text-gray-600 font-medium uppercase tracking-wide">
                          Equipe
                        </span>
                      </div>
                      <div className="flex flex-row items-end gap-2.5 flex-wrap">
                        {hack.members.map((member, j) => (
                          <MemberAvatar
                            key={j}
                            photo={member.photo}
                            name={member.name}
                            size="sm"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
