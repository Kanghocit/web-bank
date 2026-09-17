import type { Metadata } from "next";
import { PageHero, Breadcrumbs } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description: `Cách ${site.shortName} thu thập và sử dụng thông tin khi bạn đăng ký tư vấn vay tín chấp hoặc mở thẻ tín dụng VPBank.`,
  alternates: { canonical: "/chinh-sach-bao-mat" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Chính sách bảo mật"
        subtitle="Chúng tôi chỉ dùng thông tin đăng ký để liên hệ tư vấn hồ sơ. Không bán dữ liệu cho bên thứ ba không liên quan."
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Trang chủ" },
          { label: "Chính sách bảo mật" },
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-10 text-ink sm:px-6">
        <h2 className="text-lg font-bold">1. Dữ liệu thu thập</h2>
        <p>
          Khi bạn gửi form, chúng tôi nhận họ tên, email, số điện thoại, quốc tịch, loại nhu cầu
          (vay / thẻ), số tiền vay (nếu có) và hình thức thu nhập.
        </p>
        <h2 className="text-lg font-bold">2. Mục đích sử dụng</h2>
        <p>
          Liên hệ tư vấn, hỗ trợ hoàn thiện hồ sơ gửi ngân hàng, và cải thiện chất lượng hỗ trợ. Chúng
          tôi không phải VPBank và không dùng dữ liệu để mở tài khoản thay bạn nếu chưa có sự đồng ý.
        </p>
        <h2 className="text-lg font-bold">3. Lưu trữ</h2>
        <p>
          Dữ liệu có thể được lưu trên Google Sheet và gửi tới email thông báo nội bộ. Thời gian lưu
          phù hợp với mục đích tư vấn; bạn có thể yêu cầu chỉnh sửa hoặc xóa qua {site.email}.
        </p>
        <h2 className="text-lg font-bold">4. Chia sẻ</h2>
        <p>
          Thông tin hồ sơ có thể được chuyển cho VPBank hoặc đối tác xử lý hồ sơ khi bạn đồng ý tiếp
          tục đăng ký sản phẩm. Không bán danh sách liên hệ.
        </p>
        <h2 className="text-lg font-bold">5. Liên hệ</h2>
        <p>
          Email {site.email} · Điện thoại {site.phoneDisplay}.
        </p>
      </article>
    </>
  );
}
