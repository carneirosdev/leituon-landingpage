import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    n: "01",
    title: "Põe os livros na estante",
    body: "Escreves o título, quantas páginas tem e, se quiseres, até quando o queres acabar. Os que ainda não começaste ficam à espera na lista de desejos.",
  },
  {
    n: "02",
    title: "Aponta o que leste",
    body: "Duas coisas: quantas páginas e em que dia. As contas, o progresso e a sequência mudam logo ali, sem fechar e abrir a app.",
  },
  {
    n: "03",
    title: "Vê onde estás",
    body: "Sempre que abres a app tens os números à frente: os dias seguidos de leitura, as páginas da semana e o estado de cada livro face à data que marcaste.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 border-y border-line bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Como funciona"
            title="Três passos, e depois é só ler"
            description="Não há nada para preparar nem listas para importar. Em dois minutos tens a estante montada e a primeira leitura apontada."
          />
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 110}>
              <li className="relative h-full rounded-2xl border border-line bg-canvas p-7">
                <span className="text-sm font-mono font-bold tracking-widest text-accent">
                  {step.n}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="text-pretty mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>

                {/* A seta liga os passos apenas quando estão lado a lado. */}
                {i < STEPS.length - 1 && (
                  <svg
                    viewBox="0 0 24 24"
                    className="absolute -right-5 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-line md:block"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h13M13 6l6 6-6 6" />
                  </svg>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
