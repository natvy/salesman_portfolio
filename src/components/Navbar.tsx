// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo destino */}
        <img
          id="navbar-logo"
          src="/logo.png"
          alt="Logo"
          className="h-10 w-auto"
        />

        {/* Links */}
        <nav className="flex gap-8 text-gray-700 font-medium">
          <a href="/Home" className="hover:text-black transition-colors">Home</a>
          <a href="/projects" className="hover:text-black transition-colors">Pojects</a>
          <a href="/about" className="hover:text-black transition-colors">About me</a>
          <a href="/contact" className="hover:text-black transition-colors">Contact</a>
        </nav>
      </div>
    </div>
  );
}
