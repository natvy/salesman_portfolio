// src/components/Navbar.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

type NavbarProps = {
  visible: boolean;
};

export default function Navbar({ visible }: NavbarProps) {
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.to(navRef.current, {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : -8,
      duration: 0.4,
      ease: "power2.out",
      pointerEvents: visible ? "auto" : "none",
    });
  }, [visible]);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200 opacity-0"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <img
          id="navbar-logo"
          src="/logo.png"
          alt="Logo"
          className="h-10 w-auto"
        />

        <nav className="flex gap-8 text-gray-700 font-medium">
          <a href="/Home" className="hover:text-black transition-colors">Home</a>
          <a href="/projects" className="hover:text-black transition-colors">Projects</a>
          <a href="/about" className="hover:text-black transition-colors">About me</a>
          <a href="/contact" className="hover:text-black transition-colors">Contact</a>
        </nav>
      </div>
    </div>
  );
}
