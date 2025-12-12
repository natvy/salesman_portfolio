import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return <h1 ref={ref}>{children}</h1>;
}
