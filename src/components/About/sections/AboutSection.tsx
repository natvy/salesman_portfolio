import { motion } from "framer-motion";
import localFont from "next/font/local";

const Square = localFont({
  src: "../../../fonts/Geist.ttf",
  weight: "600",
  style: "normal",
  variable: "--font-scrambled",
});

export default function AboutSection() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-12 mt-24 text-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className={`${Square.className} text-3xl font-bold mb-4 max-w-[950px] mx-auto`}>
        SOBRE MI
      </h3>

      <p className="mb-6 max-w-[950px] mx-auto">
        Desde que tengo memoria, siempre me ha atraído imaginar mis espacios y
        darles forma, ademas del arte, cuya expresion aplicada a espacios puede
        traer todo tipo de emociones. No puedo decir con certeza si nací con
        talento para ello, pero sí sé que encontraba una satisfacción profunda
        al ver cómo otros podían admirar y disfrutar lo que yo había concebido.
      </p>

      <p className="mb-6 max-w-[950px] mx-auto">
        Cuando descubrí la arquitectura, sentí que era el punto de encuentro
        entre dos mundos que siempre me habían fascinado: el arte y mi espacio.
        Entender que un edificio podía ser, al mismo tiempo, inspiracion, una
        idea, un refugio y una solución concreta me empujó a sumergirme por
        completo en este camino, sin mirar atrás.
      </p>

      <p className="mb-6 max-w-[950px] mx-auto">
        Hoy diseño espacios con la esperanza de que no solo se vean bien, sino
        que mejoren la vida de quienes los usan. Construyo para dejar huella,
        para que cada proyecto tenga sentido y valor en el mundo que habitamos.
      </p>

      {/* Extra facts */}
      <div className="mb-15 max-w-[950px] mx-auto">
        <span className="mb-6 text-sm text-[#9d9b9c]">Some extra facts</span>

        <p className="mb-4">Recently, I've been:</p>

        <p className="mb-1">☕️ Tomando mas de 3 tazas de cafe al dia.</p>
        <hr className="border-t border-neutral-300 my-1" />

        <p className="mb-1">🐖 Leyendo "Rebelion en la granja".</p>
        <hr className="border-t border-neutral-300 my-1" />

        <p className="mb-6">
          🧦 Considerando comprar un par de esos clcetines con garantia de por
          vida.
        </p>
      </div>

      {/* Experience */}
      <div className="mb-15 max-w-[950px] mx-auto">
        <span className="mb-6 text-sm text-[#9d9b9c]">Experience</span>

        <p className="mb-4">
          Con 20 años de servicio a la comunidad, entre mis skills destacan:
        </p>

        <p className="mb-1">- Tres años de relacion con una mujer dificil.</p>
        <hr className="border-t border-neutral-300 my-1" />

        <p className="mb-1">
          - Toda la trayectoria para ser el ceo de Microsoft.
        </p>
        <hr className="border-t border-neutral-300 my-1" />

        <p className="mb-6">- Ya casi llega a maistro de la obra.</p>
      </div>

      {/* Education */}
      <div className="mb-15 max-w-[950px] mx-auto">
        <span className="mb-6 text-sm text-[#9d9b9c]">Education</span>

        <p className="mb-1">
          Estudios de arquitectura en la Universidad de Sonora, Hermosillo.
        </p>
        <p className="mb-3">2024 - 2029.</p>
      </div>
    </motion.div>
  );
}
