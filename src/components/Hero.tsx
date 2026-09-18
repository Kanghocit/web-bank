import { LeadForm } from "@/components/LeadForm";
import { HeroPhoto } from "@/components/HeroPhoto";
import { Steps } from "@/components/Steps";
import type { ProductValue } from "@/lib/lead-schema";

export function Hero({ defaultProduct }: { defaultProduct?: ProductValue }) {
  return (
    <>
      <section className="relative min-h-[72vh] overflow-x-clip pt-24 sm:pt-28 lg:min-h-[80vh]">
        <HeroPhoto />
        <div className="relative z-10 mx-auto grid max-w-6xl items-end gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-24">
          <div className="text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
            <p className="animate-fade-up text-sm font-semibold tracking-wide text-white/85">
              Tư vấn hồ sơ vay tín chấp & mở thẻ
            </p>
            <h1 className="animate-fade-up mt-3 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Vay tín chấp &amp;{" "}
              <span className="block text-right italic font-semibold text-white">mở thẻ Online</span>
            </h1>
            <p className="animate-fade-up delay-1 mt-6 max-w-md text-base font-medium text-white/90 sm:text-lg">
              Không thế chấp tài sản. Thủ tục đơn giản, chuyên viên hỗ trợ hồ sơ VPBank.
            </p>
          </div>
          <div className="animate-fade-in-right delay-1">
            <LeadForm defaultProduct={defaultProduct} />
          </div>
        </div>
      </section>
      <Steps />
    </>
  );
}
