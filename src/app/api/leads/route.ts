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

  try {
    await saveLeadToFile(lead);
  } catch (error) {
    console.error("File lead error", error);
    return NextResponse.json(
      { ok: false, error: "Không lưu được đăng ký. Vui lòng gọi điện trực tiếp." },
      { status: 500 },
    );
  }

  try {
    await withTimeout(appendLeadToSheet(lead), 3000);
  } catch (error) {
    console.error("Google Sheet error", error);
  }

  try {
    await withTimeout(sendLeadEmail(lead), 3000);
  } catch (error) {
    console.error("Email error", error);
  }

  return NextResponse.json({ ok: true });
}
