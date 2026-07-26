// src/components/Navbar/NavbarContacts.tsx
// Componente para el botón de contacto en el Navbar, maneja la apertura del menú de contacto y la copia al portapapeles.

import { useState } from "react";
import IgLogo from "../../icons/instagram.svg";
import XLogo from "../../icons/x.svg";
import LinkedinLogo from "../../icons/linkedin.svg";
import PatreonLogo from "../../icons/patreon.svg";
import MailLogo from "../../icons/mail.svg";
import PhoneLogo from "../../icons/phone.svg";

interface NavbarContactProps {
  textStyle: string;
  state: {
    contactOpen: boolean;
    setContactOpen: (value: boolean) => void;
    isInverted: boolean;
    copy: (text: string, label: string) => void;
  };
}

export default function NavbarContact({
  textStyle,
  state,
}: NavbarContactProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    state.copy(text, label);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  const iconClass = `h-5 w-5 transition-[filter,transform] duration-500 ${
    state.isInverted ? "invert" : ""
  }`;

  return (
    <div className="relative">
      <button
        onClick={() => state.setContactOpen(!state.contactOpen)}
        className={textStyle}
      >
        CONTACT
      </button>

      {state.contactOpen && (
        <div
          className={`
            absolute top-14 right-0 rounded-md shadow-lg px-4 py-3
            flex flex-col gap-3
            sm:flex-col
            ${
              state.isInverted
                ? "bg-black border border-gray-700"
                : "bg-white border border-gray-200"
            }
          `}
        >
          {/* Redes sociales */}
          <div className="flex flex-row justify-center gap-4 sm:flex-col sm:justify-start sm:gap-3">
            <a
              href="https://linkedin.com/in/user"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <LinkedinLogo className={iconClass} />
            </a>

            <a
              href="https://instagram.com/holmesmdevolviolasganasdevivir"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <IgLogo className={iconClass} />
            </a>

            <a
              href="https://x.com/user"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <XLogo className={iconClass} />
            </a>

            <a
              href="https://patreon.com/user"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <PatreonLogo className={iconClass} />
            </a>
          </div>

          {/* Separador */}
          <div className="hidden sm:block w-full h-px bg-gray-400 opacity-20 my-2" />

          {/* Contacto directo */}
          <div className="flex flex-row justify-center gap-4 sm:flex-col sm:justify-start sm:gap-3">
            <button
              onClick={() =>
                handleCopy("patolomeo@tutata.com", "Email copiado")
              }
              className="flex items-center gap-1 transition-transform duration-300 hover:scale-110"
            >
              <MailLogo className={iconClass} />
            </button>

            <button
              onClick={() =>
                handleCopy("+52 6969 6969 69", "Teléfono copiado")
              }
              className="flex items-center gap-1 transition-transform duration-300 hover:scale-110"
            >
              <PhoneLogo className={iconClass} />
            </button>
          </div>

          {/* Toast */}
          {copied && (
            <div className="absolute -top-8 right-0 rounded bg-black px-3 py-1 text-xs text-white">
              {copied}
            </div>
          )}
        </div>
      )}
    </div>
  );
}