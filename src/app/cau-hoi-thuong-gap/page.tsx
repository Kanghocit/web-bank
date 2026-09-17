import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero, Breadcrumbs } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp về vay tín chấp và thẻ tín dụng VPBank",
  description:
    "Giải đáp vay tín chấp VPBank, mở thẻ tín dụng, thủ tục hồ sơ, lãi suất tham khảo, phí phát sinh và vai trò trang hỗ trợ.",
  alternates: { canonical: "/cau-hoi-thuong-gap" },
  openGraph: {
    title: "Câu hỏi thường gặp | Hỗ trợ VPBank",
    description: "FAQ vay tín chấp và mở thẻ tín dụng VPBank.",
    url: "/cau-hoi-thuong-gap",
  },
};

export default function FaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <PageHero
        title="Các câu hỏi thường gặp"
        subtitle="Thông tin tham khảo về vay tín chấp, mở thẻ tín dụng VPBank và cách trang hỗ trợ này làm việc."
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Trang chủ" },
          { label: "Câu hỏi thường gặp" },
        ]}
      />
      <FaqAccordion items={faqs} showHeading={false} />
    </>
  );
}
