import { useEffect, useRef } from "react";
import gsap from "gsap";

interface IntroPageProps {
  onFinish: () => void;
}

export default function IntroPage({ onFinish }: IntroPageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const ranRef = useRef(false);

  useEffect(() => {
    if (ranRef.current) return;
    ranRef.current = true;

    const container = containerRef.current;
    const logo = logoRef.current;
    if (!container || !logo) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      logo,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8 }
    )
      .to(logo, {
        y: -200,
        scale: 0.5,
        duration: 0.8,
      })
      .to(container, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
      })
      .add(() => {
        onFinish();
      });

    return () => {
      tl.kill();
    };
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
    >
      <img
        ref={logoRef}
        src="/logo.png"
        alt="Logo"
        className="w-40 h-40 will-change-transform"
      />
    </div>
  );
}
