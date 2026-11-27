# Vizinho Distribuidora

Aplicação web mobile-first para delivery de bebidas, construída com React, TypeScript e TanStack Start. A interface usa tema escuro, identidade visual em amarelo ouro e bordô, e dados de demonstração.

## Desenvolvimento

Requisitos: Node.js 22.12+ e pnpm.

```sh
pnpm install
pnpm dev
```

## Build de produção

```sh
pnpm build
```

O projeto usa TanStack Start com Nitro no preset Vercel. Importe o repositório na Vercel e mantenha o comando de build `pnpm build`; não é necessário adicionar rewrites de SPA, pois o servidor do TanStack Start atende as rotas e os assets de `public/` são servidos diretamente.
