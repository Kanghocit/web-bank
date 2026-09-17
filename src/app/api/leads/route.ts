import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { appendLeadToSheet } from "@/lib/sheets";
import { sendLeadEmail } from "@/lib/email";
import { saveLeadToFile } from "@/lib/leads-file";

async function withTimeout<T>(promise: Promise<T>, ms: number) {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("timeout")), ms);
    }),
  ]);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Thông tin chưa đúng" },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const lead = parsed.data;
  const saved = { file: false, sheet: false, email: false };

  try {
    const file = await saveLeadToFile(lead);
    saved.file = !file.skipped;
  } catch (error) {
    console.error("File lead error", error);
  }

  try {
    const sheet = await withTimeout(appendLeadToSheet(lead), 8000);
    saved.sheet = !sheet.skipped;
  } catch (error) {
    console.error("Google Sheet error", error);
  }

  try {
    const email = await withTimeout(sendLeadEmail(lead), 3000);
    saved.email = !email.skipped;
  } catch (error) {
    console.error("Email error", error);
  }

  if (!saved.sheet && !saved.email && !saved.file) {
    return NextResponse.json(
      {
        ok: false,
        error: "Chưa cấu hình Google Sheet trên server. Vui lòng gọi điện trực tiếp.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
