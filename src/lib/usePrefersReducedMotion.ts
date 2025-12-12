import { useEffect, useState } from 'react';

export function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Establecemos el estado inicial fuera del render inmediato
    const update = () => setReduce(mq.matches);

    // Llamamos la función una sola vez ya dentro del efecto
    update();

    // Suscribimos al evento de cambio
    mq.addEventListener('change', update);

    return () => {
      mq.removeEventListener('change', update);
    };
  }, []);

  return reduce;
}

