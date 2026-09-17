import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Breadcrumbs } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { Disclaimer } from "@/components/JsonLd";
import { cardPage } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mở thẻ tín dụng VPBank — đăng ký tư vấn online",
  description:
    "Hỗ trợ đăng ký mở thẻ tín dụng VPBank: chi tiêu, trả góp, hoàn tiền theo từng dòng thẻ. Hồ sơ được chuyên viên hướng dẫn; hạn mức do ngân hàng cấp.",
  alternates: { canonical: "/the-tin-dung" },
  keywords: ["mở thẻ tín dụng VPBank", "đăng ký thẻ tín dụng", "thẻ tín dụng online"],
  openGraph: {
    title: "Mở thẻ tín dụng VPBank online",
    description: "Đăng ký tư vấn mở thẻ tín dụng VPBank, hỗ trợ hồ sơ và giải thích quyền lợi thẻ.",
    url: "/the-tin-dung",
  },
};

export default function TheTinDungPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: site.url },
            {
              "@type": "ListItem",
              position: 2,
              name: "Thẻ tín dụng",
              item: `${site.url}/the-tin-dung`,
            },
          ],
        }}
      />
      <PageHero title={cardPage.h1} subtitle={cardPage.intro} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Trang chủ" },
          { label: "Thẻ tín dụng VPBank" },
        ]}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1.1fr_0.9fr] sm:px-6">
        <article className="space-y-4 text-ink">
          <h2 className="text-xl font-extrabold text-brand">Vì sao đăng ký thẻ tín dụng VPBank?</h2>
          <p>
            Thẻ tín dụng giúp tách chi tiêu khỏi tài khoản thanh toán, thanh toán online, và đăng ký
            trả góp tại đơn vị chấp nhận thẻ. Ưu đãi hoàn tiền, miễn lãi trong thời gian ân hạn, phí
            thường niên và hạn mức khác nhau theo từng dòng thẻ.
          </p>
          <h2 className="text-xl font-extrabold text-brand">Giấy tờ thường cần</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted">
            <li>CCCD còn hạn</li>
            <li>Thông tin liên hệ và địa chỉ cư trú</li>
            <li>Minh chứng thu nhập nếu ngân hàng yêu cầu theo dòng thẻ</li>
          </ul>
          <h2 className="text-xl font-extrabold text-brand">Lưu ý khi dùng thẻ</h2>
          <p>
            Thanh toán đủ và đúng hạn để tránh lãi và phí. Rút tiền mặt từ thẻ tín dụng thường chịu
            phí và lãi ngay. Hạn mức được cấp sau thẩm định, không do trang hỗ trợ cam kết.
          </p>
          <Disclaimer className="mt-4" />
        </article>
        <LeadForm defaultProduct="the-tin-dung" compactTitle="ĐĂNG KÝ MỞ THẺ" />
      </div>
    </>
  );
}
