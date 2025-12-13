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
    const navbarLogo = document.getElementById("navbar-logo");

    if (!container || !logo || !navbarLogo) {
      return;
    }


    if (prefersReducedMotion) {
      onFinish();
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: Power3.easeOut },
    });

    //aparece en el centro

    tl.fromTo(
      logo,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8 }
    );

    // 2. Se mueve hacia el logo del navbar
    tl.to(logo, {
      duration: 0.8,
      scale: 0.5,
      x: navbarLogo.getBoundingClientRect().left - window.innerWidth / 2 + 40,
      y: navbarLogo.getBoundingClientRect().top - window.innerHeight / 2 + 20,
    });

    // 3. Desvanece el fondo blanco
    tl.to(container, { opacity: 0, duration: 0.5 });

    // 4. Termina
    tl.add(() => onFinish());

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
        src="/logo.png"
        alt="Logo"
        className="w-40 h-40"
      />
    </div>
  );
}

