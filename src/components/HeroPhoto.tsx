"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroPhoto() {
  const rootRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const kenRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const parallax = parallaxRef.current;
    const ken = kenRef.current;
    if (!root || !parallax || !ken) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ken,
        { scale: 1, xPercent: 0, yPercent: 0 },
        {
          scale: 1.06,
          xPercent: -2,
          yPercent: 2,
          duration: 18,
          ease: "none",
          repeat: -1,
          yoyo: true,
        },
      );

      gsap.to(parallax, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div ref={parallaxRef} className="absolute inset-0">
        <div ref={kenRef} className="absolute -inset-[4%]">
          <Image
            src="/images/vpbank-facade.jpg"
            alt=""
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[center_35%] contrast-[1.08] saturate-[1.15]"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#042f40]/55 via-[#0b4d66]/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />
    </div>
  );
}
