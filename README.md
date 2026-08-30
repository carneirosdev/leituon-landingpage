# LeituOn — Landing page

Página de apresentação da app [LeituOn](../leituon-app), o coach pessoal de
leitura. Construída em **Next.js 16** (App Router), **React 19**, **TypeScript**
e **Tailwind CSS v4**, e servida como página estática.

O conteúdo está em português europeu e a paleta é a mesma da app
(`leituon-app/lib/app/theme/app_colors.dart`): ardósia estrutural, âmbar como
acento do «On» e índigo como secundária.

## Arrancar

```sh
npm install
npm run dev      # http://localhost:3000
```

```sh
npm run build && npm start   # build de produção
npm run lint
```

## Estrutura

```
app/
├── layout.tsx            # metadados, tipografia e script anti-flash do tema
├── page.tsx              # composição das secções da página inicial
├── globals.css           # tokens da marca, variante `dark`, texto das páginas legais
├── opengraph-image.tsx   # cartão de partilha 1200×630, gerado no build
├── termos/page.tsx       # Termos e Serviços
└── privacidade/page.tsx  # Políticas de Privacidade
lib/
└── operador.ts           # identificação da entidade usada nas páginas legais
components/
├── site-header.tsx       # navegação fixa, menu móvel, alternador de tema
├── hero.tsx              # proposta de valor + mockup do dashboard
├── phone-mockup.tsx      # retrato do ecrã inicial da app, desenhado em marcação
├── features.tsx          # os nove módulos do produto
├── how-it-works.tsx      # três passos de arranque
├── plan-section.tsx      # plano, ritmo e estados adiantado/no ritmo/atrasado
├── faq.tsx               # acordeão em `<details>`, funciona sem JS
├── final-cta.tsx         # apelo final + botões das lojas
├── legal-page.tsx        # molde partilhado pelas duas páginas legais
└── site-footer.tsx
```

O texto da página é escrito em linguagem corrente, sem termos técnicos: quem a
lê é quem quer ler mais livros, não quem constrói a app.

### Tema claro e escuro

A classe `dark` no `<html>` é a fonte de verdade. É aplicada antes da primeira
pintura por um script inline em `layout.tsx` — que lê a escolha guardada em
`localStorage` e, na ausência dela, a preferência do sistema — para não haver
clarão branco em quem usa o tema escuro. O botão em `theme-toggle.tsx` subscreve
essa classe com `useSyncExternalStore`, em vez de manter estado próprio.

Todas as cores passam por variáveis CSS declaradas em `globals.css`: para mudar
a paleta basta alterar `:root` e `.dark`.

## Antes de publicar

1. **Identificação da entidade** — `lib/operador.ts` tem o nome legal, o número
   de contribuinte, a morada e a região dos servidores entre parênteses retos.
   Esses valores aparecem tal e qual nas páginas de termos e de privacidade, que
   por lei não podem ir para o ar sem eles.
2. **Revisão jurídica** — os dois textos legais são um ponto de partida escrito
   em linguagem simples e descrevem o que a app faz hoje. Devem ser lidos por
   um advogado antes de publicados.
3. **Ligações das lojas** — `components/store-buttons.tsx` tem `APP_STORE_URL` e
   `PLAY_STORE_URL` a apontar para `#`.
4. **Domínio** — `SITE_URL` em `app/layout.tsx` está como `https://leituon.app`;
   é a base dos metadados Open Graph.
5. **Emails de contacto** — `ola@leituon.app` e `privacidade@leituon.app` têm de
   existir e ser lidos.
