"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Info } from "lucide-react";

export function AuthoritySection() {
  return (
    <section id="autoridade" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/[0.02] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Notice Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-xl" />
          <div className="relative rounded-3xl bg-gray-900/90 border border-red-500/20 backdrop-blur-sm overflow-hidden">
            {/* Top accent line */}
            <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500" />

            <div className="p-8 sm:p-12">
              <div className="flex flex-col items-center text-center gap-6">
                {/* Warning Icon */}
                <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Aviso Importável
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    O organizador fundador deixou este projeto em razão de
                    divergências com a organização e de princípios relacionados à
                    educação pública.
                  </p>
                </div>

                <div className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-500 text-sm text-left">
                      O <strong>EstaHack</strong> continuará como uma iniciativa
                      independente, sem vínculo com instituições educacionais
                      específicas ou parcerias comerciais anteriores. Novas
                      escolas serão anunciadas em breve.
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm">
                  Para mais informações, entre em contato através dos canais
                  oficiais.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
