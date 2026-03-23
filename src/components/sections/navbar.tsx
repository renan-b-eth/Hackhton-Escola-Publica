"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Desafios", href: "#trilhas" },
  { label: "Cronograma", href: "#cronograma" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Mentores", href: "#mentores" },
  { label: "Premiação", href: "#premiacao" },
  { label: "Patrocínio", href: "#patrocinadores" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-editorial border-b border-hairline"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between h-14">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#")}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-7 h-7 flex-shrink-0">
              <Image
                src="/logoestahack.png"
                alt="EstaHack"
                fill
                className="object-contain"
                sizes="28px"
              />
            </div>
            <div className="text-left">
              <span className="font-display font-bold text-ink text-sm leading-none block">
                EstaHack
              </span>
              <span className="font-sans text-[9px] text-stone uppercase tracking-widest leading-none block mt-0.5">
                E.E. Nancy · São Paulo
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-[10px] uppercase tracking-[0.18em] text-stone hover:text-ink transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#patrocinadores")}
              className="font-sans text-[10px] uppercase tracking-[0.18em] text-stone hover:text-ink transition-colors"
            >
              Apoiar
            </button>
            <button
              onClick={() => handleNavClick("#inscricao")}
              className="bg-rouge text-white font-sans text-[10px] uppercase tracking-[0.18em] font-semibold px-4 py-2.5 hover:bg-rouge-deep transition-colors"
            >
              Inscreva-se
            </button>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Menu"
          >
            <span
              className={`block h-px w-5 bg-ink transition-all duration-200 ${
                mobileOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-all duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/60"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-14 left-0 right-0 bg-editorial border-b border-hairline">
            <div className="max-w-6xl mx-auto px-5 py-8 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-3 font-sans text-xs uppercase tracking-[0.2em] text-stone hover:text-ink border-b border-hairline transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-6 flex flex-col gap-3">
                <button
                  onClick={() => handleNavClick("#inscricao")}
                  className="w-full bg-rouge text-white font-sans text-xs uppercase tracking-[0.18em] font-semibold py-4 hover:bg-rouge-deep transition-colors"
                >
                  Inscreva-se
                </button>
                <button
                  onClick={() => handleNavClick("#patrocinadores")}
                  className="w-full border border-ink text-ink font-sans text-xs uppercase tracking-[0.18em] font-semibold py-4 hover:bg-ink hover:text-editorial transition-colors"
                >
                  Apoiar o EstaHack
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
