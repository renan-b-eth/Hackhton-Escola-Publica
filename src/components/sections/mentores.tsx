"use client";

import { motion } from "framer-motion";
import { Linkedin, Award, Briefcase, Rocket, Globe, Building2, Cpu, Stethoscope, Mic2, Medal, Zap, BarChart3, Coins, HeartPulse, Leaf, ShieldCheck, Trophy } from "lucide-react";
import Image from "next/image";

type HackItem = {
  icon: React.ElementType;
  name: string;
  year: string;
  badge?: string;
};

type Mentor = {
  nome: string;
  cargo: string;
  empresa: string;
  bio: string;
  especialidades: string[];
  foto: string;
  cor: string;
  linkedin: string;
  hackathons: HackItem[];
};

const mentores: Mentor[] = [
  {
    nome: "Lucas Feliciano",
    cargo: "O Idealizador · Mentor Técnico",
    empresa: "FIAP · Engenharia de Software",
    bio: "Estudante de Engenharia de Software na FIAP, full stack developer e pesquisador em Visão Computacional (Projeto Libras Flow). Responsável pela ideia visionária de conectar o ensino médio público ao ecossistema global de inovação.",
    especialidades: ["Java", "TypeScript", "Python", "Cloud Computing", "Computer Vision"],
    foto: "/foto2.png",
    cor: "from-neon-purple to-pink-500",
    linkedin: "https://linkedin.com/in/lucas-feliciano-software",
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
    nome: "Renan Bezerra",
    cargo: "Execução & Estratégia · Mentor de Negócios",
    empresa: "Rendey LLC (New Mexico, USA) · E.E. Nancy",
    bio: "Professor da rede pública, desenvolvedor full-stack e CEO da Rendey LLC (New Mexico, USA). Combina expertise pedagógica com tecnologia de ponta para viabilizar projetos de impacto no ensino técnico.",
    especialidades: ["Inteligência Artificial", "Full Stack Dev", "EdTech", "Empreendedorismo"],
    foto: "/foto1.jpg",
    cor: "from-neon-blue to-neon-purple",
    linkedin: "https://www.linkedin.com/in/renan-b-eth/",
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
    nome: "Yuki Tanaka",
    cargo: "Produto & Gestão · Mentora de Produto",
    empresa: "Scrum.org PSPO I · Cambridge (TOEFL/IELTS)",
    bio: "Product Manager certificada PSPO I pela Scrum.org. Inglês fluente (TOEFL/IELTS - Cambridge). Traz sua vasta experiência em hackathons internacionais e gestão ágil para garantir a entrega e o sucesso dos participantes.",
    especialidades: ["Product Management", "Scrum PSPO I", "AI Products", "Inglês Fluente (TOEFL/IELTS)"],
    foto: "/foto3.png",
    cor: "from-emerald-400 to-teal-500",
    linkedin: "https://www.linkedin.com/in/yt-yukitanaka/",
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

const jurados = [
  {
    nome: "Representante FIAP",
    cargo: "Diretoria Acadêmica",
    empresa: "FIAP",
  },
  {
    nome: "Representante Estant3D",
    cargo: "Inovação & Tecnologia",
    empresa: "Estant3D",
  },
  {
    nome: "Representante Rendey LLC",
    cargo: "CEO & Fundador",
    empresa: "Rendey LLC (New Mexico, USA)",
  },
  {
    nome: "Representante SEDUC-SP",
    cargo: "Coordenação de Inovação",
    empresa: "Secretaria de Educação de SP",
  },
];

export function MentoresSection() {
  return (
    <section id="mentores" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/[0.03] to-transparent" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[160px]" />

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
            Quem Vai Te Guiar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Mentores &{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Jurados
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Os organizadores do EstaHack acumulam mais de{" "}
            <span className="text-white font-semibold">25 hackathons</span> e{" "}
            <span className="text-white font-semibold">múltiplos prêmios internacionais</span>.
            Eles serão seus mentores durante a maratona.
          </p>
        </motion.div>

        {/* Mentores Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {mentores.map((mentor, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              {/* Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${mentor.cor} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative p-6 rounded-2xl bg-gray-900/60 border border-white/5 group-hover:border-white/15 transition-all duration-300 h-full flex flex-col">
                {/* Avatar & Info */}
                <div className="flex flex-col items-center text-center mb-4">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${mentor.cor} p-[1px] mb-4`}>
                    <div className="w-full h-full rounded-2xl bg-gray-900 overflow-hidden">
                      <Image
                        src={mentor.foto}
                        alt={mentor.nome}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">{mentor.nome}</h3>
                  <p className="text-sm text-gray-400 mt-0.5">{mentor.cargo}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{mentor.empresa}</p>
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-400 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4 text-center">
                  {mentor.bio}
                </p>

                {/* Especialidades */}
                <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                  {mentor.especialidades.map((esp, j) => (
                    <span
                      key={j}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-gray-400"
                    >
                      {esp}
                    </span>
                  ))}
                </div>

                {/* Hackathons */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-2 justify-center">
                    <Trophy className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                      {mentor.hackathons.length} Hackathons
                    </span>
                  </div>
                  <div className="space-y-1">
                    {mentor.hackathons.slice(0, 4).map((hack, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <hack.icon className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{hack.name}</span>
                        {hack.badge && (
                          <span className="ml-auto flex-shrink-0 text-[10px]">{hack.badge}</span>
                        )}
                      </div>
                    ))}
                    {mentor.hackathons.length > 4 && (
                      <p className="text-[10px] text-gray-600 text-center">
                        +{mentor.hackathons.length - 4} outros
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Jurados */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/15 to-neon-purple/15 rounded-3xl blur-xl" />
          <div className="relative p-8 rounded-3xl bg-gray-900/80 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-neon-blue" />
              <h3 className="text-2xl font-bold text-white">Banca Avaliadora</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Representantes dos parceiros institucionais que irão avaliar os projetos no Demo Day
              com base nos critérios de inovação, viabilidade técnica, impacto social e qualidade da apresentação.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {jurados.map((jurado, i) => (
                <motion.div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 flex items-center justify-center border border-white/10">
                      <Briefcase className="w-4 h-4 text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{jurado.nome}</p>
                      <p className="text-gray-500 text-xs">{jurado.cargo}</p>
                      <p className="text-gray-600 text-xs">{jurado.empresa}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
