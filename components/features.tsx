import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Feature = {
  title: string;
  body: string;
  /** Caminho SVG desenhado em traço, num viewBox de 24. */
  icon: string;
  accent?: "accent" | "second";
};

const FEATURES: Feature[] = [
  {
    title: "A sequência conta-se sozinha",
    body: "Cada dia em que registas leitura soma um dia à sequência, e vês logo há quantos dias seguidos vais. Se o dia estiver a acabar sem registo, a app pode avisar-te — só se quiseres.",
    icon: "M13.5 2c.6 3.2-.7 4.9-2.3 6.5C9.4 10.2 8 11.8 8 14.5a6 6 0 0 0 12 .3c0-2-.8-3.6-1.9-5.1-.3 1-.9 1.7-1.7 2 .6-3.6-1-6.7-2.9-9.7Z",
    accent: "accent",
  },
  {
    title: "Uma meta com data marcada",
    body: "Escolhes quantos livros queres ler em três meses, seis meses ou um ano. A app faz as contas e mostra-te quantos já levas, quantos faltam e se o ritmo até agora chega para a data.",
    icon: "M8 3v3M16 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM9 14l2 2 4-4",
    accent: "second",
  },
  {
    title: "A tua estante sempre arrumada",
    body: "De um lado os livros que estás a ler, do outro os que já acabaste. Em cada um vês quanto falta e se vais a tempo: adiantado, no ritmo ou atrasado.",
    icon: "M5 4h5v16H5zM12 4h3v16h-3zM17 5l3 15",
  },
  {
    title: "Apontar leva cinco segundos",
    body: "Escreves quantas páginas leste e em que dia. Quando chegas à última página, o livro dá-se por terminado sozinho e passa para os acabados.",
    icon: "M12 21a9 9 0 1 0-9-9M12 7v5l3 2M3 4v5h5",
  },
  {
    title: "Notas por livro",
    body: "Frases que te marcaram, ideias que queres pôr em prática, apontamentos soltos. Fica tudo junto do livro que os inspirou e fácil de reencontrar.",
    icon: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h5",
  },
  {
    title: "Lista de desejos",
    body: "Os livros que queres ler a seguir, pela ordem que te interessa. Quando começares um deles, passa para a estante com um toque, sem voltares a escrever nada.",
    icon: "M12 20.5 4.5 13a4.6 4.6 0 0 1 6.5-6.5l1 1 1-1a4.6 4.6 0 0 1 6.5 6.5Z",
  },
  {
    title: "Lembretes que escolhes",
    body: "Um toque diário à hora que te der jeito e um aviso quando o dia está a acabar sem nada registado. Desligas os dois quando quiseres — e a app não te pede nada disso logo na primeira abertura.",
    icon: "M18 9a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6M13.7 20a2 2 0 0 1-3.4 0",
  },
  {
    title: "Funciona sem internet",
    body: "Podes apontar a leitura no metro, no avião ou no meio do campo. Fica tudo guardado no telemóvel e actualiza-se sozinho mal voltes a ter ligação.",
    icon: "M5.5 18a4 4 0 0 1 .8-7.9 6 6 0 0 1 11.4-1.4A4.2 4.2 0 0 1 18.5 18ZM12 12v6M9.5 15.5 12 18l2.5-2.5",
  },
  {
    title: "Só tu vês o que lês",
    body: "A tua leitura é tua e mais ninguém lhe chega. Se quiseres, ainda podes exigir a impressão digital ou o teu rosto para abrir a app — e apagar a conta inteira no dia em que decidires.",
    icon: "M12 3l7 3v6c0 4.4-3 8-7 9-4-1-7-4.6-7-9V6ZM12 11a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM12 11v3.2",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Funcionalidades"
            title={
              <>
                Tudo o que leste, <em className="not-italic text-accent">em números</em>,
                no mesmo sítio
              </>
            }
            description="Está tudo ligado entre si: basta apontares o que leste para a sequência, o progresso do livro, as contas da semana e a tua meta mudarem de uma só vez."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={(i % 3) * 90}
            >
              <article className="group h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl ${
                    feature.accent === "accent"
                      ? "bg-accent/15 text-accent"
                      : feature.accent === "second"
                        ? "bg-second/15 text-second"
                        : "bg-elevated text-ink"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={feature.icon} />
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                  {feature.title}
                </h3>
                <p className="text-pretty mt-2 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
