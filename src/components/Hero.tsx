import { LeadForm } from "@/components/LeadForm";
import { HeroPhoto } from "@/components/HeroPhoto";
import { Steps } from "@/components/Steps";
import type { ProductValue } from "@/lib/lead-schema";

export function Hero({ defaultProduct }: { defaultProduct?: ProductValue }) {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-x-clip pt-24 sm:pt-28 lg:min-h-[78vh]">
        <HeroPhoto />
        <div className="relative z-10 mx-auto grid max-w-6xl items-end gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20">
          <div className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
            <h1 className="animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Vay tín chấp &amp;
              <span className="mt-1 block text-right text-5xl sm:text-6xl lg:text-7xl">mở thẻ</span>
              <span className="mt-1 block text-right font-semibold italic text-white/95">Online</span>
            </h1>
            <p className="animate-fade-up delay-1 mt-6 max-w-md text-base font-medium text-white/90 sm:text-lg">
              Không thế chấp tài sản
              <br />
              Thủ tục đơn giản, chuyên viên hỗ trợ hồ sơ VPBank
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
