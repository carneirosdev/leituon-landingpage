# LeituOn — Landing page


Página de apresentação da app [LeituOn](../leituon-app), o tracker pessoal de leitura. Construída em **Next.js 16** (App Router), **React 19**, **TypeScript**
e **Tailwind CSS v4**, e servida como página estática.

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
