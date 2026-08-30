"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { LeituOnLogo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { href: "/#funcionalidades", label: "Funcionalidades" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#plano", label: "Plano e ritmo" },
  { href: "/#perguntas", label: "Perguntas" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Com o menu aberto o fundo não deve deslizar por baixo dele.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-line bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="rounded-lg" aria-label="LeituOn — início">
          <LeituOnLogo compact />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#descarregar"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Começar a ler
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="menu-movel"
          className="border-t border-line bg-canvas px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col" aria-label="Principal (móvel)">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#descarregar"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-on-primary"
            >
              Começar a ler
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
