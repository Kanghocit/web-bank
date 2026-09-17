import { LeadForm } from "@/components/LeadForm";
import { Steps } from "@/components/Steps";
import type { ProductValue } from "@/lib/lead-schema";

export function Hero({ defaultProduct }: { defaultProduct?: ProductValue }) {
  return (
    <>
    <section className="relative overflow-x-clip hero-bg pt-24 sm:pt-28">
      <LeafDecor />
      <div className="relative mx-auto grid max-w-6xl items-end gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20">
        <div className="text-white">
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

function LeafDecor() {
  return (
    <svg
      className="pointer-events-none absolute -left-10 top-10 h-[520px] w-[520px] animate-float-leaf opacity-25"
      viewBox="0 0 400 400"
      aria-hidden
    >
      <path
        fill="none"
        stroke="white"
        strokeWidth="10"
        d="M210 30c10 70 40 120 110 160-70 40-100 100-110 180-10-80-40-140-110-180 70-40 100-90 110-160Z"
      />
      <path fill="none" stroke="white" strokeWidth="8" d="M210 30v340" />
    </svg>
  );
}
