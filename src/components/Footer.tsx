import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-4 band-bg text-white">
      <svg
        className="absolute -top-px left-0 h-16 w-full text-background"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0 80V28c180 42 360-28 540-18 180 10 300 62 480 52 140-8 280-48 420-18v36H0Z"
        />
      </svg>
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6">
        <div className="flex justify-center pb-8">
          <Logo variant="light" />
        </div>
        <div className="grid gap-6 border-t border-white/25 py-8 sm:grid-cols-2">
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-3">
              <PinIcon />
              <span>{site.address}</span>
            </p>
            <p>
              <a className="flex items-center gap-3 hover:underline" href={`tel:${site.phoneTel}`}>
                <PhoneIcon />
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="space-y-3 text-sm sm:text-right">
            <p>
              <a className="inline-flex items-center gap-3 hover:underline sm:flex-row-reverse" href={`mailto:${site.email}`}>
                <MailIcon />
                {site.email}
              </a>
            </p>
            <p className="inline-flex items-center gap-3 sm:w-full sm:flex-row-reverse">
              <GlobeIcon />
              <span>Trang hỗ trợ hồ sơ VPBank</span>
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-white/90" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
          <Link href="/chinh-sach-bao-mat" className="hover:underline">
            Chính sách bảo mật
          </Link>
        </nav>
        <p className="mt-6 text-center text-xs leading-relaxed text-white/80">
          Đây không phải website chính thức của VPBank. Sản phẩm tín dụng do Ngân hàng TMCP Việt Nam
          Thịnh Vượng cung cấp; phê duyệt, lãi suất và hạn mức theo chính sách ngân hàng.{" "}
          <a className="underline" href={site.officialBankUrl} rel="noopener noreferrer" target="_blank">
            vpbank.com.vn
          </a>
        </p>
        <p className="mt-3 text-center text-xs text-white/70">
          © {new Date().getFullYear()} {site.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function PinIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6.5 3.5h3L11 7.5 8.8 9.2a12.5 12.5 0 0 0 6 6L16.5 13l4 1.5v3A2.5 2.5 0 0 1 18 20 16.5 16.5 0 0 1 4 6a2.5 2.5 0 0 1 2.5-2.5Z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.8 3.8 6 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-6-3.8-9S9.5 5.8 12 3Z" />
    </svg>
  );
}
