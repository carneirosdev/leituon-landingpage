import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const PACE = [
  {
    label: "Adiantado",
    body: "Vais à frente do que era preciso para chegar à data marcada.",
    color: "text-ahead",
    dot: "bg-ahead",
  },
  {
    label: "No ritmo",
    body: "As páginas que lês por dia chegam para acabar na data marcada.",
    color: "text-on-track",
    dot: "bg-on-track",
  },
  {
    label: "Atrasado",
    body: "Ao ritmo de agora não chegas à data — a app mostra quantas páginas por dia seriam precisas.",
    color: "text-behind",
    dot: "bg-behind",
  },
];

const RADIUS = 70;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const PROGRESS = 0.67;

export function PlanSection() {
  return (
    <section id="plano" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Plano e ritmo"
            title="A meta deixa de ser um palpite"
            description="Dizes quantos livros queres ler e até quando. A app transforma isso em páginas por dia e mostra-te, livro a livro, se o teu ritmo chega para cumprir."
          />

          <dl className="mt-10 space-y-5">
            {PACE.map((item) => (
              <div key={item.label} className="flex gap-3.5">
                <span
                  className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${item.dot}`}
                  aria-hidden="true"
                />
                <div>
                  <dt className={`text-sm font-bold ${item.color}`}>
                    {item.label}
                  </dt>
                  <dd className="text-pretty mt-0.5 text-sm leading-relaxed text-muted">
                    {item.body}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <p className="mt-9 rounded-2xl border border-line bg-surface px-5 py-4 text-sm leading-relaxed text-muted">
            <span className="font-semibold text-ink">Três meses, seis meses ou um ano.</span>{" "}
            Se mudares de ideias a meio do caminho, as contas refazem-se com o que
            já leste.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg viewBox="0 0 180 180" className="h-52 w-52 -rotate-90">
                  <circle
                    cx="90"
                    cy="90"
                    r={RADIUS}
                    fill="none"
                    stroke="var(--line)"
                    strokeWidth="14"
                  />
                  <circle
                    cx="90"
                    cy="90"
                    r={RADIUS}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={CIRCUMFERENCE * (1 - PROGRESS)}
                  />
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <p className="text-4xl font-extrabold tracking-tight text-ink">
                      8<span className="text-muted">/12</span>
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                      livros
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-sm font-semibold text-ink">
                Meta de seis meses · até 31 de dezembro
              </p>
              <p className="text-pretty mt-1.5 max-w-xs text-center text-sm leading-relaxed text-muted">
                Faltam 4 livros em 17 semanas. Ao ritmo das últimas quatro,
                acabas com 12 dias de folga.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-6 text-center">
              {[
                { value: "31", label: "páginas/dia" },
                { value: "12", label: "dias seguidos" },
                { value: "27", label: "já acabados" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold tracking-tight text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[0.7rem] leading-tight text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
