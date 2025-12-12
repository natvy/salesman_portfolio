// src/pages/index.tsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!introDone) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (heroRef.current) {
      tl.fromTo(
        heroRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8 }
      );
    }

    if (cardsRef.current.length) {
      tl.fromTo(
        cardsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
        "-=0.2"
      );
    }

    return () => {
      tl.kill(); // mata la animación
    };
  }, [introDone]);

  return (
    <Layout>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      {introDone && <Navbar />}

      <main className="min-h-screen px-6 pt-20">
        {/* Hero */}
        <section ref={heroRef} className="mx-auto max-w-4xl text-center py-16">
          <h1 className="text-5xl font-bold mb-4">
            Salesman - Portfolio
          </h1>
          <p className="text-lg text-gray-700">
            Proyectos del lindote del diego
          </p>
        </section>

        {/* Grid de proyectos */}
        <section className="mx-auto max-w-6xl grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((num, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 bg-white"
            >
              <img
                src={`/proyecto${num}.jpg`}
                alt={`Proyecto ${num}`}
                className="rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">Proyecto {num}</h2>
              <p className="text-gray-600">
                Descripción breve del proyecto {num}.
              </p>
              <Link
                href={`/proyecto${num}`}
                className="text-blue-600 hover:underline"
              >
                Ver más →
              </Link>
            </div>
          ))}
        </section>

        <footer className="w-full py-10 text-center text-gray-500">
          © 2025 Salesman. Todos los derechos reservados.
        </footer>
      </main>
    </Layout>
  );
}
