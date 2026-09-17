import type { ReactNode } from "react";
import { benefits } from "@/lib/content";
import { Disclaimer } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";

const icons: Record<string, ReactNode> = {
  doc: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <rect x="12" y="8" width="20" height="28" rx="3" stroke="#00a651" strokeWidth="2" />
      <path d="M16 16h12M16 22h12M16 28h8" stroke="#00a651" strokeWidth="2" />
      <circle cx="32" cy="32" r="7" fill="#e8fff4" stroke="#00a651" strokeWidth="2" />
      <path d="M32 29v6M29 32h6" stroke="#00a651" strokeWidth="2" />
    </svg>
  ),
  hand: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <path d="M16 28v-8a3 3 0 0 1 6 0v6m0-4v-6a3 3 0 0 1 6 0v8m0-6a3 3 0 0 1 6 0v8" stroke="#00a651" strokeWidth="2" />
      <path d="M16 28c0 8 6 14 14 14h2c6 0 8-4 8-8v-6" stroke="#00a651" strokeWidth="2" />
      <text x="24" y="18" textAnchor="middle" fontSize="8" fill="#00a651" fontWeight="700">
        200
      </text>
    </svg>
  ),
  income: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <rect x="10" y="14" width="28" height="20" rx="3" stroke="#00a651" strokeWidth="2" />
      <path d="M10 20h28M16 28h8" stroke="#00a651" strokeWidth="2" />
    </svg>
  ),
  rate: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <path d="M14 32h8v-8h8v-8h8" stroke="#00a651" strokeWidth="2" />
      <circle cx="34" cy="14" r="3" fill="#00a651" />
      <path d="M16 18h8M16 22l6-6" stroke="#1ec9a7" strokeWidth="2" />
    </svg>
  ),
  term: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="12" stroke="#00a651" strokeWidth="2" />
      <path d="M24 16v8l6 4" stroke="#00a651" strokeWidth="2" />
    </svg>
  ),
};

export function Benefits() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-8 pt-20 sm:px-6 sm:pt-24">
      <Reveal>
      <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-brand sm:text-4xl">
        Ưu điểm gói vay &amp; thẻ VPBank
      </h2>
      </Reveal>
      <div className="mt-10 grid items-start gap-5 lg:grid-cols-[1fr_1.05fr]">
        <div className="space-y-5">
          {benefits.slice(0, 3).map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
            <article
              className={`card-lift rounded-2xl border-t-4 border-brand bg-white p-5 shadow-md ${i === 1 ? "lg:ml-10" : i === 2 ? "lg:mr-8" : ""}`}
            >
              <div className="flex items-start gap-4">
                {icons[item.icon]}
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
        <div className="space-y-5">
          <Reveal delay={80}>
          <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-ocean to-mint p-1 shadow-xl transition duration-500 hover:scale-[1.015]">
            <div className="flex min-h-[240px] flex-col justify-end rounded-[36px] bg-gradient-to-t from-[#0b4d66]/80 to-transparent p-8 text-white">
              <p className="text-sm font-medium text-white/80">Hỗ trợ hồ sơ online</p>
              <p className="mt-2 text-2xl font-extrabold leading-snug">
                Vay tín chấp hoặc mở thẻ — được chuyên viên đồng hành từng bước.
              </p>
            </div>
          </div>
          </Reveal>
          {benefits.slice(3).map((item, i) => (
            <Reveal key={item.title} delay={120 + i * 80}>
            <article className="card-lift rounded-2xl border-t-4 border-brand bg-white p-5 shadow-md">
              <div className="flex items-start gap-4">
                {icons[item.icon]}
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-8 space-y-2 text-sm text-muted">
        <p>
          Ví dụ minh họa: khoản vay tiêu dùng 100.000.000₫, kỳ hạn 12 tháng. Số tiền trả hàng tháng
          thay đổi theo lãi suất, phí bảo hiểm (nếu có) và phương thức tính lãi dư nợ giảm dần của
          ngân hàng — không phải cam kết từ trang hỗ trợ này.
        </p>
        <p>*Lãi suất và kỳ hạn khác nhau tùy gói vay và hồ sơ được VPBank phê duyệt.</p>
        <p>
          *Lãi suất vay tối thiểu công bố tham khảo từ 1,2%/tháng (khoảng 14,4%/năm) và có thể cao
          hơn tùy khoản vay, theo dư nợ giảm dần.
        </p>
        <Disclaimer />
      </div>
    </section>
  );
}
