"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
      <Reveal>
      <h2 className="text-2xl font-extrabold uppercase tracking-wide text-brand sm:text-4xl">
        Nhận xét của khách hàng
      </h2>
      </Reveal>
      <div className="relative mt-10">
        <button
          type="button"
          className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-ink shadow transition hover:scale-110 hover:border-brand hover:text-brand sm:grid"
          aria-label="Đánh giá trước"
          onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
        >
          ‹
        </button>
        <button
          type="button"
          className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-ink shadow transition hover:scale-110 hover:border-brand hover:text-brand sm:grid"
          aria-label="Đánh giá sau"
          onClick={() => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
        >
          ›
        </button>
        <div key={item.name} className="animate-fade-swap mx-auto max-w-xl">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-ocean to-mint text-3xl font-bold text-white">
            {item.initial}
          </div>
          <p className="mt-5 text-lg">
            <span className="text-muted">Anh/Chị </span>
            <span className="font-semibold text-brand">{item.name.replace(/^Anh |^Chị /, "")}</span>
          </p>
          <p className="text-sm italic text-muted">{item.city}</p>
          <p className="mt-5 text-base leading-relaxed text-ink">{item.quote}</p>
        </div>
        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          <button
            type="button"
            className="h-10 rounded-full border px-4"
            onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
          >
            Trước
          </button>
          <button
            type="button"
            className="h-10 rounded-full border px-4"
            onClick={() => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
          >
            Sau
          </button>
        </div>
        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Đánh giá ${i + 1}`}
              className={`h-3 w-3 rounded-full transition ${i === index ? "scale-110 bg-brand" : "bg-slate-300 hover:bg-slate-400"}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          Ý kiến từ khách được hỗ trợ hồ sơ tư vấn, không đại diện cho VPBank.
        </p>
      </div>
    </section>
  );
}
