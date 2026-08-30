import Link from "next/link";

import { LeituOnLogo } from "./logo";

const COLUMNS = [
  {
    title: "Produto",
    links: [
      { label: "Funcionalidades", href: "/#funcionalidades" },
      { label: "Como funciona", href: "/#como-funciona" },
      { label: "Plano e ritmo", href: "/#plano" },
      { label: "Descarregar", href: "/#descarregar" },
    ],
  },
  {
    title: "Apoio",
    links: [
      { label: "Perguntas frequentes", href: "/#perguntas" },
      { label: "Contacto", href: "mailto:ola@leituon.app" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Políticas de Privacidade", href: "/privacidade" },
      { label: "Termos e Serviços", href: "/termos" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" aria-label="LeituOn — início">
              <LeituOnLogo />
            </Link>
            <p className="text-pretty mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Acompanhamento pessoal de leitura para quem quer voltar a acabar
              os livros que começa.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => {
                  const style =
                    "text-sm text-muted transition-colors hover:text-ink";
                  return (
                    <li key={link.label}>
                      {link.href.startsWith("mailto:") ? (
                        <a href={link.href} className={style}>
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={style}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LeituOn. Todos os direitos reservados.</p>
          <p>by GQUENDE</p>
        </div>
      </div>
    </footer>
  );
}
