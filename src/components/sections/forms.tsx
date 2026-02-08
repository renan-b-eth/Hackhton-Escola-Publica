"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Users,
  Building,
  School,
  Send,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_NUMBER = "5500000000000";

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function MentorForm() {
  const [form, setForm] = useState({
    nome: "",
    linkedin: "",
    expertise: "",
    whatsapp: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🚀 *Inscrição de Mentor - Hackathon Escolas Públicas*\n\n👤 Nome: ${form.nome}\n🔗 LinkedIn: ${form.linkedin}\n💡 Expertise: ${form.expertise}\n📱 WhatsApp: ${form.whatsapp}`;
    window.open(buildWhatsAppLink(msg), "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="mentor-nome">Nome Completo</Label>
        <Input
          id="mentor-nome"
          placeholder="Seu nome completo"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mentor-linkedin">LinkedIn</Label>
        <Input
          id="mentor-linkedin"
          placeholder="linkedin.com/in/seu-perfil"
          value={form.linkedin}
          onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mentor-expertise">Área de Expertise</Label>
        <Select
          id="mentor-expertise"
          value={form.expertise}
          onChange={(e) => setForm({ ...form, expertise: e.target.value })}
          required
        >
          <option value="" disabled>
            Selecione sua área
          </option>
          <option value="Desenvolvimento">Desenvolvimento</option>
          <option value="Design">Design</option>
          <option value="Pitch / Negócios">Pitch / Negócios</option>
          <option value="Data Science / IA">Data Science / IA</option>
          <option value="Outro">Outro</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="mentor-whatsapp">WhatsApp</Label>
        <Input
          id="mentor-whatsapp"
          placeholder="(00) 00000-0000"
          value={form.whatsapp}
          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
          required
        />
      </div>
      <Button type="submit" size="lg" className="w-full group">
        {sent ? (
          <>
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Enviado!
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Quero ser Mentor
          </>
        )}
      </Button>
    </form>
  );
}

function SponsorForm() {
  const [form, setForm] = useState({
    empresa: "",
    apoio: "",
    email: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🏢 *Inscrição de Patrocinador - Hackathon Escolas Públicas*\n\n🏢 Empresa: ${form.empresa}\n🤝 Tipo de Apoio: ${form.apoio}\n📧 E-mail: ${form.email}`;
    window.open(buildWhatsAppLink(msg), "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="sponsor-empresa">Nome da Empresa</Label>
        <Input
          id="sponsor-empresa"
          placeholder="Nome da sua empresa"
          value={form.empresa}
          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="sponsor-apoio">Tipo de Apoio</Label>
        <Select
          id="sponsor-apoio"
          value={form.apoio}
          onChange={(e) => setForm({ ...form, apoio: e.target.value })}
          required
        >
          <option value="" disabled>
            Selecione o tipo de apoio
          </option>
          <option value="Financeiro">Financeiro</option>
          <option value="Brindes / Kits">Brindes / Kits</option>
          <option value="Lanches / Alimentação">Lanches / Alimentação</option>
          <option value="Espaço / Infraestrutura">
            Espaço / Infraestrutura
          </option>
          <option value="Tecnologia / Software">Tecnologia / Software</option>
          <option value="Outro">Outro</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="sponsor-email">E-mail Corporativo</Label>
        <Input
          id="sponsor-email"
          type="email"
          placeholder="contato@empresa.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>
      <Button type="submit" size="lg" className="w-full group">
        {sent ? (
          <>
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Enviado!
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Quero Patrocinar
          </>
        )}
      </Button>
    </form>
  );
}

function SchoolForm() {
  const [form, setForm] = useState({
    escola: "",
    cidade: "",
    alunos: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🏫 *Inscrição de Escola - Hackathon Escolas Públicas*\n\n🏫 Escola: ${form.escola}\n📍 Cidade: ${form.cidade}\n👥 Qtd. Alunos: ${form.alunos}`;
    window.open(buildWhatsAppLink(msg), "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="school-nome">Nome da Escola</Label>
        <Input
          id="school-nome"
          placeholder="Nome completo da escola"
          value={form.escola}
          onChange={(e) => setForm({ ...form, escola: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="school-cidade">Cidade / Estado</Label>
        <Input
          id="school-cidade"
          placeholder="Ex: São Paulo - SP"
          value={form.cidade}
          onChange={(e) => setForm({ ...form, cidade: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="school-alunos">Quantidade de Alunos</Label>
        <Input
          id="school-alunos"
          type="number"
          placeholder="Número estimado de alunos"
          value={form.alunos}
          onChange={(e) => setForm({ ...form, alunos: e.target.value })}
          required
        />
      </div>
      <Button type="submit" size="lg" className="w-full group">
        {sent ? (
          <>
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Enviado!
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Inscrever Escola
          </>
        )}
      </Button>
    </form>
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
            Faça Parte
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Inscreva-se{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Agora
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Escolha como você quer contribuir para essa revolução educacional.
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
                    Patrocinadores
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
