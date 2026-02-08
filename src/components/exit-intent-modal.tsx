"use client";

import { useState, useEffect, useCallback } from "react";
import { useFormState } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileDown, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { captureLeadAction, type LeadState } from "@/app/actions/capture-lead";

const initialState: LeadState = {
  success: false,
  message: "",
};

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [state, formAction] = useFormState(captureLeadAction, initialState);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed && !open) {
        setOpen(true);
      }
    },
    [dismissed, open]
  );

  useEffect(() => {
    const alreadyShown = localStorage.getItem("exit-modal-shown");
    if (alreadyShown) {
      setDismissed(true);
      return;
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const handleClose = () => {
    setOpen(false);
    setDismissed(true);
    localStorage.setItem("exit-modal-shown", "true");
  };

  useEffect(() => {
    if (state.success) {
      localStorage.setItem("exit-modal-shown", "true");
      const timer = setTimeout(() => {
        setOpen(false);
        setDismissed(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [state.success]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl bg-gray-900 border border-white/10 overflow-hidden">
              {/* Top gradient bar */}
              <div className="h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all z-10"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                {state.success ? (
                  <motion.div
                    className="text-center py-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {state.message}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Fique de olho no seu WhatsApp.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Icon */}
                    <div className="flex justify-center mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-white/10 flex items-center justify-center">
                        <FileDown className="w-7 h-7 text-neon-blue" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">
                      Não vá sem o Manual do Hackathon!
                    </h3>
                    <p className="text-gray-400 text-center text-sm mb-6 leading-relaxed">
                      Baixe o PDF com o passo a passo de como levamos inovação
                      para sua escola.
                    </p>

                    <form action={formAction} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="exit-email">E-mail</Label>
                        <Input
                          id="exit-email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          required
                        />
                        {state.errors?.email && (
                          <p className="text-red-400 text-xs flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {state.errors.email[0]}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="exit-whatsapp">WhatsApp</Label>
                        <Input
                          id="exit-whatsapp"
                          name="whatsapp"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          required
                        />
                        {state.errors?.whatsapp && (
                          <p className="text-red-400 text-xs flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {state.errors.whatsapp[0]}
                          </p>
                        )}
                      </div>

                      {state.message && !state.success && (
                        <p className="text-red-400 text-xs text-center">
                          {state.message}
                        </p>
                      )}

                      <Button type="submit" size="lg" className="w-full">
                        <FileDown className="w-5 h-5 mr-2" />
                        Quero o Manual Gratuito
                      </Button>
                    </form>

                    <p className="text-gray-600 text-xs text-center mt-4">
                      Seus dados estão seguros. Sem spam, prometemos.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
