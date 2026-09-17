import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Products } from "@/components/Products";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Testimonials } from "@/components/Testimonials";
import { JsonLd } from "@/components/JsonLd";
import { homeFaqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Hỗ trợ vay tín chấp mở thẻ tín dụng Vpbank | Tư vấn hồ sơ online",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.description,
    url: "/",
  },
};

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <Hero />
      <Benefits />
      <Products />
      <FaqAccordion items={homeFaqs} showMoreHref="/cau-hoi-thuong-gap" />
      <Testimonials />
    </>
  );
}
