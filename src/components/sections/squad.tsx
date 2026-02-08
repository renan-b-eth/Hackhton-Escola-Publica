"use client";

import { motion } from "framer-motion";
import { Linkedin, Users, Code, Handshake, BookOpen } from "lucide-react";

const members = [
  {
    name: "Renan Santos",
    role: "Lead Organizer & Tech",
    icon: Code,
    linkedin: "https://linkedin.com/",
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    name: "Parceiro 1",
    role: "Coordenador Pedagógico",
    icon: BookOpen,
    linkedin: "https://linkedin.com/",
    gradient: "from-neon-purple to-pink-500",
  },
  {
    name: "Parceiro 2",
    role: "Head de Parcerias",
    icon: Handshake,
    linkedin: "https://linkedin.com/",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    name: "Parceiro 3",
    role: "Mentor Técnico",
    icon: Users,
    linkedin: "https://linkedin.com/",
    gradient: "from-amber-400 to-orange-500",
  },
];

export function SquadSection() {
  return (
    <section id="squad" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.03] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neon-purple text-sm font-semibold tracking-widest uppercase">
            O Squad
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Quem está{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Construindo
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Um time multidisciplinar unido pelo propósito de democratizar a
            inovação na educação pública.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {members.map((member, i) => (
            <motion.a
              key={i}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
              />
              <div className="relative h-full p-5 sm:p-6 rounded-2xl bg-gray-900/80 border border-white/5 group-hover:border-white/15 transition-all duration-300 flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-4">
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r ${member.gradient} p-[2px]`}
                  >
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <member.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* LinkedIn badge on hover */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <Linkedin className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-white font-bold text-sm sm:text-base mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-tight">
                  {member.role}
                </p>

                {/* Hover hint */}
                <div className="mt-3 text-xs text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver LinkedIn →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
