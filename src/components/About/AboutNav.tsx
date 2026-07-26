import { motion } from "framer-motion";
import { SECTIONS, SectionKey } from "./constants";
import localFont from "next/font/local";

const Square = localFont({
  src: "../../fonts/Geist.ttf",
  weight: "600",
  style: "normal",
  variable: "--font-scrambled",
});

interface Props {
  activeSection: SectionKey;
  onChange: (s: SectionKey) => void;
}

export default function AboutNavigation({ activeSection, onChange }: Props) {
  return (
    <div className={`${Square.className} absolute inset-x-0 top-[90%] flex justify-center`}>
      <div className="flex gap-32">
        {SECTIONS.map((sec) => {
          const active = sec === activeSection;
          return (
            <div key={sec} className="relative">
              <button
                onClick={() => onChange(sec)}
                className={`text-xl ${
                  active ? "text-white" : "text-white/60"
                }`}
              >
                {sec}
              </button>

              {active && (
                <motion.div
                  layoutId="about-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
