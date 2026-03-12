"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, Star } from "lucide-react";
import Image from "next/image";

export function EscolaPionheiraSection() {
  return (
    <section id="escola-pioneira" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
            A Instituição
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Escola
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> Pioneira</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            O primeiro hackathon do Brasil realizado dentro de uma escola estadual.
          </p>
        </motion.div>

        {/* School Card */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Logo */}
              <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl bg-white p-6 flex items-center justify-center">
                <Image
                  src="/logo-nancy.png"
                  alt="E.E. Nancy de Oliveira Fidalgo"
                  width={180}
                  height={180}
                  className="object-contain max-w-full max-h-full"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-3">
                  <Sparkles className="w-6 h-6 text-emerald-400 fill-emerald-400" />
                  <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">
                    Escola Anfitriã
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  E.E. Nancy de Oliveira Fidalgo
                </h3>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-2xl">
                  Uma escola estadual comprometida com a excelência educacional e inovação.
                  E.E. Nancy de Oliveira Fidalgo abre suas portas para o EstaHack 2025,
                  trazendo oportunidades de aprendizado prático e desenvolvimento de competências
                  tecnológicas para seus alunos.
                </p>

                {/* Address */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-emerald-500/20 flex-1">
                    <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Localização</p>
                      <p className="text-white font-semibold">São Paulo - SP</p>
                      <p className="text-gray-400 text-xs mt-1">Zona Leste</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-emerald-500/20 flex-1">
                    <Star className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Status</p>
                      <p className="text-white font-semibold">Rede Estadual</p>
                      <p className="text-gray-400 text-xs mt-1">Educação Pública</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/E.E.+Nancy+de+Oliveira+Fidalgo+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                >
                  Ver Localização no Mapa
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
