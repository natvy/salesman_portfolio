// src/components/Intro.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion';

type IntroProps = {
  onFinish: () => void;
};

export default function Intro({ onFinish }: IntroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null); // ahora tipamos directamente como imagen
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!containerRef.current || !logoRef.current) return;

    if (prefersReducedMotion) {
      onFinish();
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: onFinish,
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.9, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8 }
    )
      .to(logoRef.current, { scale: 1.05, duration: 0.5 })
      .to(containerRef.current, { opacity: 0, duration: 0.6 }, '>-0.1');

    return () => {
      tl.kill();
      gsap.set([logoRef.current, containerRef.current], { clearProps: 'all' });
    };
  }, [onFinish, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      aria-hidden="true"
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
