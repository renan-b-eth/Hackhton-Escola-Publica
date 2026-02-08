"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, Code, Globe } from "lucide-react";

export function OrganizerSection() {
  return (
    <section id="organizador" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neon-purple text-sm font-semibold tracking-widest uppercase">
            Quem Faz Acontecer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Liderança com{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Propósito
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Photo placeholder with glow effect */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur-lg opacity-50" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 overflow-hidden flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 flex items-center justify-center border border-white/10">
                  <GraduationCap className="w-12 h-12 text-neon-blue" />
                </div>
                <p className="text-white font-bold text-lg">Prof. Renan</p>
                <p className="text-gray-400 text-sm">Bezerra Santos</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Prof. Renan Bezerra Santos
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Uma iniciativa liderada por quem vive a sala de aula e respira
              tecnologia. Professor da rede pública estadual, desenvolvedor
              full-stack e empreendedor, Renan combina experiência pedagógica
              com expertise em tecnologia para transformar a educação pública
              brasileira.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {[
                { icon: GraduationCap, label: "Educador" },
                { icon: Code, label: "Desenvolvedor" },
                { icon: Globe, label: "Empreendedor" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300"
                >
                  <item.icon className="w-4 h-4 text-neon-blue" />
                  {item.label}
                </div>
              ))}
            </div>

            <a
              href="https://site-renanbezerra.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="group">
                Conheça o Organizador
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
