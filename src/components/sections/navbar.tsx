"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Trilhas", href: "#trilhas" },
  { label: "Cronograma", href: "#cronograma" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Mentores", href: "#mentores" },
  { label: "Premiação", href: "#premiacao" },
  { label: "Organizadores", href: "#organizadores" },
  { label: "Patrocínio", href: "#patrocinadores" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#")}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center gap-2">
              {/* Logo EstaHack */}
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/logoestahack.png"
                  alt="EstaHack"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-white/10" />

              {/* Logo Nancy */}
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/logo-nancy.png"
                  alt="E.E. Nancy de Oliveira Fidalgo"
                  fill
                  className="object-contain rounded"
                  sizes="32px"
                />
              </div>
            </div>
            <div className="hidden sm:block text-left">
              <span className="font-bold text-white text-sm leading-tight block">
                EstaHack
              </span>
              <span className="text-[10px] text-gray-500 leading-tight block">
                E.E. Nancy de Oliveira Fidalgo
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick("#inscricao")}
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-lg hover:shadow-neon-blue/25 transition-all"
            >
              Inscreva-se
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-white/5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="max-w-6xl mx-auto px-4 py-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => handleNavClick("#inscricao")}
                  className="w-full mt-4 px-4 py-3 text-center font-semibold rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.2 }}
                >
                  Inscreva-se Agora
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
