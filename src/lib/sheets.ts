import { google } from "googleapis";
import type { LeadInput } from "@/lib/lead-schema";
import { labelIncome, labelProduct } from "@/lib/lead-schema";
import { formatMoneyInput, formatVietnamDateTime } from "@/lib/format";

const HEADERS = [
  "Thời gian",
  "Họ tên",
  "Email",
  "SĐT",
  "Quốc tịch",
  "Sản phẩm",
  "Số tiền vay",
  "Thu nhập",
];

function leadRow(lead: LeadInput) {
  return [
    formatVietnamDateTime(),
    lead.fullName,
    lead.email || "",
    lead.phone,
    lead.nationality || "",
    labelProduct(lead.product),
    formatMoneyInput(lead.loanAmount),
    labelIncome(lead.incomeType),
  ];
}

function leadPayload(lead: LeadInput) {
  return {
    at: formatVietnamDateTime(),
    fullName: lead.fullName,
    email: lead.email || "",
    phone: lead.phone,
    nationality: lead.nationality || "",
    product: labelProduct(lead.product),
    loanAmount: formatMoneyInput(lead.loanAmount),
    incomeType: labelIncome(lead.incomeType),
  };
}

async function postAppsScript(url: string, payload: unknown) {
  const body = JSON.stringify(payload);
  const headers = { "Content-Type": "text/plain;charset=utf-8" };

  // POST to /exec already runs doPost. Google then 302s to an echo URL
  // that only accepts GET — posting again returns 405.
  let res = await fetch(url, {
    method: "POST",
    headers,
    body,
    redirect: "manual",
  });

  const location = res.headers.get("location");
  if (location && res.status >= 300 && res.status < 400) {
    res = await fetch(location, { method: "GET", redirect: "follow" });
  }

  const text = await res.text();
  if (res.status === 401 || res.status === 403 || text.includes("accounts.google.com")) {
    throw new Error(
      "Apps Script chưa mở quyền công khai. Deploy → Web app → Chạy với tư cách: Tôi → Ai có quyền: Tất cả mọi người (Anyone). Rồi dán URL /exec mới vào .env.",
    );
  }
  if (!res.ok) {
    throw new Error(`Sheet webhook ${res.status}: ${text.slice(0, 200)}`);
  }

  if (text.includes("Leads webhook OK") && !text.includes('"ok"')) {
    throw new Error("Sheet webhook redirected as GET; row was not written.");
  }

  try {
    const json = JSON.parse(text) as { ok?: boolean; error?: string };
    if (json.ok === false) {
      throw new Error(json.error || "Apps Script returned ok:false");
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Plain-text success from older deployments is fine.
    } else {
      throw error;
    }
  }

  return text;
}

export async function appendLeadToSheet(lead: LeadInput) {
  const webhook = process.env.GOOGLE_SHEETS_WEBAPP_URL?.trim();
  if (webhook) {
    await postAppsScript(webhook, leadPayload(lead));
    return { skipped: false as const };
  }

  const email = process.env.GOOGLE_CLIENT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!email || !key || !sheetId || key.includes("...")) {
    console.warn(
      "Google Sheet skipped: set GOOGLE_SHEETS_WEBAPP_URL on Vercel, or GOOGLE_SHEET_ID + service account.",
    );
    return { skipped: true as const };
  }

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const tab = (process.env.GOOGLE_SHEET_RANGE || "Leads!A:H").split("!")[0] || "Leads";

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${tab}!A1:H1`,
  });
  if (!existing.data.values?.[0]?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: `${tab}!A1:H1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [HEADERS] },
    });
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${tab}!A:H`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [leadRow(lead)] },
  });

  return { skipped: false as const };
}
