// src/pages/intro.tsx
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";

export default function IntroPage() {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!logoRef.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => void router.replace("/"), // Ignora la promesa
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8 }
    )
      .to(logoRef.current, { y: -100, scale: 0.5, duration: 0.8 })
      .to(logoRef.current, { opacity: 0, duration: 0.5 });
  }, [router]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img ref={logoRef} src="/logo.png" alt="Logo" className="w-40 h-40" />
    </div>
  );
}
