// src/components/Navbar.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion';

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, [prefersReducedMotion]);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200"
      role="navigation"
    >
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-gray-900">
          Salesman
        </Link>
        <nav className="flex gap-6 text-sm text-gray-700">
          <Link href="/projects" className="hover:text-gray-900 transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">About me</Link>
          <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
