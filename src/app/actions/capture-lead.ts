"use server";

import { z } from "zod";

const leadSchema = z.object({
  email: z
    .string()
    .email("E-mail inválido. Verifique e tente novamente."),
  whatsapp: z
    .string()
    .min(10, "WhatsApp deve ter pelo menos 10 dígitos.")
    .regex(/^[\d\s()+-]+$/, "WhatsApp inválido. Use apenas números."),
});

export type LeadState = {
  success: boolean;
  message: string;
  errors?: {
    email?: string[];
    whatsapp?: string[];
  };
};

export async function captureLeadAction(
  _prevState: LeadState,
  formData: FormData
): Promise<LeadState> {
  const raw = {
    email: formData.get("email") as string,
    whatsapp: formData.get("whatsapp") as string,
  };

  const validated = leadSchema.safeParse(raw);

  if (!validated.success) {
    return {
      success: false,
      message: "Verifique os campos e tente novamente.",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  // TODO: Integrate with Supabase when ready
  // For now, log the lead data
  console.log("📧 [LEAD CAPTURED]", {
    email: validated.data.email,
    whatsapp: validated.data.whatsapp,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: "Pronto! Você receberá o manual em breve.",
  };
}
