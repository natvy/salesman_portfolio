import Link from "next/link";

export default function Navbar(visible: { visible: boolean }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        <div className="flex gap-8">
          <Link href="/" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">Home</Link>
          <Link href="/projects" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">Projects</Link>
          <Link href="/about me" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">About me</Link>
          <Link href="/contact" className="text-gray-700 font-medium hover:text-black transition-transform duration-200 hover:scale-105">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
