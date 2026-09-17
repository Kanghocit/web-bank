import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, Breadcrumbs } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { Disclaimer } from "@/components/JsonLd";
import { loanPage } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vay tín chấp VPBank online không thế chấp",
  description:
    "Hỗ trợ đăng ký vay tín chấp VPBank: không thế chấp tài sản, thủ tục online, chuyên viên tư vấn hồ sơ. Phê duyệt do ngân hàng quyết định.",
  alternates: { canonical: "/vay-tin-chap" },
  keywords: ["vay tín chấp VPBank", "vay không thế chấp", "vay tiêu dùng online"],
  openGraph: {
    title: "Vay tín chấp VPBank online không thế chấp",
    description:
      "Đăng ký tư vấn vay tín chấp VPBank. Không thế chấp tài sản, hỗ trợ hoàn thiện hồ sơ.",
    url: "/vay-tin-chap",
  },
};

export default function VayTinChapPage() {
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
              name: "Vay tín chấp",
              item: `${site.url}/vay-tin-chap`,
            },
          ],
        }}
      />
      <PageHero title={loanPage.h1} subtitle={loanPage.intro} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Trang chủ" },
          { label: "Vay tín chấp VPBank" },
        ]}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1.1fr_0.9fr] sm:px-6">
        <article className="prose-sm max-w-none space-y-4 text-ink">
          <h2 className="text-xl font-extrabold text-brand">Vay tín chấp VPBank phù hợp khi nào?</h2>
          <p>
            Vay tín chấp (vay tiêu dùng không tài sản đảm bảo) phù hợp khi bạn cần khoản tiền mặt
            trong thời gian ngắn-trung hạn mà không muốn thế chấp nhà hoặc xe. Hạn mức, lãi suất và
            kỳ hạn phụ thuộc lịch sử tín dụng, thu nhập và chính sách sản phẩm của VPBank tại thời
            điểm thẩm định.
          </p>
          <h2 className="text-xl font-extrabold text-brand">Quy trình hỗ trợ hồ sơ</h2>
          <ol className="list-decimal space-y-2 pl-5 text-muted">
            <li>Điền form đăng ký vay tín chấp trên trang này.</li>
            <li>Chuyên viên gọi xác nhận nhu cầu, số tiền và thời hạn dự kiến.</li>
            <li>Bạn cung cấp CCCD và thông tin theo hướng dẫn của ngân hàng.</li>
            <li>VPBank thẩm định và phản hồi kết quả. Chúng tôi không giải ngân thay ngân hàng.</li>
          </ol>
          <h2 className="text-xl font-extrabold text-brand">Lãi suất và kỳ hạn tham khảo</h2>
          <p>
            Mức lãi công bố tham khảo của nhiều gói tín chấp có thể từ khoảng 1,2%/tháng trên dư nợ
            giảm dần. Kỳ hạn phổ biến 12–60 tháng. Đây không phải lãi suất cam kết cho mọi hồ sơ.
            Phí bảo hiểm khoản vay (nếu tham gia) và phí khác được nêu trong hợp đồng ngân hàng.
          </p>
          <Disclaimer className="mt-4" />
        </article>
        <LeadForm defaultProduct="vay-tin-chap" compactTitle="ĐĂNG KÝ VAY TÍN CHẤP" />
      </div>
    </>
  );
}
