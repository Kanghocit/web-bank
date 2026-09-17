"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { navItems, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-40"
          : "sticky top-0 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Logo variant={isHome ? "light" : "dark"} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Chính">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link text-sm font-medium ${
                isHome ? "text-white" : "text-ink"
              } ${pathname === item.href ? "is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition duration-200 lg:hidden ${
            isHome ? "bg-white/15 text-white" : "bg-emerald-50 text-brand-dark"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Mở menu</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="animate-slide-down border-t border-white/20 bg-white px-4 py-4 shadow-lg lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink transition hover:translate-x-1 hover:bg-emerald-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-xl px-3 py-3 text-base font-semibold text-brand"
            >
              Gọi {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
