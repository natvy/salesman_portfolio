import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Layout from "../components/Layout";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const heroRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Animación del Hero
        gsap.fromTo(
            heroRef.current,
            { opacity: 0, y: -80 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
        );

        // Animación de las tarjetas con efecto stagger
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <Layout>
            <main className="flex flex-col items-center justify-center min-h-screen px-6">
                {/* Hero Section */}
                <section ref={heroRef} className="text-center py-20">
                    <h1 className="text-6xl font-bold mb-6">
                        Bienvenido a mi Portafolio
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Aquí encontrarás mis proyectos más recientes, con animaciones
                        fluidas y diseño minimalista.
                    </p>
                </section>

                {/* Projects Section */}
                <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
                    {[1, 2, 3].map((num, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                cardsRef.current[i] = el;
                            }}
                            className="border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 bg-white"
                        >
                            <img src={`/proyecto${num}.jpg`} alt={`Proyecto ${num}`} className="rounded-md mb-4" />
                            <h2 className="text-xl font-semibold">Proyecto {num}</h2>
                            <p className="text-gray-600">Descripción breve del proyecto {num}.</p>
                            <Link href={`/proyecto${num}`} className="text-blue-500 hover:underline">
                                Ver más →
                            </Link>
                        </div>
                    ))}
                </section>

                {/* Footer */}
                <footer className="w-full py-6 text-center text-gray-500 mt-20">
                    © 2025 Mi Portafolio — Contacto: email@ejemplo.com
                </footer>
            </main>
        </Layout>
    );
}
