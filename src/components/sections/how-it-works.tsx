"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        step: "01",
        title: "Briefing do Desafio",
        description:
            "Os times recebem o tema social do evento e um pacote de dados reais para embasar suas soluções. Começa a ideação!",
        color: "from-neon-blue to-cyan-400",
    },
    {
        step: "02",
        title: "36h de Hackathon",
        description:
            "Maratona intensiva de criação: design, código, pitch e prototipagem. Mentores do mercado guiam os times em tempo real.",
        color: "from-neon-purple to-pink-400",
    },
    {
        step: "03",
        title: "Demo Day & Premiação",
        description:
            "Os projetos são apresentados para uma banca de especialistas. Os melhores times conquistam prêmios e reconhecimento.",
        color: "from-emerald-400 to-teal-500",
    },
];

export function HowItWorksSection() {
    return (
        <section id="como-funciona" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/[0.04] to-transparent" />

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
                        O Formato
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
                        Como vai{" "}
                        <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                            Funcionar
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                        Um formato comprovado inspirado nos maiores hackathons do mundo,
                        adaptado para a realidade e executado <span className="text-white font-semibold">dentro da escola</span> como projeto Pré-TCC.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Steps */}
                    <div className="space-y-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="group relative flex gap-5"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                            >
                                {/* Step indicator */}
                                <div className="flex-shrink-0">
                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} p-[1px]`}
                                    >
                                        <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                                            <span className="text-white font-bold text-sm font-mono">
                                                {step.step}
                                            </span>
                                        </div>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className="w-px h-6 bg-gradient-to-b from-white/10 to-transparent mx-auto mt-2" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="pt-1 pb-4">
                                    <h3 className="text-white font-bold text-lg mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-3xl blur-xl" />
                        <div className="relative rounded-3xl overflow-hidden border border-white/10">
                            <Image
                                src="/imagem-alunos.jpg"
                                alt="Alunos construindo soluções reais"
                                width={600}
                                height={400}
                                className="w-full h-64 sm:h-80 object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <p className="text-white font-bold text-sm">
                                    Alunos construindo soluções reais
                                </p>
                                <p className="text-gray-300 text-xs mt-1">
                                    Projeto Pré-TCC · E.E. Nancy de Oliveira Fidalgo · EstaHack 2026
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
