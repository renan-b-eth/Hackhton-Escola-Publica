"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// ─── Schemas ───
const mentorSchema = z.object({
  nome: z.string().min(3),
  linkedin: z.string().url(),
  expertise: z.string().min(1),
  whatsapp: z.string().min(10),
});
type MentorData = z.infer<typeof mentorSchema>;

const schoolSchema = z.object({
  escola: z.string().min(5),
  cidade: z.string().min(3),
  alunos: z.string().min(1),
});
type SchoolData = z.infer<typeof schoolSchema>;

async function submitForm<T>(type: "mentor" | "sponsor" | "school", data: T) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, data }),
  });
  if (!res.ok) throw new Error();
  return res.json();
}

// ─── Tabs de participação ─── (Jornada A)
type Tab = "mentores" | "patrocinadores" | "escolas";

const TABS: { id: Tab; label: string }[] = [
  { id: "mentores", label: "Mentores" },
  { id: "patrocinadores", label: "Patrocínio" },
  { id: "escolas", label: "Escolas" },
];

function FieldGroup({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1.5">{children}</div>;
}

function EditorialLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-sans text-[10px] uppercase tracking-[0.18em] text-stone"
    >
      {children}
    </label>
  );
}

function StatusButton({ status, label }: { status: string; label: string }) {
  const base =
    "w-full font-sans text-xs uppercase tracking-[0.18em] font-semibold py-4 transition-colors flex items-center justify-center gap-2";
  if (status === "success")
    return (
      <button className={`${base} bg-ink text-editorial cursor-default`} disabled>
        <CheckCircle2 className="w-4 h-4" /> Recebido! Entraremos em contato.
      </button>
    );
  if (status === "error")
    return (
      <button className={`${base} bg-rouge text-white`} disabled>
        <AlertCircle className="w-4 h-4" /> Erro ao enviar. Tente novamente.
      </button>
    );
  return (
    <button
      type="submit"
      disabled={status === "loading"}
      className={`${base} bg-rouge text-white hover:bg-rouge-deep`}
    >
      {status === "loading" ? (
        <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
      ) : label}
    </button>
  );
}

function inputClass() {
  return "w-full font-sans text-sm text-ink bg-editorial border border-hairline px-4 py-3 focus:outline-none focus:border-ink transition-colors placeholder:text-stone/50";
}

function MentorForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MentorData>({
    resolver: zodResolver(mentorSchema),
  });
  const onSubmit = async (data: MentorData) => {
    setStatus("loading");
    try { await submitForm("mentor", data); setStatus("success"); reset(); setTimeout(() => setStatus("idle"), 5000); }
    catch { setStatus("error"); setTimeout(() => setStatus("idle"), 5000); }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FieldGroup>
        <EditorialLabel htmlFor="m-nome">Nome Completo</EditorialLabel>
        <input id="m-nome" placeholder="Seu nome" {...register("nome")} className={inputClass()} />
        {errors.nome && <p className="text-rouge text-xs">{errors.nome.message}</p>}
      </FieldGroup>
      <FieldGroup>
        <EditorialLabel htmlFor="m-linkedin">LinkedIn</EditorialLabel>
        <input id="m-linkedin" placeholder="https://linkedin.com/in/…" {...register("linkedin")} className={inputClass()} />
        {errors.linkedin && <p className="text-rouge text-xs">{errors.linkedin.message}</p>}
      </FieldGroup>
      <FieldGroup>
        <EditorialLabel htmlFor="m-exp">Área de Expertise</EditorialLabel>
        <select id="m-exp" {...register("expertise")} className={inputClass()}>
          <option value="">Selecione</option>
          <option>Desenvolvimento</option>
          <option>Design</option>
          <option>Pitch / Negócios</option>
          <option>Data Science / IA</option>
          <option>Outro</option>
        </select>
        {errors.expertise && <p className="text-rouge text-xs">{errors.expertise.message}</p>}
      </FieldGroup>
      <FieldGroup>
        <EditorialLabel htmlFor="m-wpp">WhatsApp</EditorialLabel>
        <input id="m-wpp" placeholder="(00) 00000-0000" {...register("whatsapp")} className={inputClass()} />
        {errors.whatsapp && <p className="text-rouge text-xs">{errors.whatsapp.message}</p>}
      </FieldGroup>
      <StatusButton status={status} label="Quero ser Mentor →" />
    </form>
  );
}

function SponsorForm() {
  return (
    <div className="space-y-5 py-2">
      <p className="font-sans text-sm text-stone leading-relaxed">
        Preencha o formulário de patrocínio com informações sobre sua empresa e como deseja apoiar o evento.
      </p>
      <ul className="space-y-1.5">
        {["Patrocínio Financeiro (Cotas)", "Brindes e Kits para os times", "Alimentação durante o evento", "Licenças de Software / Ferramentas"].map((item) => (
          <li key={item} className="font-sans text-xs text-stone flex gap-2">
            <span className="text-rouge">—</span>{item}
          </li>
        ))}
      </ul>
      <a
        href="https://forms.gle/d6qBswpQHPAw918n6"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full border border-ink text-ink font-sans text-xs uppercase tracking-[0.18em] font-semibold py-4 text-center hover:bg-ink hover:text-editorial transition-colors"
      >
        Abrir Formulário de Patrocínio →
      </a>
    </div>
  );
}

function SchoolForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<SchoolData>({
    resolver: zodResolver(schoolSchema),
  });
  const onSubmit = async (data: SchoolData) => {
    setStatus("loading");
    try { await submitForm("school", data); setStatus("success"); reset(); setTimeout(() => setStatus("idle"), 5000); }
    catch { setStatus("error"); setTimeout(() => setStatus("idle"), 5000); }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FieldGroup>
        <EditorialLabel htmlFor="s-escola">Nome da Escola</EditorialLabel>
        <input id="s-escola" placeholder="E.E. Nome da Escola" {...register("escola")} className={inputClass()} />
        {errors.escola && <p className="text-rouge text-xs">{errors.escola.message}</p>}
      </FieldGroup>
      <FieldGroup>
        <EditorialLabel htmlFor="s-cidade">Cidade / Estado</EditorialLabel>
        <input id="s-cidade" placeholder="Ex: São Paulo — SP" {...register("cidade")} className={inputClass()} />
        {errors.cidade && <p className="text-rouge text-xs">{errors.cidade.message}</p>}
      </FieldGroup>
      <FieldGroup>
        <EditorialLabel htmlFor="s-alunos">Expectativa de Alunos</EditorialLabel>
        <input id="s-alunos" type="number" placeholder="Quantos alunos?" {...register("alunos")} className={inputClass()} />
        {errors.alunos && <p className="text-rouge text-xs">{errors.alunos.message}</p>}
      </FieldGroup>
      <StatusButton status={status} label="Candidatar Escola →" />
    </form>
  );
}

export function FormsSection() {
  const [tab, setTab] = useState<Tab>("mentores");

  return (
    <section id="inscricao" className="section-dark relative py-20 sm:py-28">
      {/* Watermark */}
      <div
        aria-hidden
        className="absolute right-0 top-0 select-none pointer-events-none font-display font-black leading-none"
        style={{ fontSize: "clamp(120px, 20vw, 280px)", opacity: 0.03, color: "#ECE8E1", lineHeight: 1 }}
      >
        →
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-start">

          {/* Coluna esquerda — contexto */}
          <div>
            <motion.p
              className="kicker text-stone mb-5"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4 }}
            >
              Faça parte
            </motion.p>

            <div className="divider-h-dark mb-8" />

            <motion.h2
              className="font-display font-bold text-editorial leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              Escolha<br />
              <span className="italic text-stone">como contribuir.</span>
            </motion.h2>

            <motion.div
              className="space-y-4 font-sans text-stone text-sm leading-relaxed max-w-md"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                <strong className="text-editorial">Mentores:</strong> profissionais com expertise técnica, de produto ou negócios que queiram acompanhar as equipes.
              </p>
              <p>
                <strong className="text-editorial">Patrocínio:</strong> empresas e organizações que desejam apoiar a educação pública estadual.
              </p>
              <p>
                <strong className="text-editorial">Escolas:</strong> instituições da rede estadual interessadas em participar de edições futuras.
              </p>
            </motion.div>
          </div>

          {/* Coluna direita — formulário */}
          <motion.div
            className="border border-editorial/12"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tabs */}
            <div className="flex border-b border-editorial/12">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex-1 py-4 font-sans text-[10px] uppercase tracking-[0.18em] font-semibold transition-colors ${
                    tab === t.id
                      ? "text-editorial border-b-2 border-rouge -mb-px"
                      : "text-stone hover:text-editorial"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Form content */}
            <div className="p-6 sm:p-8 bg-void">
              {tab === "mentores" && <MentorForm />}
              {tab === "patrocinadores" && <SponsorForm />}
              {tab === "escolas" && <SchoolForm />}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
