import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { LeadInput } from "@/lib/lead-schema";

export async function saveLeadToFile(lead: LeadInput) {
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  const row = {
    at: new Date().toISOString(),
    fullName: lead.fullName,
    email: lead.email,
    phone: lead.phone,
    nationality: lead.nationality,
    product: lead.product,
    loanAmount: lead.loanAmount || "",
    incomeType: lead.incomeType,
  };
  await appendFile(path.join(dir, "leads.jsonl"), `${JSON.stringify(row)}\n`, "utf8");
}
