import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Breadcrumbs } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Liên hệ tư vấn vay tín chấp và mở thẻ VPBank",
  description: `Liên hệ ${site.shortName} để được hỗ trợ hồ sơ vay tín chấp hoặc mở thẻ tín dụng VPBank. Điện thoại ${site.phoneDisplay}, email ${site.email}.`,
  alternates: { canonical: "/lien-he" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Liên hệ hỗ trợ hồ sơ"
        subtitle="Để lại thông tin hoặc gọi trực tiếp. Chuyên viên sẽ tư vấn vay tín chấp / mở thẻ tín dụng VPBank."
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Trang chủ" },
          { label: "Liên hệ" },
        ]}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-2 sm:px-6">
        <div className="space-y-4 rounded-3xl bg-white p-6 shadow-md">
          <h2 className="text-xl font-extrabold text-brand">Thông tin liên hệ</h2>
          <p>
            <span className="font-semibold">Điện thoại:</span>{" "}
            <a className="text-brand underline" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a className="text-brand underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p>
            <span className="font-semibold">Zalo:</span>{" "}
            <a className="text-brand underline" href={site.zaloUrl} target="_blank" rel="noopener noreferrer">
              Chat Zalo
            </a>
          </p>
          <p>
            <span className="font-semibold">Địa chỉ:</span> {site.address}
          </p>
          <p className="text-sm text-muted">
            Số điện thoại và Zalo đang là placeholder — thay trong <code>src/lib/site.ts</code> khi
            bạn có số thật.
          </p>
        </div>
        <LeadForm compactTitle="GỬI YÊU CẦU LIÊN HỆ" />
      </div>
    </>
  );
}
