import { LeituOnMark } from "./logo";
import { Reveal } from "./reveal";
import { StoreButtons } from "./store-buttons";

export function FinalCta() {
  return (
    <section id="descarregar" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-line bg-canvas px-6 py-16 text-center sm:px-12">
          {/* O anel da marca, outra vez, agora a fechar a página. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-[2.5rem] border-accent/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-second/10 blur-3xl"
          />

          <div className="relative">
            <LeituOnMark className="mx-auto h-14 w-14 text-ink" />

            <h2 className="text-display mx-auto mt-7 max-w-2xl text-3xl font-extrabold text-ink sm:text-4xl">
              Tudo o que leres, registado e contado
            </h2>
            <p className="text-pretty mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Um livro, o número de páginas, uma data. O LeituOn trata das contas
              e guarda o histórico de tudo o que já leste.
            </p>

            <div className="mt-10">
              <StoreButtons />
            </div>

            <p className="mt-6 text-xs text-muted">
              Para iPhone e Android · em português
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
