import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/legal-page";
import { OPERADOR } from "@/lib/operador";

export const metadata: Metadata = {
  title: "Termos e Serviços",
  description:
    "As regras de utilização do LeituOn, escritas em linguagem simples: a tua conta, o que é teu, quanto custa e como sair.",
};

const ATUALIZADO_EM = "30 de agosto de 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "quem-somos",
    title: "Quem está por trás do LeituOn",
    body: (
      <>
        <p>
          O LeituOn é uma aplicação de acompanhamento de leitura para telemóvel,
          gerida por <strong>{OPERADOR.nome}</strong>, com o número de
          contribuinte {OPERADOR.nif} e sede em {OPERADOR.morada}.
        </p>
        <p>
          Ao criares conta e usares a app, estás a aceitar as regras desta
          página. Se houver aqui alguma coisa com que não concordes, o melhor é
          não usar o LeituOn — e, se preferires, escreve-nos primeiro para{" "}
          <a href={`mailto:${OPERADOR.email}`}>{OPERADOR.email}</a>.
        </p>
      </>
    ),
  },
  {
    id: "o-que-faz",
    title: "O que a app faz — e o que não faz",
    body: (
      <>
        <p>
          O LeituOn serve para apontares o que lês, acompanhares o teu progresso
          e cumprires as metas de leitura que defines. Guarda os teus livros, as
          páginas que leste, as tuas notas e a tua lista de desejos, e faz as
          contas para te dizer se vais a tempo.
        </p>
        <p>
          O LeituOn <strong>não vende nem empresta livros</strong> e não te dá
          acesso ao conteúdo de nenhuma obra. O que compras, pedes emprestado ou
          lês é assunto teu; nós tratamos só do acompanhamento.
        </p>
      </>
    ),
  },
  {
    id: "conta",
    title: "A tua conta",
    body: (
      <>
        <p>
          Para usar a app precisas de uma conta, criada com um email e uma
          palavra-passe. Pedimos-te três coisas simples:
        </p>
        <ul>
          <li>
            Que uses um email a que tenhas mesmo acesso — é por aí que
            recuperas a palavra-passe se a esqueceres.
          </li>
          <li>
            Que guardes a palavra-passe só para ti. Tudo o que for feito na tua
            conta conta como feito por ti.
          </li>
          <li>
            Que tenhas pelo menos 16 anos. Abaixo dessa idade é preciso a
            autorização de quem for responsável por ti.
          </li>
        </ul>
        <p>
          Se desconfiares que alguém entrou na tua conta, muda a palavra-passe e
          avisa-nos.
        </p>
      </>
    ),
  },
  {
    id: "uso",
    title: "O que te pedimos enquanto usas a app",
    body: (
      <>
        <p>
          Nada de extraordinário: usa o LeituOn para o que ele serve e não o uses
          para prejudicar ninguém. Em concreto, pedimos-te que não tentes entrar
          em contas que não são tuas, não tentes deitar abaixo o serviço nem
          copiar a app para a fazeres passar por tua.
        </p>
        <p>
          Se alguma destas coisas acontecer, podemos suspender a conta enquanto
          percebemos o que se passou.
        </p>
      </>
    ),
  },
  {
    id: "conteudos",
    title: "O que escreves continua a ser teu",
    body: (
      <>
        <p>
          Os livros que registas, as notas que tomas e as listas que fazes são
          teus. Não reclamamos nenhum direito sobre eles e não os usamos para
          nada além de te mostrar a tua própria leitura dentro da app.
        </p>
        <p>
          A única coisa que fazemos com esse conteúdo é guardá-lo e mostrá-lo de
          volta a ti, nos aparelhos onde entrares na tua conta.
        </p>
      </>
    ),
  },
  {
    id: "preco",
    title: "Quanto custa",
    body: (
      <>
        <p>
          As condições em vigor — o que é gratuito e o que, se for o caso, é
          pago — estão sempre indicadas na app e na loja onde a descarregas,
          antes de qualquer pagamento.
        </p>
        <p>
          Se um dia houver funcionalidades pagas, nunca te cobramos nada sem
          teres confirmado. As compras feitas através da App Store ou do Google
          Play seguem também as regras de pagamento e de reembolso dessas lojas.
        </p>
      </>
    ),
  },
  {
    id: "mudancas",
    title: "Mudanças, avarias e interrupções",
    body: (
      <>
        <p>
          A app vai mudando: acrescentamos coisas, melhoramos outras e, de vez em
          quando, retiramos as que não estão a resultar. Quando uma mudança for
          significativa, avisamos-te dentro da app.
        </p>
        <p>
          Também pode haver períodos em que o serviço esteja indisponível, por
          manutenção ou por uma avaria. Fazemos os possíveis por que sejam
          curtos e raros, mas não podemos prometer que nunca aconteçam. Boa parte
          da app funciona sem internet, precisamente para que uma falha de
          ligação não te impeça de apontar a leitura.
        </p>
      </>
    ),
  },
  {
    id: "terminar",
    title: "Como acabar com a tua conta",
    body: (
      <>
        <p>
          Podes apagar a tua conta a qualquer momento, a partir do teu perfil na
          app. Ao fazê-lo, apagamos os teus dados de leitura connosco — é uma
          decisão sem volta atrás, por isso pensa duas vezes antes de a tomares.
        </p>
        <p>
          Do nosso lado, só terminamos uma conta se houver uma quebra grave
          destas regras ou se formos obrigados por lei, e avisamos-te sempre que
          for possível fazê-lo.
        </p>
      </>
    ),
  },
  {
    id: "responsabilidade",
    title: "Até onde vai a nossa responsabilidade",
    body: (
      <>
        <p>
          Fazemos o que está ao nosso alcance para que a app funcione bem e para
          que os teus dados estejam seguros. Ainda assim, o LeituOn é uma
          ferramenta de apoio: as contas e os avisos que te damos servem para te
          orientar, não para garantir resultados.
        </p>
        <p>
          Não respondemos por prejuízos que resultem de coisas fora do nosso
          controlo — a tua ligação à internet, o teu telemóvel, ou serviços de
          terceiros de que a app depende. Nada nesta secção afasta os direitos
          que a lei te dá enquanto consumidor.
        </p>
      </>
    ),
  },
  {
    id: "alteracoes",
    title: "Alterações a estas regras",
    body: (
      <p>
        Estas regras podem ser atualizadas. Quando isso acontecer, mudamos a data
        no topo desta página e, se a mudança for importante, avisamos-te na app
        ou por email antes de entrar em vigor. Se não concordares com a nova
        versão, podes apagar a conta.
      </p>
    ),
  },
  {
    id: "lei",
    title: "Lei aplicável e como falar connosco",
    body: (
      <>
        <p>
          A estas regras aplica-se a lei portuguesa. Se houver um diferendo que
          não consigamos resolver por conversa, são competentes os tribunais
          portugueses.
        </p>
        <p>
          Para qualquer dúvida sobre esta página, escreve para{" "}
          <a href={`mailto:${OPERADOR.email}`}>{OPERADOR.email}</a>. Respondemos
          o mais depressa que conseguirmos.
        </p>
      </>
    ),
  },
];

export default function TermosPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Termos e Serviços"
      updatedAt={ATUALIZADO_EM}
      intro={
        <p>
          Esta página explica, sem rodeios, as regras de utilização do LeituOn:
          o que podes esperar de nós, o que esperamos de ti e o que acontece
          quando alguma coisa corre menos bem.
        </p>
      }
      sections={SECTIONS}
    />
  );
}
