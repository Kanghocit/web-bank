import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-white";
  const sub = variant === "light" ? "text-white/80" : "text-teal-700";
  const title = variant === "light" ? "text-white" : "text-brand-dark";

  return (
    <Link href="/" className="flex items-center gap-2.5 transition duration-300 hover:scale-[1.03]" aria-label="Về trang chủ">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center">
        <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden>
          <defs>
            <linearGradient id="mark" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff4d4d" />
              <stop offset="0.45" stopColor="#00a651" />
              <stop offset="1" stopColor="#1ec9a7" />
            </linearGradient>
          </defs>
          <path
            fill="url(#mark)"
            d="M24 4c2.4 7.2 6.6 12.2 12.6 16.2C30.6 24.6 26.4 30.4 24 44c-2.4-13.6-6.6-19.4-12.6-23.8C17.4 16.2 21.6 11.2 24 4Z"
          />
        </svg>
      </span>
      <span className="min-w-0 leading-tight">
        <span className={`block font-extrabold tracking-tight ${compact ? "text-base" : "text-lg"} ${variant === "light" ? text : title}`}>
          Hỗ trợ VPBank
        </span>
        {!compact ? (
          <span className={`block text-[11px] font-medium ${variant === "light" ? sub : "text-muted"}`}>
            Vay tín chấp · Mở thẻ tín dụng
          </span>
        ) : null}
      </span>
    </Link>
  );
}
