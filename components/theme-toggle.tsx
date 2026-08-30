"use client";

import { useSyncExternalStore } from "react";

/**
 * Alterna claro/escuro e guarda a escolha.
 *
 * A fonte de verdade é a classe `dark` no `<html>` — posta pelo script
 * anti-flash do `layout.tsx` antes da primeira pintura. O botão subscreve
 * essa classe em vez de guardar estado próprio, para nunca desenhar um ícone
 * que contradiz a página.
 */

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const isDarkNow = () => document.documentElement.classList.contains("dark");

/** No servidor não há tema conhecido: assume-se o claro, o estado por omissão. */
const isDarkOnServer = () => false;

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, isDarkNow, isDarkOnServer);

  function toggle() {
    const next = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("leituon-theme", next);
    } catch {
      // Navegação privada ou armazenamento bloqueado: a escolha vale só para
      // esta visita, o que é preferível a rebentar o botão.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
      className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-ink"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[1.15rem] w-[1.15rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
      >
        {isDark ? (
          <path d="M20.5 14.3A8.5 8.5 0 1 1 9.7 3.5a7 7 0 0 0 10.8 10.8Z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
          </>
        )}
      </svg>
    </button>
  );
}
