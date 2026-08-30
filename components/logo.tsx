type MarkProps = {
  className?: string;
};

/**
 * A marca gráfica: anel de progresso quase fechado com o marcador âmbar na
 * ponta e um livro aberto ao centro — o mesmo desenho de `leituon_icon.svg`.
 *
 * O traço estrutural usa `currentColor` em vez do ardósia fixo do ficheiro
 * original: assim o logótipo continua legível sobre o fundo escuro.
 */
export function LeituOnMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="256"
        cy="256"
        r="170"
        stroke="var(--line)"
        strokeWidth="24"
      />
      <path
        d="M 256 86 A 170 170 0 1 1 108.78 171"
        stroke="currentColor"
        strokeWidth="24"
        strokeLinecap="round"
      />
      <circle cx="108.78" cy="171" r="16" fill="var(--accent)" />

      <path d="M256 196 L176 212 L176 300 L256 316 Z" fill="currentColor" />
      <path d="M256 196 L336 212 L336 300 L256 316 Z" fill="var(--second)" />
      <path
        d="M196 224 L236 216 M196 246 L236 238 M196 268 L230 261"
        stroke="var(--canvas)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M316 224 L276 216 M316 246 L276 238 M316 268 L282 261"
        stroke="var(--canvas)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.35"
      />
      <rect x="251" y="196" width="10" height="120" fill="var(--canvas)" />
    </svg>
  );
}

type LogoProps = {
  /** Esconde a assinatura por baixo do nome — usado na barra de navegação. */
  compact?: boolean;
};

export function LeituOnLogo({ compact = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LeituOnMark className="h-9 w-9 shrink-0 text-ink" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.35rem] font-bold tracking-tight text-ink">
          Leitu<span className="text-accent">On</span>
        </span>
        {!compact && (
          <span className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted">
            Sempre no seu ritmo
          </span>
        )}
      </span>
    </span>
  );
}
