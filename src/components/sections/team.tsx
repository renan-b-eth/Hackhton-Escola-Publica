"use client";

import { motion } from "framer-motion";
import {
    Linkedin,
    Trophy,
    Medal,
    Rocket,
    Globe,
    Stethoscope,
    Cpu,
    Building2,
    ExternalLink,
    Mic2,
    Leaf,
    ShieldCheck,
    Zap,
    BarChart3,
    Coins,
    HeartPulse,
} from "lucide-react";
import Image from "next/image";

type HackItem = {
    icon: React.ElementType;
    name: string;
    year: string;
    badge?: string;
};

type TeamMember = {
    name: string;
    role: string;
    bio: string;
    skills: string[];
    photo: string;
    gradient: string;
    linkedin: string;
    highlight: string;
    hackathons: HackItem[];
};

const team: TeamMember[] = [
    {
        name: "Lucas Feliciano",
        role: "O Idealizador",
        bio: "Estudante de Engenharia de Software na FIAP, full stack developer e pesquisador em Visão Computacional (Projeto Libras Flow). Responsável pela ideia visionária de conectar o ensino médio público ao ecossistema global de inovação.",
        skills: ["Java", "TypeScript", "Python", "Cloud Computing", "Computer Vision"],
        photo: "/foto2.png",
        gradient: "from-neon-purple to-pink-500",
        linkedin: "https://linkedin.com/in/lucas-feliciano-software",
        highlight: "💡 Visionário do Projeto",
        hackathons: [
            { icon: Mic2, name: "Hackathon ElevenLabs", year: "2025", badge: "🥇 1º" },
            { icon: Trophy, name: "Hackathon Microsoft ImagineCups", year: "2026", badge: "🏆" },
            { icon: Stethoscope, name: "II Hackathon Saúde — InovaHC", year: "2025", badge: "🥉 3º" },
            { icon: Building2, name: "Hackathon FIAP & Tech Mahindra", year: "2024", badge: "🥈 2º" },
            { icon: Rocket, name: "Hackathon Dev de Impacto", year: "2025", badge: "🥉 3º" },
            { icon: Globe, name: "NASA Space Apps Challenge", year: "2024/25" },
            { icon: Building2, name: "Hackathon Itaú (Cubo Itaú)", year: "2024/25" },
            { icon: Cpu, name: "ICTi — BOOM Break Our Model", year: "2025" },
        ],
    },
    {
        name: "Renan Bezerra",
        role: "Execução & Estratégia",
        bio: "Professor da rede pública, desenvolvedor full-stack e CEO da Rendey LLC (New Mexico, USA). Combina expertise pedagógica com tecnologia de ponta para viabilizar projetos de impacto no ensino técnico.",
        skills: ["Inteligência Artificial", "Full Stack Dev", "EdTech", "Empreendedorismo"],
        photo: "/foto1.jpg",
        gradient: "from-neon-blue to-neon-purple",
        linkedin: "https://www.linkedin.com/in/renan-b-eth/",
        highlight: "⚙️ Estratégia e Tecnologia",
        hackathons: [
            { icon: Trophy, name: "Hackathon Microsoft ImagineCups", year: "2026", badge: "🏆" },
            { icon: Stethoscope, name: "II Hackathon Saúde — InovaHC", year: "2025", badge: "🥉 3º" },
            { icon: Rocket, name: "MIT Hacking Medicine", year: "2025" },
            { icon: Globe, name: "NASA Space Apps Challenge", year: "2024/25" },
            { icon: Building2, name: "Hackathon Itaú (Cubo Itaú)", year: "2024/25" },
            { icon: Cpu, name: "ICTi — BOOM Break Our Model", year: "2025" },
            { icon: Medal, name: "Maratona Informática CPS", year: "2017", badge: "🥈 2º" },
        ],
    },
    {
        name: "Yuki Tanaka",
        role: "Produto & Gestão",
        bio: "Product Manager certificada PSPO I pela Scrum.org. Inglês fluente (TOEFL/IELTS - Cambridge). Traz sua vasta experiência em hackathons internacionais e gestão ágil para garantir a entrega e o sucesso dos participantes.",
        skills: ["Product Management", "Scrum PSPO I", "AI Products", "Inglês Fluente (TOEFL/IELTS)"],
        photo: "/foto3.png",
        gradient: "from-emerald-400 to-teal-500",
        linkedin: "https://www.linkedin.com/in/yt-yukitanaka/",
        highlight: "🚀 Gestão de Produto",
        hackathons: [
            { icon: Mic2, name: "Hackathon ElevenLabs", year: "2025", badge: "🥇 1º" },
            { icon: Trophy, name: "Hackathon Microsoft ImagineCups", year: "2026", badge: "🏆" },
            { icon: Stethoscope, name: "II Hackathon Saúde — InovaHC", year: "2025", badge: "🥉 3º" },
            { icon: Coins, name: "Hackathon XP Inc. & Poli-USP", year: "2025", badge: "Top 8" },
            { icon: HeartPulse, name: "Hackathon Vercel — IA Saúde", year: "2026" },
            { icon: Zap, name: "Hackathon Energisa", year: "2026" },
            { icon: ShieldCheck, name: "Hackathon Devs de Impacto (RJ)", year: "2026" },
            { icon: Cpu, name: "Hackathon Devs de Impacto (Online)", year: "2026" },
            { icon: Leaf, name: "Hackathon Devs de Impacto (Curitiba)", year: "2026" },
            { icon: Globe, name: "NASA Space Apps Challenge", year: "2024" },
            { icon: Leaf, name: "Hackathon UNESP — Meio Ambiente", year: "2024" },
            { icon: BarChart3, name: "Hackathon Governo do Ceará", year: "2024/25" },
            { icon: Rocket, name: "MIT Hacking Medicine", year: "2026" },
            { icon: Cpu, name: "ICTi — BOOM Break Our Model", year: "2026" },
        ],
    },
];

export function TeamSection() {
    return (
        <section id="organizadores" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.04] to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-neon-blue/[0.03] rounded-full blur-[220px]" />

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
                        Quem organiza o EstaHack{" "}
                        <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                            compete no nível mais alto
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                        Tudo começou com uma ideia visionária do Lucas, que ganhou vida com a execução de Renan e Yuki — juntos,
                        acumulam mais de{" "}
                        <span className="text-white font-semibold">25 hackathons</span> e{" "}
                        <span className="text-white font-semibold">múltiplos prêmios internacionais</span>.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            className="group relative flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                        >
                            {/* Glow border on hover */}
                            <div
                                className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-3xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
                            />

                            <div className="relative flex-1 flex flex-col rounded-3xl bg-gray-900/80 border border-white/5 group-hover:border-white/15 transition-all duration-300 overflow-hidden">
                                {/* Gradient top accent */}
                                <div className={`h-1 bg-gradient-to-r ${member.gradient}`} />

                                <div className="p-6 flex flex-col flex-1">
                                    {/* Photo */}
                                    <div className="relative mb-5 flex-shrink-0">
                                        <div
                                            className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-2xl blur-sm opacity-40 group-hover:opacity-60 transition-opacity`}
                                        />
                                        <div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-2xl overflow-hidden border border-white/10">
                                            <Image
                                                src={member.photo}
                                                alt={member.name}
                                                fill
                                                className="object-cover object-top"
                                                sizes="(max-width: 768px) 50vw, 220px"
                                            />
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-white font-bold text-xl mb-0.5">
                                            {member.name}
                                        </h3>
                                        <p
                                            className={`text-sm font-medium mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                                        >
                                            {member.role}
                                        </p>

                                        {/* Highlight badge */}
                                        <div className="inline-flex self-start items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-4">
                                            {member.highlight}
                                        </div>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
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

                                        {/* Hackathons by this member */}
                                        <div className="mt-auto">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                                    Hackathons ({member.hackathons.length})
                                                </span>
                                            </div>

                                            {/* Scrollable list for members with many hackathons */}
                                            <div
                                                className={`flex flex-col gap-1.5 mb-5 ${member.hackathons.length > 7
                                                        ? "max-h-[320px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                                                        : ""
                                                    }`}
                                            >
                                                {member.hackathons.map((hack, j) => (
                                                    <motion.div
                                                        key={j}
                                                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors flex-shrink-0"
                                                        initial={{ opacity: 0, x: -8 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.3 + j * 0.04, duration: 0.3 }}
                                                    >
                                                        <hack.icon className="w-3 h-3 text-gray-500 flex-shrink-0" />
                                                        <span className="text-gray-400 text-xs flex-1 leading-tight">
                                                            {hack.name}
                                                        </span>
                                                        <div className="flex items-center gap-1.5 flex-shrink-0">
                                                            {hack.badge && (
                                                                <span className="text-[10px] font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                                                                    {hack.badge}
                                                                </span>
                                                            )}
                                                            <span className="text-[10px] text-gray-600 font-mono">
                                                                {hack.year}
                                                            </span>
                                                        </div>
                                                    </motion.div>
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
                                            <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
