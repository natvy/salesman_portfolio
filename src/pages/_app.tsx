// src/pages/_app.tsx
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css"; // ajusta la ruta si tu archivo global está en otro lado

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Si estás en la raíz, manda a /intro
    if (router.pathname === "/") {
      router.replace("/intro");
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
