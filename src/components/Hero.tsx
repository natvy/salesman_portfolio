import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <section ref={heroRef} className="max-w-4xl mx-auto text-center py-20 fade-in">
      <h1 className="text-4xl font-bold mb-4">portafolio</h1>
      <p className="text-gray-600">Arquitectura</p>
    </section>
  );
}
