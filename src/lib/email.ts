import nodemailer from "nodemailer";
import type { LeadInput } from "@/lib/lead-schema";
import { incomeLabels, productLabels } from "@/lib/lead-schema";
import { site } from "@/lib/site";

function formatLead(lead: LeadInput) {
  return [
    `Họ tên: ${lead.fullName}`,
    `Email: ${lead.email}`,
    `Điện thoại: ${lead.phone}`,
    `Quốc tịch: ${lead.nationality}`,
    `Nhu cầu: ${productLabels[lead.product]}`,
    `Số tiền vay: ${lead.loanAmount || "—"}`,
    `Thu nhập: ${incomeLabels[lead.incomeType]}`,
  ].join("\n");
}

export async function sendLeadEmail(lead: LeadInput) {
  const to = process.env.NOTIFY_EMAIL;
  if (!to) return { skipped: true as const };

  const text = `Lead mới từ ${site.shortName}\n\n${formatLead(lead)}`;
  const html = `<h2>Lead mới từ ${site.shortName}</h2><pre>${formatLead(lead)}</pre>`;
  const subject = `[Lead] ${productLabels[lead.product]} - ${lead.fullName}`;

  if (process.env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || "Leads <onboarding@resend.dev>",
        to: [to],
        subject,
        text,
        html,
      }),
    });
    if (!res.ok) {
      throw new Error(`Resend error: ${await res.text()}`);
    }
    return { skipped: false as const };
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    return { skipped: true as const };
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || user,
    to,
    subject,
    text,
    html,
  });

  return { skipped: false as const };
}
