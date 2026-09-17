"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  incomeLabels,
  incomeValues,
  leadSchema,
  productLabels,
  productValues,
  type ProductValue,
} from "@/lib/lead-schema";

type LeadFormProps = {
  defaultProduct?: ProductValue;
  compactTitle?: string;
};

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-teal focus:ring-2 focus:ring-teal/30";

export function LeadForm({
  defaultProduct = "vay-tin-chap",
  compactTitle = "ĐĂNG KÝ TƯ VẤN",
}: LeadFormProps) {
  const [product, setProduct] = useState<ProductValue>(defaultProduct);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const showAmount = product !== "the-tin-dung";

  const amountHint = useMemo(
    () => (showAmount ? "VD: 50 000 000" : "Không bắt buộc với mở thẻ"),
    [showAmount],
  );

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    setErrors({});
    setMessage("");

    const raw = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      nationality: String(formData.get("nationality") ?? "Việt Nam"),
      product: String(formData.get("product") ?? product),
      loanAmount: String(formData.get("loanAmount") ?? ""),
      incomeType: String(formData.get("incomeType") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      setMessage("Vui lòng kiểm tra lại thông tin.");
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Không gửi được đăng ký");
      }
      setStatus("ok");
      setMessage("Đăng ký thành công. Chuyên viên sẽ liên hệ lại sớm.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Có lỗi xảy ra, vui lòng thử lại.");
    }
  }

  return (
    <div
      id="dang-ky"
      className="relative z-20 w-full scroll-mt-24 rounded-[28px] border border-white/70 bg-white p-5 shadow-2xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgb(11_77_102/0.2)] sm:p-7"
    >
      <div className="pointer-events-none absolute -left-3 -top-8 hidden sm:block" aria-hidden>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <path
            d="M14 50c10-22 18-30 34-38 2 14-2 28-10 40-8 4-16 4-24-2Z"
            fill="#e8fff4"
            stroke="#b7ead4"
          />
        </svg>
      </div>
      <h2 className="text-center text-xl font-extrabold tracking-wide text-brand-dark sm:text-2xl">
        {compactTitle}
      </h2>

      <form
        className="mt-5 space-y-3.5"
        onSubmit={(e) => {
          e.preventDefault();
          void onSubmit(new FormData(e.currentTarget));
        }}
      >
        <div className="hidden" aria-hidden>
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <Field label="Họ tên" error={errors.fullName}>
          <input className={fieldClass} name="fullName" placeholder="Họ tên" autoComplete="name" required />
        </Field>

        <Field label="Email" error={errors.email}>
          <input
            className={fieldClass}
            name="email"
            type="email"
            placeholder="abcde@gmail.com"
            autoComplete="email"
            required
          />
        </Field>

        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Số điện thoại" error={errors.phone}>
            <input
              className={fieldClass}
              name="phone"
              type="tel"
              inputMode="numeric"
              placeholder="Số điện thoại"
              autoComplete="tel"
              required
            />
          </Field>
          <Field label="Quốc tịch" error={errors.nationality}>
            <select className={fieldClass} name="nationality" defaultValue="Việt Nam">
              <option>Việt Nam</option>
              <option>Khác</option>
            </select>
          </Field>
        </div>

        <Field label="Loại hỗ trợ" error={errors.product}>
          <select
            className={fieldClass}
            name="product"
            value={product}
            onChange={(e) => setProduct(e.target.value as ProductValue)}
          >
            {productValues.map((value) => (
              <option key={value} value={value}>
                {productLabels[value]}
              </option>
            ))}
          </select>
        </Field>

        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Số tiền vay" error={errors.loanAmount}>
            <div className="relative">
              <input
                className={`${fieldClass} pr-14`}
                name="loanAmount"
                inputMode="numeric"
                placeholder={amountHint}
                disabled={!showAmount}
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted">
                VND
              </span>
            </div>
          </Field>
          <Field label="Hình thức thu nhập" error={errors.incomeType}>
            <select className={fieldClass} name="incomeType" defaultValue="">
              <option value="" disabled>
                Vui lòng chọn
              </option>
              {incomeValues.map((value) => (
                <option key={value} value={value}>
                  {incomeLabels[value]}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <label className="flex items-start gap-2 pt-1 text-sm text-muted">
          <input
            className="mt-1 h-4 w-4 rounded border-slate-300 text-brand"
            name="consent"
            type="checkbox"
            required
          />
          <span>
            Tôi đồng ý để chuyên viên liên hệ tư vấn và đã đọc{" "}
            <Link href="/chinh-sach-bao-mat" className="font-medium text-brand underline">
              chính sách bảo mật
            </Link>
            .
          </span>
        </label>
        {errors.consent ? <p className="text-sm text-red-600">{errors.consent}</p> : null}

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#0b4d66] to-brand text-base font-extrabold tracking-wide text-white shadow-lg btn-pop disabled:opacity-70"
        >
          {status === "loading" ? "Đang gửi..." : "ĐĂNG KÝ"}
        </button>

        {message ? (
          <p
            className={`text-center text-sm animate-fade-swap ${status === "ok" ? "text-brand-dark" : "text-red-600"}`}
            role="status"
          >
            {message}
          </p>
        ) : (
          <p className="text-center text-sm">
            <a href={`#faq`} className="font-medium text-brand underline underline-offset-2">
              Bạn đã đăng ký ?
            </a>
          </p>
        )}
      </form>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      {children}
      {error ? <span className="mt-1 block text-xs font-normal text-red-600">{error}</span> : null}
    </label>
  );
}
