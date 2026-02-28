import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
    type: z.enum(["mentor", "sponsor", "school"]),
    data: z.record(z.string(), z.unknown()),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsed = contactSchema.parse(body);

        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            // Sem chave configurada — retorna sucesso silencioso em dev
            console.warn("[contact] WEB3FORMS_ACCESS_KEY não configurada. Dados recebidos:", parsed);
            return NextResponse.json({ success: true }, { status: 200 });
        }

        // Monta mensagem legível
        const fields = Object.entries(parsed.data)
            .map(([k, v]) => `• ${k}: ${String(v)}`)
            .join("\n");

        const typeLabel =
            parsed.type === "mentor"
                ? "Mentor"
                : parsed.type === "sponsor"
                    ? "Patrocinador"
                    : "Escola";

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: `🚀 Novo ${typeLabel} - EstaHack`,
                from_name: "EstaHack Landing Page",
                message: `Novo contato recebido pelo site EstaHack:\n\nTipo: ${typeLabel}\n\n${fields}`,
            }),
        });

        const result = await res.json();

        if (!result.success) {
            console.error("[contact] Web3Forms error:", result);
            return NextResponse.json(
                { success: false, error: "Falha no envio do e-mail" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("[contact] Error:", error);
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, error: "Dados inválidos", details: error.issues },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { success: false, error: "Erro interno" },
            { status: 500 }
        );
    }
}
