// src/components/Navbar.tsx
import { useRef, useEffect } from "react";
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
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <img id="navbar-logo" src="/logo.png" alt="Logo" className="h-10 w-auto" />

        <nav className="flex gap-8 font-medium text-gray-700">
          {["Home", "Projects", "About me", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "")}`}
              className="relative hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
