// src/components/Intro.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

type IntroProps = {
  onFinish: () => void;
};

export default function Intro({ onFinish }: IntroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const container = containerRef.current;

    if (!logo || !container) return;

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    tl.fromTo(
      logo,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.6 }
    )
      .to(logo, {
        y: -40,
        duration: 0.6,
      })
      .to(container, {
        opacity: 0,
        duration: 0.4,
      })
      .add(onFinish);

    return () => {
      tl.kill();
    };
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <img
        ref={logoRef}
        src="/logo.png"
        alt="Logo de inicio"
        className="w-40 h-40"
      />
    </div>
  );
}
