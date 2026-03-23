"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "36h", label: "de Maratona" },
  { value: "3", label: "Desafios" },
  { value: "50", label: "Participantes" },
  { value: "100%", label: "Gratuito" },
];

export function SobreSection() {
  return (
    <section className="section-dark relative overflow-hidden py-20 sm:py-28">
      {/* Watermark "01" */}
      <div
        aria-hidden
        className="absolute right-0 top-0 select-none pointer-events-none font-display font-black leading-none"
        style={{ fontSize: "clamp(160px, 28vw, 400px)", opacity: 0.03, color: "#ECE8E1", lineHeight: 1 }}
      >
        01
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-start">
          {/* Coluna esquerda — manifesto */}
          <div>
            <motion.p
              className="kicker text-stone mb-5"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Sobre o EstaHack
            </motion.p>

            <div className="divider-h-dark mb-8" />

            <motion.h2
              className="font-display font-bold text-editorial leading-[1.0] mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              O primeiro hackathon<br />
              de escola estadual<br />
              <em className="text-stone not-italic">de São Paulo.</em>
            </motion.h2>

            <motion.div
              className="space-y-4 font-sans text-stone text-sm sm:text-base leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Alunos criando soluções para problemas que conhecem de perto —
                enchentes, mobilidade, saúde pública, moradia, acesso à informação.
              </p>
              <p>
                36 horas de maratona. 3 trilhas de desafio. Uma escola pública
                estadual em São Paulo como palco.
              </p>
              <p className="text-editorial/70">
                O EstaHack une tecnologia, pedagogia e impacto social
                num formato que os alunos protagonizam.
              </p>
            </motion.div>
          </div>

          {/* Coluna direita — stats + foto */}
          <div className="flex flex-col gap-8">
            {/* Stats como elementos gráficos */}
            <motion.div
              className="grid grid-cols-2 gap-px bg-editorial/10"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-void p-6 flex flex-col gap-1"
                >
                  <span
                    className="font-display font-black text-editorial leading-none"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                  >
                    {s.value}
                  </span>
                  <span className="kicker text-stone">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Foto */}
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative h-48 sm:h-56">
                <Image
                  src="/foto1.jpg"
                  alt="Organizadores do EstaHack"
                  fill
                  className="object-cover object-top"
                  sizes="400px"
                />
              </div>
              <p className="font-sans text-[10px] text-stone mt-2 uppercase tracking-widest">
                Organização · E.E. Nancy de Oliveira Fidalgo
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
