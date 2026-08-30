import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const QUESTIONS = [
  {
    q: "Preciso de internet para usar a app?",
    a: "No dia-a-dia, não. O que apontas fica guardado no próprio telemóvel, por isso podes registar leituras, notas e livros novos sem ligação nenhuma. Mal voltes a ter internet, fica tudo actualizado sozinho. Só para entrares na tua conta pela primeira vez é preciso estar ligado.",
  },
  {
    q: "Os meus dados de leitura são privados?",
    a: "São. O que lês é só teu: mais ninguém que use o LeituOn consegue ver os teus livros, as tuas notas ou o teu progresso. Se quiseres uma tranca extra, podes exigir a impressão digital ou o reconhecimento facial sempre que abres a app. E, se um dia quiseres sair, apagas a conta e tudo o que lá está com ela.",
  },
  {
    q: "A app funciona no meu telemóvel?",
    a: "Funciona em iPhone com iOS 16 ou mais recente e em telemóveis Android a partir da versão 10 — ou seja, na larguíssima maioria dos telemóveis dos últimos anos. Nos tablets também funciona, embora o ecrã esteja pensado para o telemóvel.",
  },
  {
    q: "O que acontece se falhar um dia?",
    a: "A sequência volta ao princípio — é isso que a torna uma sequência. Para que aconteça poucas vezes, recebes um aviso quando o dia está quase a acabar e ainda não leste nada, além do lembrete diário à hora que escolheres.",
  },
  {
    q: "Tenho de marcar o livro como terminado?",
    a: "Não precisas. Quando as páginas que apontas chegam à última do livro, ele passa sozinho para os acabados e conta para a tua meta.",
  },
  {
    q: "Posso ver a minha leitura fora do telemóvel?",
    a: "Sim. É a mesma conta LeituOn que já usas, por isso o que apontas no telemóvel aparece do outro lado — e ao contrário também.",
  },
];

export function Faq() {
  return (
    <section
      id="perguntas"
      className="scroll-mt-24 border-t border-line bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Perguntas"
            title="Antes de descarregares"
            description="O essencial sobre privacidade, telemóveis compatíveis e o que acontece quando a vida se mete no caminho da leitura."
          />
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {QUESTIONS.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 3) * 70}>
              {/* `details` nativo: acordeão acessível e funcional sem JS. */}
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                  <h3 className="text-base font-semibold text-ink sm:text-lg">
                    {item.q}
                  </h3>
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform group-open:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="text-pretty mt-3 max-w-2xl pr-12 text-sm leading-relaxed text-muted sm:text-base">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
