import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="w-full p-6 bg-white shadow-md">
        {/* poner un logo más adelante */}
      </header>

      {/* Contenido principal */}
      <main className="flex-1 p-6">{children}</main>

    </div>
  );
}
