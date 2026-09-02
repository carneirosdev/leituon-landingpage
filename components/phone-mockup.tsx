const WEEK = [
  { day: "S", pages: 24 },
  { day: "T", pages: 38 },
  { day: "Q", pages: 12 },
  { day: "Q", pages: 45 },
  { day: "S", pages: 30 },
  { day: "S", pages: 52 },
  { day: "D", pages: 18, today: true },
];

const MAX_PAGES = Math.max(...WEEK.map((d) => d.pages));

/** Altura da barra mais alta do gráfico. */
const BAR_MAX_REM = 3.25;

/**
 * Retrato do dashboard da app (RF-DASH): sequência, estatísticas agregadas,
 * páginas por dia da semana e o estado de cada livro face ao ritmo necessário.
 *
 * É desenhado em marcação em vez de ser uma captura de ecrã para acompanhar o
 * tema claro/escuro do site e continuar nítido em qualquer densidade.
 */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[17.5rem] sm:w-[19.5rem]">
      {/* Halo âmbar por trás do aparelho. */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="rounded-[2.75rem] border border-line bg-surface p-2.5 shadow-2xl shadow-slate-900/15 dark:shadow-black/40">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-canvas">
          {/* Barra de estado e recorte da câmara. */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[0.65rem] font-semibold text-ink">
            <span>9:41</span>
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-surface"
            />
            <span className="flex items-center gap-1 text-muted">
              <svg viewBox="0 0 24 12" className="h-2.5 w-6" fill="currentColor" aria-hidden="true">
                <rect x="0" y="2" width="18" height="8" rx="2.5" opacity="0.35" />
                <rect x="1.5" y="3.5" width="12" height="5" rx="1.5" />
                <rect x="20" y="4.5" width="2" height="3" rx="1" opacity="0.35" />
              </svg>
            </span>
          </div>

          <div className="space-y-3 px-4 pb-20 pt-3">
            <div>
              <p className="text-[0.6rem] uppercase tracking-widest text-muted">
                Domingo, 30 de agosto
              </p>
              <h3 className="text-base font-bold tracking-tight text-ink">
                A tua leitura
              </h3>
            </div>

            {/* Sequência (RF-STREAK-04). */}
            <div className="flex items-center gap-3 rounded-2xl bg-accent px-3.5 py-3 text-slate-900">
              <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M13.5 2c.6 3.2-.7 4.9-2.3 6.5C9.4 10.2 8 11.8 8 14.5a6 6 0 0 0 12 .3c0-2-.8-3.6-1.9-5.1-.3 1-.9 1.7-1.7 2 .6-3.6-1-6.7-2.9-9.7Z" />
                <path d="M8.2 12.6c-1.4 1.2-2.2 2.6-2.2 4.2a5 5 0 0 0 2.6 4.4A6 6 0 0 1 8 14.5c0-.7.1-1.3.2-1.9Z" opacity="0.5" />
              </svg>
              <div className="leading-tight">
                <p className="text-lg font-extrabold">12 dias seguidos</p>
                <p className="text-[0.68rem] font-medium opacity-80">
                  Último registo: hoje, 18 páginas.
                </p>
              </div>
            </div>

            {/* Estatísticas agregadas (RF-DASH-03). */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "3", label: "A ler" },
                { value: "27", label: "Concluídos" },
                { value: "219", label: "Páginas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-line bg-surface px-2 py-2 text-center"
                >
                  <p className="text-sm font-bold text-ink">{stat.value}</p>
                  <p className="text-[0.55rem] uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Páginas por dia da semana (RF-DASH-02). */}
            <div className="rounded-2xl border border-line bg-surface p-3">
              <p className="mb-2 text-[0.65rem] font-semibold text-muted">
                Esta semana
              </p>
              <div className="flex items-end justify-between gap-1.5">
                {WEEK.map((d, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    {/* Altura em rem, e não em percentagem: a coluna não tem
                        altura definida, logo uma percentagem colapsaria a zero. */}
                    <div
                      className={`w-full rounded-sm ${
                        d.today ? "bg-accent" : "bg-second/70"
                      }`}
                      style={{ height: `${(d.pages / MAX_PAGES) * BAR_MAX_REM}rem` }}
                    />
                    <span className="text-[0.55rem] text-muted">{d.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Livro em curso, com estado face ao prazo (RF-LIB, RF-PLANO). */}
            <div className="space-y-2 rounded-2xl border border-line bg-surface p-3">
              <div className="flex gap-2.5">
                <div className="h-14 w-10 shrink-0 rounded-md bg-gradient-to-br from-second to-second/50" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[0.78rem] font-semibold text-ink">
                    Hábitos Atómicos
                  </p>
                  <p className="truncate text-[0.62rem] text-muted">James Clear</p>
                  <span className="mt-1 inline-block rounded-full bg-ahead/15 px-1.5 py-0.5 text-[0.55rem] font-semibold text-ahead">
                    Adiantado
                  </span>
                </div>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-line">
                <div className="h-full w-[64%] rounded-full bg-ink" />
              </div>
              <div className="flex justify-between text-[0.58rem] text-muted">
                <span>206 / 320 páginas</span>
                <span className="font-semibold text-ink">64%</span>
              </div>
            </div>

            {/* Alerta inteligente (RF-DASH-04). */}
            <div className="flex items-start gap-2 rounded-2xl border border-behind/30 bg-behind/10 px-3 py-2.5">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-behind text-[0.6rem] font-bold text-white">
                !
              </span>
              <p className="text-[0.62rem] leading-snug text-ink">
                <span className="font-semibold">Ensaio sobre a Cegueira</span> está
                atrasado: precisas de 14 páginas por dia até 15 de setembro.
              </p>
            </div>
          </div>

          {/* Barra de navegação e atalho para registar sessão (RF-DASH-05). */}
          <div className="absolute inset-x-0 bottom-0 border-t border-line bg-surface/95 px-6 pb-4 pt-2.5 backdrop-blur">
            <div className="flex items-center justify-between text-[0.5rem] font-medium">
              {[
                { label: "Início", active: true, d: "M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1Z" },
                { label: "Biblioteca", d: "M5 4h5v16H5zM12 4h3v16h-3zM17 5l3 15" },
                { label: "Notas", d: "M6 3h9l4 4v14H6zM15 3v4h4" },
                { label: "Perfil", d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 21a7 7 0 0 1 14 0" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex flex-col items-center gap-0.5 ${
                    item.active ? "text-accent" : "text-muted"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={item.d} />
                  </svg>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-20 right-3.5 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-canvas shadow-lg">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
