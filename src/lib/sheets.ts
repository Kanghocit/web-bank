import { google } from "googleapis";
import type { LeadInput } from "@/lib/lead-schema";
import { incomeLabels, productLabels } from "@/lib/lead-schema";

export async function appendLeadToSheet(lead: LeadInput) {
  const email = process.env.GOOGLE_CLIENT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!email || !key || !sheetId) {
    return { skipped: true as const };
  }

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const range = process.env.GOOGLE_SHEET_RANGE || "Sheet1!A:J";

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          lead.fullName,
          lead.email,
          lead.phone,
          lead.nationality,
          productLabels[lead.product],
          lead.loanAmount || "",
          incomeLabels[lead.incomeType],
        ],
      ],
    },
  });

  return { skipped: false as const };
}
