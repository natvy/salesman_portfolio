// src/components/Intro.tsx
import { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion";

type IntroProps = {
  onFinish: () => void;
};

export default function Intro({ onFinish }: IntroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;

    if (!container || !logo) {
      return;
    }

    if (prefersReducedMotion) {
      onFinish();
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: Power3.easeOut },
    });

    tl.fromTo(
      logo,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8 }
    )
      .to(logo, { scale: 1.05, duration: 0.4 })
      .to(container, { opacity: 0, duration: 0.5 })
      .add(() => {
        onFinish();
      });

    // 👇 aquí el cleanup es SIEMPRE una función que devuelve void
    return () => {
      tl.kill();
    };
  }, [onFinish, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <img
        ref={logoRef}
        src="/logo.gif"
        alt="Logo de inicio"
        className="w-40 h-40"
      />
    </div>
  );
}
