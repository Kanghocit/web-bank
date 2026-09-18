import Link from "next/link";
import { products } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Products() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Reveal>
      <h2 className="text-center text-2xl font-bold text-brand sm:text-3xl">
        Hai nhu cầu được hỗ trợ
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
        Chọn vay tín chấp hoặc mở thẻ tín dụng VPBank. Cùng một form đăng ký, chuyên viên sẽ liên hệ
        đúng nhu cầu của bạn.
      </p>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {products.map((product, i) => (
          <Reveal key={product.href} delay={i * 120}>
          <article
            className="card-lift flex h-full flex-col rounded-[24px] border border-emerald-100 bg-white p-6 shadow-md"
          >
            <h3 className="text-xl font-extrabold text-ink">{product.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{product.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              {product.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-0.5 text-brand">●</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href={product.href}
              className="btn-pop mt-6 inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-bold text-white hover:bg-brand-dark"
            >
              {product.cta}
            </Link>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
