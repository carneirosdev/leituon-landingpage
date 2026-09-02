import { PhoneMockup } from "./phone-mockup";
import { Reveal } from "./reveal";

const PROOF = [
  { value: "iPhone e Android", label: "a mesma app nos dois" },
  { value: "Em português", label: "feita para quem lê em português" },
  { value: "Sem internet", label: "aponta a leitura onde estiveres" },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      {/* Anel de progresso ampliado — o motivo da marca a servir de fundo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full border-[3rem] border-line/60 opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-second/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28 lg:pt-20">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Para iPhone e Android · em português
            </span>

            <h1 className="text-display mt-6 text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              O teu tracker pessoal
              <br />
              de <span className="text-accent">leitura</span>.
            </h1>

            <p className="text-pretty mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Ler todos os dias raramente falha por falta de vontade. Falha
              porque ninguém anda a fazer as contas. O LeituOn regista o que
              leste e mostra-te os números: páginas por dia, quanto falta para
              acabar cada livro e há quantos dias seguidos não falhas.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#descarregar"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-on-primary transition-opacity hover:opacity-90"
              >
                Começar a ler
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#funcionalidades"
                className="inline-flex items-center justify-center rounded-full border border-line bg-surface px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-elevated"
              >
                Ver o que faz
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
              {PROOF.map((item) => (
                <div key={item.label}>
                  <dt className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-muted">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:pl-6">
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}
