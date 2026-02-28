"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Users, Building, School, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// --- SCHEMAS ---
const mentorSchema = z.object({
  nome: z.string().min(3, "Nome muito curto"),
  linkedin: z.string().url("URL inválida do LinkedIn"),
  expertise: z.string().min(1, "Selecione uma área"),
  whatsapp: z.string().min(10, "WhatsApp inválido"),
});
type MentorFormData = z.infer<typeof mentorSchema>;

const sponsorSchema = z.object({
  empresa: z.string().min(2, "Nome da empresa muito curto"),
  apoio: z.string().min(1, "Selecione o tipo de apoio"),
  email: z.string().email("E-mail corporativo inválido"),
});
type SponsorFormData = z.infer<typeof sponsorSchema>;

const schoolSchema = z.object({
  escola: z.string().min(5, "Nome da escola muito curto"),
  cidade: z.string().min(3, "Cidade/Estado inválido"),
  alunos: z.string().min(1, "Informe a quantidade de alunos"),
});
type SchoolFormData = z.infer<typeof schoolSchema>;

// --- API SUBMISSION WRAPPER ---
async function submitForm<T>(type: "mentor" | "sponsor" | "school", data: T) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, data }),
  });
  if (!res.ok) throw new Error("Erro ao enviar dados");
  return res.json();
}

// --- FORMS ---
function MentorForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MentorFormData>({
    resolver: zodResolver(mentorSchema),
  });

  const onSubmit = async (data: MentorFormData) => {
    setStatus("loading");
    try {
      await submitForm("mentor", data);
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="mentor-nome">Nome Completo</Label>
        <Input id="mentor-nome" placeholder="Seu nome completo" {...register("nome")} />
        {errors.nome && <p className="text-red-400 text-xs">{errors.nome.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="mentor-linkedin">LinkedIn</Label>
        <Input id="mentor-linkedin" placeholder="https://linkedin.com/in/seu-perfil" {...register("linkedin")} />
        {errors.linkedin && <p className="text-red-400 text-xs">{errors.linkedin.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="mentor-expertise">Área de Expertise</Label>
        <Select id="mentor-expertise" defaultValue="" {...register("expertise")}>
          <option value="" disabled>Selecione sua área</option>
          <option value="Desenvolvimento">Desenvolvimento</option>
          <option value="Design">Design</option>
          <option value="Pitch / Negócios">Pitch / Negócios</option>
          <option value="Data Science / IA">Data Science / IA</option>
          <option value="Outro">Outro</option>
        </Select>
        {errors.expertise && <p className="text-red-400 text-xs">{errors.expertise.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="mentor-whatsapp">WhatsApp</Label>
        <Input id="mentor-whatsapp" placeholder="(00) 00000-0000" {...register("whatsapp")} />
        {errors.whatsapp && <p className="text-red-400 text-xs">{errors.whatsapp.message}</p>}
      </div>

      <SubmitButton status={status} label="Quero ser Mentor" />
    </form>
  );
}

function SponsorForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SponsorFormData>({
    resolver: zodResolver(sponsorSchema),
  });

  const onSubmit = async (data: SponsorFormData) => {
    setStatus("loading");
    try {
      await submitForm("sponsor", data);
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="sponsor-empresa">Nome da Empresa</Label>
        <Input id="sponsor-empresa" placeholder="Nome da sua empresa" {...register("empresa")} />
        {errors.empresa && <p className="text-red-400 text-xs">{errors.empresa.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="sponsor-apoio">Tipo de Apoio</Label>
        <Select id="sponsor-apoio" defaultValue="" {...register("apoio")}>
          <option value="" disabled>Selecione o tipo de apoio</option>
          <option value="Financeiro">Financeiro (Cotas)</option>
          <option value="Brindes / Kits">Brindes e Kits</option>
          <option value="Lanches / Alimentação">Lanches e Alimentação</option>
          <option value="Tecnologia / Software">Licenças de Software</option>
          <option value="Outro">Outro formato</option>
        </Select>
        {errors.apoio && <p className="text-red-400 text-xs">{errors.apoio.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="sponsor-email">E-mail Corporativo</Label>
        <Input id="sponsor-email" type="email" placeholder="contato@empresa.com.br" {...register("email")} />
        {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
      </div>

      <SubmitButton status={status} label="Quero Patrocinar" />
    </form>
  );
}

function SchoolForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SchoolFormData>({
    resolver: zodResolver(schoolSchema),
  });

  const onSubmit = async (data: SchoolFormData) => {
    setStatus("loading");
    try {
      await submitForm("school", data);
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="school-nome">Nome da Escola / Instituição</Label>
        <Input id="school-nome" placeholder="E.E. Nome da Escola" {...register("escola")} />
        {errors.escola && <p className="text-red-400 text-xs">{errors.escola.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="school-cidade">Cidade / Estado</Label>
        <Input id="school-cidade" placeholder="Ex: São Paulo - SP" {...register("cidade")} />
        {errors.cidade && <p className="text-red-400 text-xs">{errors.cidade.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="school-alunos">Expectativa de Alunos</Label>
        <Input id="school-alunos" type="number" placeholder="Quantos alunos participariam?" {...register("alunos")} />
        {errors.alunos && <p className="text-red-400 text-xs">{errors.alunos.message}</p>}
      </div>

      <SubmitButton status={status} label="Candidatar Escola" />
    </form>
  );
}

// --- HELPER COMPONENT ---
function SubmitButton({ status, label }: { status: string; label: string }) {
  if (status === "success") {
    return (
      <Button type="button" size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white cursor-default" disabled>
        <CheckCircle2 className="w-5 h-5 mr-2" />
        Inscrição Recebida! Entraremos em contato.
      </Button>
    );
  }

  if (status === "error") {
    return (
      <Button type="button" size="lg" className="w-full bg-red-500 hover:bg-red-600 text-white">
        <AlertCircle className="w-5 h-5 mr-2" />
        Erro ao enviar. Tente novamente.
      </Button>
    );
  }

  return (
    <Button type="submit" size="lg" className="w-full group" disabled={status === "loading"}>
      {status === "loading" ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Enviando...
        </>
      ) : (
        <>
          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
          {label}
        </>
      )}
    </Button>
  );
}

export function FormsSection() {
  return (
    <section id="inscricao" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-neon-blue text-sm font-semibold tracking-widest uppercase">
            Faça Parte do Circuito
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Inscreva-se{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Agora
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Escolha como você quer contribuir para essa revolução educacional
            nas escolas públicas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-xl" />
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gray-900/90 border border-white/10 backdrop-blur-sm">
              <Tabs defaultValue="mentores" className="w-full">
                <TabsList className="w-full grid grid-cols-3 mb-6">
                  <TabsTrigger
                    value="mentores"
                    className="flex items-center gap-2 text-xs sm:text-sm"
                  >
                    <Users className="w-4 h-4 hidden sm:block" />
                    Mentores
                  </TabsTrigger>
                  <TabsTrigger
                    value="patrocinadores"
                    className="flex items-center gap-2 text-xs sm:text-sm"
                  >
                    <Building className="w-4 h-4 hidden sm:block" />
                    Patrocínio
                  </TabsTrigger>
                  <TabsTrigger
                    value="escolas"
                    className="flex items-center gap-2 text-xs sm:text-sm"
                  >
                    <School className="w-4 h-4 hidden sm:block" />
                    Escolas
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="mentores">
                  <MentorForm />
                </TabsContent>
                <TabsContent value="patrocinadores">
                  <SponsorForm />
                </TabsContent>
                <TabsContent value="escolas">
                  <SchoolForm />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
