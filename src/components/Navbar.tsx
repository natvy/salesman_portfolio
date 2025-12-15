export default function Navbar(visible: { visible: boolean }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Links */}
        <ul className="flex items-center gap-10">
          {["Inicio", "Proyectos", "Sobre mí", "Contacto"].map((item, i) => (
            <li
              key={i}
              className="
                text-gray-700 font-medium cursor-pointer 
                transition-transform duration-200 
                hover:scale-110 hover:text-black
              "
            >
              {item}
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}
