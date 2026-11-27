# Vizinho Bebidas

Crie a estrutura inicial e o design (UI/UX Mobile-First) do app web da **Vizinho Distribuidora** (delivery de bebidas). 
Foco total em visual premium, layout limpo e arquitetura de componentes bem organizada em React + Tailwind. Use apenas dados fictícios (mock data) — **NÃO crie backend, banco de dados ou lógica complexa agora**.

### 1. Identidade Visual & Estilo
- **Tema:** Dark Mode moderno e noturno (fundo `#0E0E10`, cards `#18181B` com bordas sutis `#27272A`).
- **Cores da Marca:**
  - **Amarelo Ouro (`#F5B800`):** Botões principais (CTAs), preços em destaque, ícones ativos e borda da pílula lateral.
  - **Vermelho Bordô (`#991B1B`):** Detalhes de cabeçalho, badges de promoção/desconto e alertas.
  - **Texto:** Branco puro (`#FFFFFF`) para títulos e cinza claro (`#A1A1AA`) para descrições.
- **Tipografia:** Sans-serif moderna, títulos em bold, preços bem legíveis. Toques sutis de *glassmorphism* nos menus flutuantes.

### 2. Navegação Global
- **Pílula Lateral Flutuante:** Fixada na borda esquerda, a ~20% do topo da tela (formato de aba/orelha com ícone de garrafa, fundo escuro translúcido e borda Amarelo Ouro). Ao clicar, abre o **Menu Lateral (Drawer)**.
- **Menu Lateral (Drawer):** Links para *Início*, *Combos Perfeitos*, *Novidades*, *Meu Perfil* e, separado bem no rodapé de forma discreta com ícone de cadeado, o link *Área do Lojista*.
- **Barra de Carrinho Fixa (Bottom Bar):** Barra flutuante discreta na parte inferior mostrando resumo do carrinho (mock).

### 3. Páginas (Apenas Skeleton Visual + Mock Data)
1. **Home (`/`):**
   - **Hero:** Dois carrosséis horizontais no topo (*Promoção da Semana* e *Combos Prontos*).
   - **Barra de Categorias Sticky:** Gruda no topo ao rolar (*Cervejas, Energéticos, Destilados, Conveniência*).
   - **Lista de Produtos (estilo iFood):** Cards horizontais limpos com espaço para imagem recortada da bebida (fundo transparente/escuro), nome, selo (*Gelada* / *Retornável*), preço e botão de abrir.
2. **Modal de Produto (UI):** Área central de destaque para a foto da bebida, espaço lateral para seletor de quantidade, opções visuais de *Gelada/Natural* e uma faixa inferior *"Combina com isso"*.
3. **Combos (`/combos`) & Novidades (`/novidades`):** Telas visuais com grid/lista de cards em destaque.
4. **Meu Perfil (`/perfil`):** Estrutura visual limpa para dados do cliente e área de preferências.
5. **Área do Lojista (`/admin`):** Layout de painel administrativo escuro com abas (*Pedidos, Estoque, Curadoria Visual, Configurações*) — apenas estrutura visual vazia/mock.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ab152b2e-1252-463d-9330-357d6e8e15e4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
