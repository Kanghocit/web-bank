function resolveSiteUrl() {
  const candidates = [
    process.env.SITE_URL,
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ];

  for (const raw of candidates) {
    const value = raw?.trim();
    if (!value) continue;
    try {
      const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
      return new URL(withProtocol).origin;
    } catch {
      continue;
    }
  }

  return "http://localhost:3000";
}

export const site = {
  name: "Hỗ trợ vay tín chấp mở thẻ tín dụng Vpbank",
  shortName: "Hỗ trợ VPBank",
  tagline: "Tư vấn hồ sơ vay tín chấp và mở thẻ tín dụng VPBank online",
  description:
    "Hỗ trợ đăng ký vay tín chấp và mở thẻ tín dụng VPBank: không thế chấp tài sản, thủ tục đơn giản, chuyên viên liên hệ tư vấn. Đây là trang hỗ trợ hồ sơ, không phải website chính thức của VPBank.",
  url: resolveSiteUrl(),
  phoneDisplay: "0888124238",
  phoneTel: "0888124238",
  email: "phanthutrang0608@gmail.com",
  address: "Đang cập nhật, Việt Nam",
  zaloUrl: "https://zalo.me/0900000000",
  officialBankUrl: "https://www.vpbank.com.vn/",
  officialLoanUrl: "https://vayonline.vpbank.com.vn/",
} as const;

export const navItems = [
  { href: "/vay-tin-chap", label: "Vay tín chấp" },
  { href: "/the-tin-dung", label: "Thẻ tín dụng" },
  { href: "/cau-hoi-thuong-gap", label: "Câu hỏi thường gặp" },
  { href: "/lien-he", label: "Liên hệ" },
] as const;

export function absoluteUrl(path = "") {
  const base = site.url.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix === "/" ? "/" : suffix}`;
}
