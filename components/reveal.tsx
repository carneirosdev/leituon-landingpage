"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Atraso em milissegundos, para escalonar cartões da mesma grelha. */
  delay?: number;
};

/**
 * Revela o conteúdo quando entra no ecrã. A animação vive no CSS (`.reveal`),
 * que já se anula sozinho em `prefers-reduced-motion`; aqui só se marca o
 * elemento como visível — e uma única vez, para não piscar ao voltar a subir.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.visible = "true";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
