"use client";

import { Instagram, Linkedin } from "lucide-react";

const links = {
  projects: [
    { label: "Site Oficial", href: "#" },
  ],
  social: [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/estahack_/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};

export function FooterSection() {
  return (
    <footer className="section-dark border-t border-editorial/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-editorial text-base mb-1">EstaHack</p>
            <p className="font-sans text-[10px] uppercase tracking-widest text-stone mb-4">
              Hackathon · Escola Pública · São Paulo
            </p>
            <p className="font-sans text-xs text-stone leading-relaxed max-w-xs">
              Transformando a educação pública brasileira através da tecnologia,
              da inovação e do protagonismo dos alunos.
            </p>
          </div>

          {/* Iniciativas */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone mb-4">
              Iniciativas
            </p>
            <ul className="space-y-2.5">
              {links.projects.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs text-stone hover:text-editorial transition-colors"
                  >
                    {l.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone mb-4">
              Redes Sociais
            </p>
            <div className="flex gap-3">
              {links.social.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-editorial/15 flex items-center justify-center text-stone hover:text-editorial hover:border-editorial/40 transition-colors"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-editorial/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-[10px] text-stone/60">
            © {new Date().getFullYear()} EstaHack — Todos os direitos reservados.
          </p>
          <p className="font-sans text-[10px] text-stone/60">
            Feito para a educação pública.
          </p>
        </div>
      </div>
    </footer>
  );
}
