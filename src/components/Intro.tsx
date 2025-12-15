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
  const container = containerRef.current;
  const logo = logoRef.current;
  const navbarLogo = document.getElementById("navbar-logo");

  if (!container || !logo || !navbarLogo) {
    return; // ✅ Esto devuelve void
  }

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
  });

  // 1. Fade in
  tl.fromTo(
    logo,
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.8 }
  );

  // 2. Movimiento hacia el navbar
  const navRect = navbarLogo.getBoundingClientRect();
  const logoRect = logo.getBoundingClientRect();

  const x = navRect.left - logoRect.left;
  const y = navRect.top - logoRect.top;

  tl.to(logo, {
    x,
    y,
    scale: 0.5,
    duration: 0.8,
  });

  // 3. Fade out del fondo
  tl.to(container, { opacity: 0, duration: 0.5 });

  // 4. Llamamos onFinish
  tl.add(() => onFinish());

  // ✅ Cleanup SIEMPRE devuelve void
  return () => {
    tl.kill(); // ✅ kill() devuelve void, no un Timeline
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
