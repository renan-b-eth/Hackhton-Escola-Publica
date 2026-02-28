import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

// Define the schema for the incoming data
const contactSchema = z.object({
    type: z.enum(["mentor", "sponsor", "school"]),
    data: z.any(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate the basic structure
        const parsed = contactSchema.parse(body);

        // Create a new lead object with timestamp
        const lead = {
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            type: parsed.type,
            ...parsed.data,
        };

        // Determine the path to the leads file
        const dataDir = path.join(process.cwd(), "data");
        const filePath = path.join(dataDir, "leads.json");

        // Ensure the data directory exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Read existing leads or create an empty array
        let leads = [];
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, "utf-8");
            leads = JSON.parse(fileData);
        }

        // Append the new lead
        leads.push(lead);

        // Save back to the file
        fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

        return NextResponse.json({ success: true, leadId: lead.id }, { status: 200 });
    } catch (error) {
        console.error("Error saving lead:", error);
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, error: "Validation failed", details: error.issues },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
