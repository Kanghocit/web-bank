import { site } from "@/lib/site";

export function FloatingChat() {
  return (
    <a
      href={site.zaloUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-bob fixed right-4 bottom-24 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl ring-2 ring-brand sm:bottom-8"
      aria-label="Chat Zalo hỗ trợ"
    >
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-b from-emerald-100 to-teal-200">
        <span className="pulse-ring" aria-hidden />
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
          <circle cx="32" cy="24" r="10" fill="#3d5a4c" />
          <path fill="#2f9e6a" d="M18 50c2-10 8-16 14-16s12 6 14 16H18Z" />
          <path fill="#fff" d="M26 22h12v3H26z" opacity=".35" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-bold text-white">
          Z
        </span>
      </span>
    </a>
  );
}

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-emerald-100 bg-white/95 p-3 backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href="#dang-ky"
          className="btn-pop flex h-12 flex-1 items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
        >
          Đăng ký
        </a>
        <a
          href={`tel:${site.phoneTel}`}
          className="flex h-12 flex-1 items-center justify-center rounded-full border border-brand text-sm font-bold text-brand"
        >
          Gọi ngay
        </a>
      </div>
    </div>
  );
}
