import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

export default function IntroPage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const logo = logoRef.current;

    if (!container || !logo) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Fade in
    tl.fromTo(
      logo,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8 }
    );

    // 2. Movimiento hacia arriba (simulando navbar)
    tl.to(logo, {
      y: -200,
      scale: 0.5,
      duration: 0.8,
    });

    // 3. Fade out del fondo
    tl.to(container, { opacity: 0, duration: 0.5 });

    // 4. Redirigir a la página principal
    tl.add(() => {
      router.push("/");
    });

    return () => {
      tl.kill();
    }
  }, [router]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
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

