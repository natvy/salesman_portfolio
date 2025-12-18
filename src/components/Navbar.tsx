// src/components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";


export default function Navbar({ visible }: { visible: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-0 h-16 flex items-center justify-between">
        {/* Logo como botón */}
        <Link href="/" className="h-10 flex items-center hover:opacity-80 transition-opacity duration-200">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto ml-2" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">
            Home
          </Link>
          <Link href="/projects" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">
            Projects
          </Link>
          <Link href="/about me" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">
            About me
          </Link>
          <Link href="/contact" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">
            Contact
          </Link>
        </div>

        {/* Hamburger button - solo en móvil */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/*icono de hamburguesa o cierre dependiendo del estado */}
          {menuOpen ? (
            <img src="/icons/close.svg" alt="Close menu" className="h-6 w-6" />
          ) : (
            <img src="/icons/menu.svg" alt="Open menu" className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-md">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link href="/" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">
              Home
            </Link>
            <Link href="/projects" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">
              Projects
            </Link>
            <Link href="/about me" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">
              About me
            </Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
