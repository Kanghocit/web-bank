import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(120deg, #005c2e 0%, #00a651 55%, #2bbd6b 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.92 }}>Hỗ trợ hồ sơ VPBank</div>
        <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.15, marginTop: 16, maxWidth: 980 }}>
          Vay tín chấp & mở thẻ tín dụng Online
        </div>
        <div style={{ fontSize: 28, marginTop: 28, opacity: 0.95 }}>
          Không thế chấp tài sản · Tư vấn hồ sơ · Phê duyệt do ngân hàng
        </div>
      </div>
    ),
    { ...size },
  );
}
