export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-muted ${className}`}>
      Trang tư vấn / hỗ trợ hồ sơ, không phải website chính thức của VPBank. Lãi suất, phí, hạn mức
      và quyết định cấp tín dụng do ngân hàng ban hành theo từng hồ sơ.
    </p>
  );
}
