import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center transition duration-300 hover:scale-[1.03]" aria-label="Về trang chủ">
      <span
        className={
          variant === "light"
            ? "inline-flex items-center rounded-full bg-white px-3 py-1.5 shadow-sm"
            : "inline-flex items-center"
        }
      >
        <Image
          src="/images/vpbank-logo.png"
          alt="VPBank"
          width={160}
          height={40}
          className={compact ? "h-8 w-auto" : "h-9 w-auto sm:h-10"}
          priority
        />
      </span>
    </Link>
  );
}
