import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { appendLeadToSheet } from "@/lib/sheets";
import { sendLeadEmail } from "@/lib/email";

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
  let stored = false;
  let notified = false;
  let destinationConfigured = false;

  try {
    const sheet = await appendLeadToSheet(lead);
    if (!sheet.skipped) {
      stored = true;
      destinationConfigured = true;
    }
  } catch (error) {
    destinationConfigured = true;
    console.error("Google Sheet error", error);
  }

  try {
    const mail = await sendLeadEmail(lead);
    if (!mail.skipped) {
      notified = true;
      destinationConfigured = true;
    }
  } catch (error) {
    destinationConfigured = true;
    console.error("Email error", error);
  }

  if (!destinationConfigured) {
    console.info("Lead received (Sheet/email not configured)", {
      name: lead.fullName,
      phone: lead.phone,
      product: lead.product,
    });
    return NextResponse.json({ ok: true });
  }

  if (!stored && !notified) {
    return NextResponse.json(
      { ok: false, error: "Không lưu được đăng ký. Vui lòng gọi điện trực tiếp." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
