import type { Metadata } from "next";

import { LegalPage, type LegalSection } from "@/components/legal-page";
import { ALOJAMENTO, OPERADOR } from "@/lib/operador";

export const metadata: Metadata = {
  title: "Políticas de Privacidade",
  description:
    "Que dados o LeituOn guarda sobre a tua leitura, para que servem, com quem são partilhados e como podes apagá-los.",
};

const ATUALIZADO_EM = "30 de agosto de 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "resumo",
    title: "O essencial, em cinco linhas",
    body: (
      <ul>
        <li>Guardamos o teu email e aquilo que apontas sobre a tua leitura.</li>
        <li>Usamos esses dados só para te mostrar a tua leitura e fazer as contas.</li>
        <li>Não vendemos nada a ninguém e não há publicidade dentro da app.</li>
        <li>Mais nenhum utilizador do LeituOn consegue ver o que lês.</li>
        <li>Podes apagar tudo, de uma vez, a partir do teu perfil.</li>
      </ul>
    ),
  },
  {
    id: "responsavel",
    title: "Quem trata os teus dados",
    body: (
      <p>
        Os teus dados são tratados por <strong>{OPERADOR.nome}</strong>, com o
        número de contribuinte {OPERADOR.nif} e sede em {OPERADOR.morada}. Para
        assuntos de privacidade, o endereço é{" "}
        <a href={`mailto:${OPERADOR.emailPrivacidade}`}>
          {OPERADOR.emailPrivacidade}
        </a>
        .
      </p>
    ),
  },
  {
    id: "que-dados",
    title: "Que dados recolhemos",
    body: (
      <>
        <p>Só o que a app precisa para funcionar:</p>
        <ul>
          <li>
            <strong>Para teres conta:</strong> o teu email e a palavra-passe.
            A palavra-passe é guardada de forma cifrada — nem nós a conseguimos
            ler.
          </li>
          <li>
            <strong>Sobre a tua leitura:</strong> os livros que registas, o
            número de páginas, as datas em que leste, as tuas notas, a lista de
            desejos e as metas que defines.
          </li>
          <li>
            <strong>As tuas preferências:</strong> a hora do lembrete diário, se
            queres ou não notificações, e se exiges impressão digital ou rosto
            para abrir a app.
          </li>
          <li>
            <strong>Informação técnica mínima:</strong> registos de erro que nos
            ajudam a perceber o que se avariou quando alguma coisa falha.
          </li>
        </ul>
        <p>
          Não pedimos o teu nome, a tua morada, o teu número de telefone nem a
          tua localização. Se a impressão digital ou o reconhecimento facial
          estiverem ligados, essa verificação é feita pelo próprio telemóvel: nós
          recebemos apenas um «sim» ou um «não», e nunca a tua impressão nem a
          imagem do teu rosto.
        </p>
      </>
    ),
  },
  {
    id: "para-que",
    title: "Para que usamos estes dados",
    body: (
      <ul>
        <li>Para te mostrar a tua leitura e o teu progresso.</li>
        <li>Para calcular a sequência, o ritmo necessário e as contas da semana.</li>
        <li>Para te enviar os lembretes que pediste.</li>
        <li>Para responder quando nos escreves e para corrigir avarias.</li>
      </ul>
    ),
  },
  {
    id: "porque-podemos",
    title: "Porque é que podemos tratá-los",
    body: (
      <>
        <p>
          A lei exige que expliquemos com que fundamento tratamos cada dado. No
          nosso caso é simples:
        </p>
        <ul>
          <li>
            <strong>Porque é preciso para te dar o serviço</strong> que pediste
            ao criar a conta: o email, os livros, as páginas e as notas.
          </li>
          <li>
            <strong>Porque nos deste autorização:</strong> as notificações e o
            desbloqueio por impressão digital ou rosto, que podes desligar quando
            quiseres.
          </li>
          <li>
            <strong>Porque temos um interesse legítimo</strong> em manter a app
            de pé e segura: os registos de erro.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "partilha",
    title: "Com quem são partilhados",
    body: (
      <>
        <p>
          <strong>Não vendemos os teus dados</strong> e não os cedemos a
          anunciantes. Partilhamo-los apenas com as empresas que nos prestam
          serviços indispensáveis para a app funcionar, e só na medida do
          necessário:
        </p>
        <ul>
          <li>
            <strong>{ALOJAMENTO.fornecedor}</strong>, que aloja a base de dados
            e trata do registo e entrada nas contas.
          </li>
          <li>
            <strong>Apple e Google</strong>, quando descarregas ou atualizas a
            app através das respetivas lojas.
          </li>
        </ul>
        <p>
          Podemos ainda ter de entregar dados a uma autoridade, se formos
          obrigados por lei a fazê-lo.
        </p>
      </>
    ),
  },
  {
    id: "onde",
    title: "Onde ficam guardados",
    body: (
      <>
        <p>
          Uma cópia dos teus dados fica no próprio telemóvel — é isso que
          permite usar a app sem internet. A cópia principal está em servidores
          da {ALOJAMENTO.fornecedor}, na região {ALOJAMENTO.regiao}.
        </p>
        <p>
          Este site, o que estás a ler agora, não usa cookies nem serviços de
          análise de visitas. A única coisa que guarda no teu navegador é a tua
          escolha entre o tema claro e o escuro.
        </p>
      </>
    ),
  },
  {
    id: "quanto-tempo",
    title: "Durante quanto tempo",
    body: (
      <p>
        Enquanto tiveres conta. Quando a apagas, os teus dados de leitura são
        eliminados connosco. Podem ficar em cópias de segurança durante um curto
        período, até essas cópias serem substituídas, e podemos ter de guardar
        certos registos por mais tempo se a lei o exigir.
      </p>
    ),
  },
  {
    id: "direitos",
    title: "Os teus direitos",
    body: (
      <>
        <p>A qualquer momento podes:</p>
        <ul>
          <li>Ver os dados que temos sobre ti e pedir uma cópia.</li>
          <li>Corrigir o que estiver errado — boa parte diretamente na app.</li>
          <li>Apagar a conta e tudo o que lhe está associado.</li>
          <li>Retirar as autorizações que deste, como as notificações.</li>
          <li>Opor-te a um tratamento que consideres injustificado.</li>
        </ul>
        <p>
          Basta escreveres para{" "}
          <a href={`mailto:${OPERADOR.emailPrivacidade}`}>
            {OPERADOR.emailPrivacidade}
          </a>
          . Se achares que não tratámos bem do assunto, podes apresentar queixa à
          Comissão Nacional de Proteção de Dados.
        </p>
      </>
    ),
  },
  {
    id: "criancas",
    title: "Crianças",
    body: (
      <p>
        O LeituOn destina-se a maiores de 16 anos. Não recolhemos
        intencionalmente dados de crianças mais novas; se soubermos que existe
        uma conta nessas condições, apagamo-la.
      </p>
    ),
  },
  {
    id: "alteracoes",
    title: "Alterações a esta política",
    body: (
      <p>
        Se mudarmos alguma coisa, atualizamos a data no topo desta página. Se a
        mudança for importante — por exemplo, passarmos a recolher um dado novo
        — avisamos-te na app ou por email antes de entrar em vigor.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "Falar connosco",
    body: (
      <p>
        Para dúvidas sobre privacidade, escreve para{" "}
        <a href={`mailto:${OPERADOR.emailPrivacidade}`}>
          {OPERADOR.emailPrivacidade}
        </a>
        . Para tudo o resto,{" "}
        <a href={`mailto:${OPERADOR.email}`}>{OPERADOR.email}</a>.
      </p>
    ),
  },
];

export default function PrivacidadePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Políticas de Privacidade"
      updatedAt={ATUALIZADO_EM}
      intro={
        <p>
          Esta página explica que dados o LeituOn guarda sobre a tua leitura,
          para que servem e o que podes fazer com eles. Escrevemo-la para ser
          lida, não para ser saltada.
        </p>
      }
      sections={SECTIONS}
    />
  );
}
