"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Lightbulb, Globe } from "lucide-react";

const impacts = [
    {
        icon: Target,
        title: "Problema Real",
        desc: "Os alunos recebem um desafio social do bairro ou cidade, com dados reais para embasar a solução.",
        color: "text-neon-blue",
    },
    {
        icon: Lightbulb,
        title: "Solução Tecnológica",
        desc: "Usando programação, design e negócios, os times criam um MVP funcional em 36 horas.",
        color: "text-neon-purple",
    },
    {
        icon: Globe,
        title: "Impacto Comunitário",
        desc: "Os melhores projetos são apresentados para a comunidade escolar, empresas e poder público.",
        color: "text-neon-pink",
    },
];

export function ChallengeSection() {
    return (
        <section id="desafio" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.04] to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-neon-pink/5 rounded-full blur-[150px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-neon-pink text-sm font-semibold tracking-widest uppercase">
                        A Missão
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
                        O Desafio{" "}
                        <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                            Social
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                        Tecnologia a serviço da comunidade. Alunos resolvem problemas reais
                        com inovação, criatividade e muita linha de código.
                    </p>
                </motion.div>

                {/* Split layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Images collage */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple/40 to-neon-pink/40 rounded-2xl blur" />
                                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                                    <Image
                                        src="/imagem3.png"
                                        alt="Alunos desenvolvendo"
                                        width={300}
                                        height={300}
                                        className="w-full h-40 sm:h-52 object-cover"
                                    />
                                </div>
                            </div>
                            <div className="relative mt-6">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue/40 to-neon-purple/40 rounded-2xl blur" />
                                
                            </div>
                        </div>
                    </motion.div>

                    {/* Impact cards */}
                    <div className="space-y-5">
                        {impacts.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                whileHover={{ x: 4 }}
                            >
                                <div className="flex-shrink-0">
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom highlight */}
                <motion.div
                    className="relative p-6 sm:p-8 rounded-3xl overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />
                    <div className="absolute inset-0 border border-white/10 rounded-3xl" />
                    <div className="relative z-10 text-center">
                        <p className="text-xl sm:text-2xl font-bold text-white">
                            &ldquo;Aqui, todo aluno tem potencial para ser um{" "}
                            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                                inovador
                            </span>
                            .&rdquo;
                        </p>
                        <p className="text-gray-400 mt-3 text-sm">
                            Prof. Renan Bezerra — Idealizador do EstaHack
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
