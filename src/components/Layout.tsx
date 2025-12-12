import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      
      {/* Header */}
      <header className="w-full p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Mi Portafolio</h1>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full p-4 bg-gray-100 text-center text-sm text-gray-600">
        © 2025 Natalia. Todos los derechos reservados.
      </footer>
    </div>
  );
}
