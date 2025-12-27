// src/components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";
const Scrambled = localFont({
  src: "../../public/fonts/Square.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-scrambled",
});

export default function Navbar({ visible }: { visible: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-[1130px] mx-auto px-6 h-16 flex items-center">
        
        {/* Logo a la izquierda */}
        <Link
          href="/"
          className="h-10 flex items-center hover:opacity-80 transition-opacity duration-200"
        >
          <img src="/logo.png" alt="Logo" className="h-10 w-auto ml-2" />
        </Link>

        {/* Empuja todo lo demás a la derecha */}
        <div className="ml-auto flex items-center">
          
          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className={`${Scrambled.className} text-white font-medium hover:text-[#FF2C65] transition-transform duration-200 hover:scale-105`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`${Scrambled.className} text-white font-medium hover:text-[#FF2C65] transition-transform duration-200 hover:scale-105`}
            >
              Projects
            </Link>
            <Link
              href="/about-me"
              className={`${Scrambled.className} text-white font-medium hover:text-[#FF2C65] transition-transform duration-200 hover:scale-105`}
            >
              About me
            </Link>
            <Link
              href="/contact"
              className={`${Scrambled.className} text-white font-medium hover:text-[#FF2C65] transition-transform duration-200 hover:scale-105`}
            >
              Contact
            </Link>
          </div>

          {/* Hamburger button - móvil */}
          <button
            className="md:hidden ml-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <img src="/icons/close.svg" alt="Close menu" className="h-6 w-6" />
            ) : (
              <img src="/icons/menu.svg" alt="Open menu" className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-200 shadow-md">

          <div className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/"
              className={`${Scrambled.className} text-white-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`${Scrambled.className} text-white-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105`}
            >
              Projects
            </Link>
            <Link
              href="/about-me"
              className={`${Scrambled.className} text-white-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105`}
            >
              About me
            </Link>
            <Link
              href="/contact"
              className={`${Scrambled.className} text-white-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
