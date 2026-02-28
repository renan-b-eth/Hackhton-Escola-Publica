"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const team = [
    {
        name: "Renan Bezerra",
        role: "Professor de IA & Empreendedor",
        bio: "Professor da rede estadual paulista, desenvolvedor Full Stack e CEO da Rendey LLC (New Mexico, USA). Combina experiência pedagógica com expertise em IA, empreendedorismo e hackathons internacionais — incluindo o Hackathon Microsoft 2026.",
        skills: ["Inteligência Artificial", "Full Stack Dev", "EdTech", "Empreendedorismo"],
        photo: "/foto1.jpg",
        gradient: "from-neon-blue to-neon-purple",
        linkedin: "https://linkedin.com/in/renan-bezerra",
        highlight: "🏆 Hackathon Microsoft 2026",
    },
    {
        name: "Lucas Feliciano",
        role: "Dev Full Stack & Pesquisador em IA",
        bio: "Estudante de Engenharia de Software na FIAP (2º ano), full stack developer e pesquisador em Visão Computacional no projeto Libras Flow — app de tradução de Libras em tempo real. Estagiou na plataforma de ativos verdes Bolsa Verde Maré.",
        skills: ["Java", "TypeScript", "Python", "Visão Computacional"],
        photo: "/foto2.png",
        gradient: "from-neon-purple to-pink-500",
        linkedin: "https://linkedin.com/in/lucas-feliciano-software",
        highlight: "🥇 1º Lugar ElevenLabs Hackathon 2025",
    },
    {
        name: "Yuki Tanaka",
        role: "Product Manager & Hackathon Champion",
        bio: "PM/PO certificada PSPO I pela Scrum.org, especializada em produtos digitais com IA, CRM e omnichannel. TOEFL & IELTS certificada. Participante ativa de 12+ hackathons nacionais e internacionais com soluções premiadas.",
        skills: ["Product Management", "Scrum PSPO I", "AI Products", "Inglês Fluente"],
        photo: "/foto3.png",
        gradient: "from-emerald-400 to-teal-500",
        linkedin: "https://linkedin.com/",
        highlight: "🥇 1º Lugar ElevenLabs Hackathon 2025",
    },
];

export function TeamSection() {
    return (
        <section id="organizadores" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.04] to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-neon-blue/[0.03] rounded-full blur-[200px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
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
                        Organizadores &{" "}
                        <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                            Idealizadores
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                        Um time multidisciplinar de educadores, desenvolvedores e gestores de
                        produto, unidos pelo propósito de democratizar a inovação na escola pública.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                        >
                            {/* Glow border on hover */}
                            <div
                                className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                            />

                            <div className="relative h-full p-6 rounded-3xl bg-gray-900/80 border border-white/5 group-hover:border-white/15 transition-all duration-300 flex flex-col">
                                {/* Photo */}
                                <div className="relative mb-5 flex-shrink-0">
                                    <div
                                        className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity`}
                                    />
                                    <div className="relative w-full aspect-square max-w-[180px] mx-auto rounded-2xl overflow-hidden border border-white/10">
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top"
                                            sizes="(max-width: 768px) 50vw, 200px"
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-xl mb-0.5">
                                        {member.name}
                                    </h3>
                                    <p
                                        className={`text-sm font-medium mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                                    >
                                        {member.role}
                                    </p>

                                    {/* Highlight badge */}
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-4">
                                        {member.highlight}
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                        {member.bio}
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {member.skills.map((skill, j) => (
                                            <span
                                                key={j}
                                                className="px-2.5 py-1 rounded-full text-xs bg-white/[0.05] border border-white/10 text-gray-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all text-sm text-gray-400 hover:text-white group/link"
                                >
                                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                                    <span>Ver LinkedIn</span>
                                    <span className="ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity text-xs">
                                        →
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
