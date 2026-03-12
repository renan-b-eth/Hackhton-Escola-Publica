"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

export function VideoBannerSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/10 via-transparent to-transparent" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-neon-purple text-sm font-semibold tracking-widest uppercase">
                        O Evento em Imagens
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                        Veja como foi o{" "}
                        <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                            EstaHack 2026
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-3 max-w-xl mx-auto">
                        Momentos reais de alunos criando soluções tecnológicas dentro da escola — do briefing ao Demo Day.
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue/30 via-neon-purple/20 to-neon-pink/30 rounded-3xl blur-2xl opacity-60" />

                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                        <video
                            ref={videoRef}
                            src="/banner-video.mp4"
                            className="w-full aspect-video object-cover"
                            loop
                            muted
                            playsInline
                            autoPlay
                            onPlay={() => setPlaying(true)}
                            onPause={() => setPlaying(false)}
                        />

                        {/* Play overlay — aparece só se parado */}
                        {!playing && (
                            <button
                                onClick={handlePlay}
                                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors"
                                aria-label="Reproduzir vídeo"
                            >
                                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:scale-110 transition-transform">
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                            </button>
                        )}
                    </div>

                    {/* Label */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                        <p className="text-sm text-gray-400">
                            EstaHack 2026 · E.E. Nancy de Oliveira Fidalgo · Projeto Pré-TCC
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
