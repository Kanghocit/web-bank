"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type Faq = { q: string; a: string };

export function FaqAccordion({
  items,
  showMoreHref,
  showHeading = true,
}: {
  items: readonly Faq[];
  showMoreHref?: string;
  showHeading?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {showHeading ? (
        <Reveal>
        <h2 className="text-center text-2xl font-bold text-brand sm:text-3xl">
          Các câu hỏi thường gặp
        </h2>
        </Reveal>
      ) : null}
      <div className="mt-8 divide-y divide-dashed divide-slate-200">
        {items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.q} className="py-2">
              <button
                type="button"
                className="flex w-full items-center gap-3 py-3 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-brand text-xs font-bold text-brand">
                  i
                </span>
                <span className="flex-1 text-sm font-medium text-ink sm:text-base">{item.q}</span>
                <svg
                className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </button>
              {isOpen ? (
                <p className="animate-fade-swap pb-4 pl-9 text-sm leading-relaxed text-muted">{item.a}</p>
              ) : null}
            </div>
          );
        })}
      </div>
      {showMoreHref ? (
        <div className="mt-8 flex justify-center">
          <Link
            href={showMoreHref}
            className="inline-flex h-12 items-center rounded-full border border-slate-300 px-8 text-sm font-semibold tracking-wide text-ink transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          >
            Xem thêm câu hỏi thường gặp
          </Link>
        </div>
      ) : null}
    </section>
  );
}
