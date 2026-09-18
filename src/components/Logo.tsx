import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ variant = "dark", compact = false }: LogoProps) {
  const light = variant === "light";

  return (
    <Link href="/" className="flex items-center transition duration-300 hover:scale-[1.03]" aria-label="Về trang chủ">
      <Image
        src={light ? "/images/vpbank-logo-white.png" : "/images/vpbank-logo.png"}
        alt="VPBank"
        width={154}
        height={35}
        className={`${compact ? "h-8 w-auto" : "h-9 w-auto sm:h-10"} ${
          light ? "drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)]" : ""
        }`}
        priority
      />
    </Link>
  );
}
