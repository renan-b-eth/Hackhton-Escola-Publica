"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BannerEventoSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Logo oficial do evento */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neon-blue text-sm font-semibold tracking-widest uppercase">
            Logo Oficial
          </span>
          <h3 className="text-2xl font-bold text-white mt-3 mb-6">
            EstaHack 2026
          </h3>
          <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10">
            <Image
              src="/logoestahack.png"
              alt="Logo Oficial EstaHack"
              width={220}
              height={220}
              className="h-44 w-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Banner do evento */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue/30 via-neon-purple/20 to-neon-pink/30 rounded-2xl blur-2xl opacity-50" />

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/bannerevento.png"
              alt="Banner do evento EstaHack"
              width={1200}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
            {/* Overlay com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
