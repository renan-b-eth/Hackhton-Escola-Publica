"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Flag,
  GraduationCap,
  Brain,
  ExternalLink,
  Quote,
} from "lucide-react";

const badges = [
  {
    icon: Trophy,
    label: "Vencedor Hackathon Microsoft",
    detail: "Projeto de Tecnologia Assistiva",
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
    label: "Criador do NeuroVox e Rendey Class",
    detail: "IA aplicada à Educação",
    color: "from-emerald-400 to-teal-500",
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
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-md opacity-60" />
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-white/10 overflow-hidden flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                          <GraduationCap className="w-10 h-10 text-neon-blue" />
                        </div>
                        <p className="text-white font-bold text-sm">Prof. Renan</p>
                      </div>
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
      </div>
    </section>
  );
}
