import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingChat, StickyCta } from "@/components/FloatingChat";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#00a651",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "vay tín chấp VPBank",
    "mở thẻ tín dụng VPBank",
    "vay online không thế chấp",
    "hỗ trợ hồ sơ VPBank",
    "vay tiêu dùng VPBank",
  ],
  authors: [{ name: site.shortName }],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      streetAddress: site.address,
    },
    areaServed: "VN",
    disclaimer: "Trang hỗ trợ hồ sơ, không phải website chính thức của VPBank.",
  };

  return (
    <html lang="vi" data-scroll-behavior="smooth" className={`${beVietnam.variable} h-full antialiased`}>
      <body className={`${beVietnam.className} min-h-full bg-background pb-20 text-foreground sm:pb-0`}>
        <JsonLd data={orgLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingChat />
        <StickyCta />
      </body>
    </html>
  );
}
