"use client";

import { motion } from "framer-motion";
import { Linkedin, Award, Briefcase, GraduationCap, Brain, Database, Shield } from "lucide-react";
import Image from "next/image";

const mentores = [
  {
    nome: "Dra. Mariana Costa",
    cargo: "Especialista em IA & Educação",
    empresa: "Google for Education · USP",
    bio: "PhD em Inteligência Artificial aplicada à Educação pela USP. Liderou projetos de machine learning para personalização do aprendizado em escolas públicas de 5 estados brasileiros. Autora de 12 artigos científicos sobre EdTech.",
    especialidades: ["Machine Learning", "NLP", "EdTech", "Pesquisa Acadêmica"],
    icone: Brain,
    cor: "from-neon-blue to-cyan-400",
    linkedin: "https://linkedin.com/in/",
    foto: "/foto1.jpg",
  },
  {
    nome: "Prof. Ricardo Almeida",
    cargo: "Professor de Tecnologia & Desenvolvedor",
    empresa: "E.E. Prof. Carlos de Campos · FIAP",
    bio: "Professor de Desenvolvimento de Sistemas na rede estadual há 15 anos e instrutor convidado na FIAP. Especialista em transformar conceitos complexos de programação em projetos práticos para alunos do ensino médio técnico.",
    especialidades: ["Full Stack", "React", "Node.js", "Metodologias Ativas"],
    icone: GraduationCap,
    cor: "from-neon-purple to-pink-400",
    linkedin: "https://linkedin.com/in/",
    foto: "/foto2.png",
  },
  {
    nome: "Eng. Juliana Ribeiro",
    cargo: "Tech Lead & Dados",
    empresa: "Nubank · Ex-Microsoft",
    bio: "Engenheira de Software com 10 anos de experiência em grandes techs. Atualmente Tech Lead no Nubank, focada em arquitetura de dados e sistemas distribuídos. Voluntária em programas de inclusão digital para jovens de periferia.",
    especialidades: ["Arquitetura de Dados", "Python", "Cloud", "Mentoria"],
    icone: Database,
    cor: "from-emerald-400 to-teal-400",
    linkedin: "https://linkedin.com/in/",
    foto: "/foto3.png",
  },
  {
    nome: "Dr. Paulo Henrique Santos",
    cargo: "Especialista em Acessibilidade Digital",
    empresa: "CESAR · W3C Brasil",
    bio: "Pesquisador em tecnologias assistivas e acessibilidade digital. Consultor do W3C Brasil e desenvolvedor de soluções para pessoas com deficiência. Coordenou projetos de inclusão digital que impactaram mais de 50 mil pessoas.",
    especialidades: ["Acessibilidade", "WCAG", "IoT Assistivo", "Computer Vision"],
    icone: Shield,
    cor: "from-amber-400 to-orange-400",
    linkedin: "https://linkedin.com/in/",
    foto: "/foto1.jpg",
  },
];

const jurados = [
  {
    nome: "Dra. Mariana Costa",
    cargo: "Especialista em IA & Educação",
    empresa: "Google for Education",
  },
  {
    nome: "Prof. Dr. Antônio Ferreira",
    cargo: "Diretor Acadêmico",
    empresa: "FIAP",
  },
  {
    nome: "Eng. Juliana Ribeiro",
    cargo: "Tech Lead",
    empresa: "Nubank",
  },
  {
    nome: "Dra. Camila Oliveira",
    cargo: "Coordenadora de Inovação",
    empresa: "SEDUC-SP",
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
            Profissionais de destaque do mercado e da academia que vão orientar
            e avaliar os projetos dos times.
          </p>
        </motion.div>

        {/* Mentores Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {mentores.map((mentor, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {/* Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${mentor.cor} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative p-6 rounded-2xl bg-gray-900/60 border border-white/5 group-hover:border-white/15 transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-5">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-r ${mentor.cor} p-[1px]`}>
                      <div className="w-full h-full rounded-2xl bg-gray-900 overflow-hidden flex items-center justify-center">
                        <Image
                          src={mentor.foto}
                          alt={mentor.nome}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{mentor.nome}</h3>
                        <p className="text-sm text-gray-400 mt-0.5">{mentor.cargo}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{mentor.empresa}</p>
                      </div>
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all"
                      >
                        <Linkedin className="w-4 h-4 text-gray-400 hover:text-[#0A66C2]" />
                      </a>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed mt-3">
                      {mentor.bio}
                    </p>

                    {/* Especialidades */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {mentor.especialidades.map((esp, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-400"
                        >
                          {esp}
                        </span>
                      ))}
                    </div>
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
              Especialistas que irão avaliar os projetos no Demo Day com base nos critérios de inovação,
              viabilidade técnica, impacto social e qualidade da apresentação.
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
