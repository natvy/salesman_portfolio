// src/components/Layout.tsx
import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Sin header; Navbar es fixed y está en la página */}
      <main className="flex-1">{children}</main>
      
    </div>
  );
}


