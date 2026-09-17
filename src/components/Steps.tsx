import { steps } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Steps() {
  return (
    <div className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:-mt-10 sm:px-6">
      <p className="relative z-20 mb-1! pb-1 ml-3 inline-block rounded-full bg-gold px-5 py-2 text-sm font-extrabold text-ink shadow sm:ml-6 sm:px-6 sm:text-base">
        Đăng ký chỉ với 4 bước
      </p>
      <div className="grid grid-cols-2 gap-3 pt-5 sm:gap-4 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 90}>
            <article className="card-lift rounded-[22px] bg-white px-4 py-5 pt-6 shadow-lg sm:px-5">
              <p className={`text-3xl font-extrabold ${step.color}`}>
                {step.n}
              </p>
              <h3
                className={`mt-1 text-sm font-bold leading-snug ${step.color}`}
              >
                {step.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                {step.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
