// src/components/Navbar/Navbar.tsx
// no sabe como se ve la pantalla, ni maneja eventos finos, solo conecta piezas.

import localFont from "next/font/local";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarMobile from "./NavbarMobile";
import { useRouter } from "next/router";
import { useState } from "react";
import { useNavbarState } from "./useNavbarState";

const Scrambled = localFont({
  src: "../../fonts/Geist.ttf",
  weight: "600",
  style: "normal",
});

export default function Navbar({ inverted }: { inverted?: boolean }) {
  const router = useRouter();
  const state = useNavbarState(inverted);
  const isHome = router.pathname === "/";
  const isInvertedResolved: boolean = isHome ? inverted ?? true : true;
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-[60] backdrop-blur-md border-b shadow-sm
        transition-colors duration-500
        ${
          state.isInverted
            ? "bg-black border-gray-800"
            : "bg-white border-gray-200"
        }
      `}
    >
      <nav className="max-w-[1130px] mx-auto px-6 h-16 flex items-center">
        <NavbarLogo isInverted={isInvertedResolved} />

        <NavbarLinks font={Scrambled.className} state={state} />
      </nav>

      <NavbarMobile
        state={{
          menuOpen,
          setMenuOpen,
          isInverted: isInvertedResolved,
          copy,
        }}
      />
    </header>
  );
}
