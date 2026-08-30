import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export type LegalSection = {
  /** Serve de âncora no índice e no endereço da página. */
  id: string;
  title: string;
  body: ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  /** Data por extenso, como é lida na página. */
  updatedAt: string;
  intro: ReactNode;
  sections: LegalSection[];
};

/**
 * Molde das páginas de termos e de privacidade: mesma navegação da página
 * inicial, um índice no topo e o texto numa medida de leitura confortável.
 */
export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  intro,
  sections,
}: Props) {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-10 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H6M11 6l-6 6 6 6" />
          </svg>
          Voltar ao início
        </Link>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h1 className="text-display mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">
          Última atualização: {updatedAt}
        </p>

        <div className="legal mt-8 text-base">{intro}</div>

        <nav
          aria-label="Índice"
          className="mt-10 rounded-2xl border border-line bg-surface p-6"
        >
          <h2 className="text-sm font-semibold text-ink">Nesta página</h2>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2">
            {sections.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <span className="text-accent">{i + 1}.</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="legal mt-4">
          {sections.map((section) => (
            <section key={section.id}>
              <h2 id={section.id}>{section.title}</h2>
              {section.body}
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
