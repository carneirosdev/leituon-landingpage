/*
 * Substituir os `href` pelos endereços reais assim que a app estiver
 * publicada na App Store e no Google Play.
 */
const APP_STORE_URL = "#";
const PLAY_STORE_URL = "#";

const APPLE_GLYPH =
  "M17.05 12.5c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.15-2.8.85-3.5.85-.7 0-1.85-.83-3.05-.8-1.55.02-3 .9-3.8 2.3-1.6 2.8-.4 7 1.15 9.3.77 1.13 1.68 2.4 2.87 2.35 1.16-.05 1.6-.75 3-.75s1.8.75 3.03.72c1.25-.02 2.04-1.14 2.8-2.28.88-1.3 1.24-2.57 1.26-2.64-.03-.01-2.4-.92-2.42-3.65ZM14.9 5.4c.63-.77 1.06-1.83.94-2.9-.9.04-2 .6-2.65 1.36-.58.68-1.1 1.77-.96 2.8 1.01.08 2.04-.5 2.67-1.26Z";

type BadgeProps = {
  href: string;
  small: string;
  big: string;
  children: React.ReactNode;
};

function StoreBadge({ href, small, big, children }: BadgeProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-3 text-ink transition-colors hover:border-accent/60 hover:bg-elevated"
    >
      {children}
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.65rem] uppercase tracking-wider text-muted">
          {small}
        </span>
        <span className="text-base font-semibold">{big}</span>
      </span>
    </a>
  );
}

export function StoreButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
      <StoreBadge href={APP_STORE_URL} small="Descarregar na" big="App Store">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d={APPLE_GLYPH} />
        </svg>
      </StoreBadge>

      <StoreBadge href={PLAY_STORE_URL} small="Disponível no" big="Google Play">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="2.5" width="18" height="19" rx="4" />
          <path d="M10 8.5v7l5.5-3.5z" fill="currentColor" />
        </svg>
      </StoreBadge>
    </div>
  );
}
