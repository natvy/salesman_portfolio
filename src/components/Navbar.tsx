// src/components/Navbar.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <img id="navbar-logo" src="/logo.gif" alt="Logo" className="h-10 w-auto" />


        {/* Links */}
        <nav className="flex gap-8 text-gray-700 font-medium">
          <a href="/Home" className="hover:text-black transition-colors">Home</a>
          <a href="/projects" className="hover:text-black transition-colors">Projets</a>
          <a href="/about" className="hover:text-black transition-colors">About me</a>
          <a href="/contact" className="hover:text-black transition-colors">Contact</a>
        </nav>
      </div>
    </div>
  );
}
