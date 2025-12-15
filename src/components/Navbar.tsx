export default function Navbar(visible: { visible: boolean }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="brand">
          <h2>SALESMAN</h2>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
