"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Instagram,
  Linkedin,
  ExternalLink,
  Heart,
} from "lucide-react";

const links = {
  projects: [
    {
      label: "Rendey Class",
      href: "https://rendey-class-front.vercel.app/",
    },
    {
      label: "Rendey LLC",
      href: "https://rendey.store",
    },
    {
      label: "Site Pessoal (Renan Santos)",
      href: "https://site-renanbezerra.vercel.app/",
    },
  ],
  social: [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/",
    },
  ],
};

export function FooterSection() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo-nancy.png"
                  alt="Logo E.E. Nancy"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div className="text-left">
                <span className="font-bold text-white text-base leading-tight block">
                  EstaHack
                </span>
                <span className="text-xs text-gray-500 leading-tight block">
                  E.E. Nancy de Oliveira Fidalgo
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando a educação pública brasileira através da tecnologia,
              inovação e colaboração direta com a comunidade escolar.
            </p>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-semibold mb-4">Iniciativas Integradas</h4>
            <ul className="space-y-3">
              {links.projects.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-blue transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {links.social.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center hover:border-neon-blue/50 hover:bg-neon-blue/10 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-neon-blue transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} EstaHack / E.E. Nancy de Oliveira Fidalgo — Todos os direitos
            reservados.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Feito com{" "}
            <Heart className="w-3.5 h-3.5 text-neon-pink fill-neon-pink" />{" "}
            para a educação pública
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
