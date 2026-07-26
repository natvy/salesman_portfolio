// src/components/Navbar/NavbarLogo.tsx
// Logo del Navbar, cambia según si está invertido o no.

import Link from "next/link";
import Logo from "../../icons/logo.svg";

interface NavbarLogoProps {
  isInverted: boolean;
}

const logoStyles = {
  inverted: "h-10 w-auto invert transition-all duration-500",
  normal: "h-10 w-auto transition-all duration-500",
};

export default function NavbarLogo({ isInverted }: NavbarLogoProps) {
  return (
    <Link
      href="/"
      className="h-10 flex items-center transition-opacity duration-300 hover:opacity-80"
    >
      <Logo
  className={
    isInverted
      ? logoStyles.inverted
      : logoStyles.normal
  }
/>
    </Link>
  );
}
