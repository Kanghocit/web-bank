import { steps } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Steps() {
  return (
    <div className="relative z-10 mx-auto -mt-12 max-w-6xl px-4 sm:-mt-14 sm:px-6">
      <div className="rounded-[28px] bg-white p-4 shadow-[0_16px_50px_rgb(0,80,40,0.12)] sm:p-6">
        <p className="mb-4 inline-block rounded-full bg-gold px-5 py-2 text-sm font-extrabold text-ink sm:text-base">
          Đăng ký chỉ với 4 bước
        </p>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <article className="card-lift rounded-2xl bg-[#f6faf7] px-4 py-5 sm:px-5">
                <p className={`text-3xl font-extrabold ${step.color}`}>{step.n}</p>
                <h3 className={`mt-1 text-sm font-bold leading-snug ${step.color}`}>{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{step.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
