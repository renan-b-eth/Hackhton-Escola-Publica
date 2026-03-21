"use client";

import { motion } from "framer-motion";
import { Award, Code2, Users, Leaf, Stethoscope, GraduationCap } from "lucide-react";

const pastProjects = [
  {
    name: "EndoFlow",
    area: "Saúde / IA",
    desc: "Diagnóstico precoce de endometriose usando IA e processamento de linguagem natural.",
    students: ["Renan Santos", "Lucas Feliciano", "Yuki Tanaka"],
    impact: "3º Lugar no InovaHC 2025",
    icon: Stethoscope,
    color: "from-rose-500 to-pink-600",
  },
  {
    name: "Libras Flow",
    area: "Educação / Acessibilidade",
    desc: "Plataforma de tradução em tempo real de Português para Libras usando Visão Computacional.",
    students: ["Lucas Feliciano", "Renan Santos", "Yuki Tanaka"],
    impact: "Top 10 Global Microsoft Imagine Cup",
    icon: GraduationCap,
    color: "from-neon-blue to-cyan-500",
  },
  {
    name: "EcoMonitor",
    area: "Meio Ambiente / IoT",
    desc: "Monitoramento de qualidade do ar em escolas usando sensores de baixo custo e dashboards reais.",
    students: ["Renan Santos", "Lucas Feliciano"],
    impact: "Projeto de Referência Rendey",
    icon: Leaf,
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "AssistVision",
    area: "Acessibilidade / IA",
    desc: "IA assistiva rodando em microcontroladores para auxílio de pessoas cegas.",
    students: ["Renan Santos", "Lucas Feliciano", "Yuki Tanaka"],
    impact: "Destaque Hackathon Microsoft 2026",
    icon: Code2,
    color: "from-amber-500 to-orange-600",
  },
];

export function ProjectsResultsSection() {
  return (
    <section id="resultados" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/[0.02] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header - Reference Projects */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Inspiração & Referência
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Projetos dos{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Mentores & Organizadores
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Conheça algumas das soluções desenvolvidas pelos nossos organizadores em maratonas globais. 
            Elas servem como base e inspiração para o que você pode criar no EstaHack.
          </p>
        </motion.div>

        {/* Stats - Impact of Mentors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
                { label: "Hackathons Vencidos", value: "15+" },
                { label: "Projetos de Referência", value: "20+" },
                { label: "Anos de Experiência", value: "8+" },
                { label: "IPs Registradas", value: "10+" },
            ].map((stat, i) => (
                <motion.div
                    key={i}
                    className="p-6 rounded-2xl bg-gray-900/50 border border-white/5 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                >
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</div>
                </motion.div>
            ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastProjects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
              
              <div className="relative flex-1 p-6 rounded-3xl bg-gray-900/80 border border-white/10 hover:border-white/20 transition-all flex flex-col">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-5 shadow-lg shadow-black/20`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold text-neon-blue uppercase tracking-widest bg-neon-blue/10 px-2 py-0.5 rounded-full">
                    {project.area}
                  </span>
                  <h3 className="text-white font-bold text-xl mt-2 group-hover:text-neon-blue transition-colors">
                    {project.name}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>

                <div className="space-y-4">
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-3.5 h-3.5 text-gray-500" />
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Líderes do Projeto</span>
                    </div>
                    <p className="text-gray-300 text-xs font-medium">
                      {project.students.join(", ")}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-xl border border-emerald-400/20">
                    <Award className="w-3 h-3" />
                    {project.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
            <p className="text-gray-500 text-sm mb-6 italic">
                &ldquo;Os alunos da rede pública têm o mesmo potencial que qualquer outro, só precisam da oportunidade certa.&rdquo;
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
