# AI Rules — Vizinho Distribuidora

## Tech Stack

- **React 19** with **TypeScript** — all components are typed `.tsx` files; no plain JS.
- **TanStack Start** (full-stack React framework) with **TanStack Router** for file-based routing — routes live in `src/routes/`, the root layout is `__root.tsx`, and the generated route tree is `src/routeTree.gen.ts` (do not edit manually).
- **Vite 8** as the build tool and dev server; **Nitro** with the Vercel preset for server-side rendering/deployment.
- **Tailwind CSS v4** — configured entirely in `src/styles.css` via `@theme inline` and `@import "tailwindcss"`; no `tailwind.config.js` or PostCSS plugin.
- **shadcn/ui** (Radix UI primitives + CVA) — shared UI components live in `src/components/ui/`; app-specific components live in `src/components/app/`.
- **TanStack Query** for server-state management — `QueryClient` is created per-request in `src/router.tsx` and provided via `QueryClientProvider` in `__root.tsx`.
- **React Hook Form** + **Zod** for forms and schema validation.
- **Lucide React** for icons; **Sonner** for toast notifications; **date-fns** for date formatting.
- **Vitest** + **Testing Library** for unit/component tests; **ESLint** + **Prettier** for linting and formatting.
- Dark-only UI — brand tokens are in `src/styles.css` `:root`, with gold `primary` and burgundy `wine` colors.

## Library & Tool Rules

- **UI components** — Use existing shadcn/ui components from `src/components/ui/` before creating custom primitives. Do not edit existing files in that directory; add app-specific behavior in `src/components/app/`.
- **Styling** — Use Tailwind CSS utility classes. Keep global design tokens and base styles in `src/styles.css`; do not add separate CSS files for components.
- **Colors** — Use the app's semantic color utilities. Define any new semantic color as an `oklch()` variable in `src/styles.css` and register it in `@theme inline`.
- **Routing** — Use TanStack Router file-based routes. Each route exports `Route` via `createFileRoute` and defines page-specific metadata in `head()`. Never edit generated `src/routeTree.gen.ts`.
- **Data fetching** — Use TanStack Query (`useQuery`, `useMutation`) for server state; do not use `useEffect` + `fetch`. Set cache defaults on `QueryClient`.
- **Forms** — Use React Hook Form with Zod schemas and `@hookform/resolvers`; use local component state only for trivial inputs/UI state.
- **Icons** — Use `lucide-react`; do not add another icon library.
- **Notifications** — Use Sonner (`toast` from `sonner`) for user-facing notifications; do not use `alert()` or custom toast implementations.
- **Dates** — Use `date-fns` for parsing, manipulation, and formatting; avoid other date libraries and native date formatting.
- **App state** — Use React Context for app-wide state (see `src/components/app/cart-context.tsx`) and component state for local UI. Do not add Redux, Zustand, or another state library.
- **Mock data** — Keep mock/static app data in `src/data/mock.ts` instead of scattering it across components.
- **Error reporting** — Use `reportAppError` from `src/lib/error-reporting.ts` in error boundaries; do not add third-party error tracking without approval.
- **Testing** — Use Vitest and Testing Library, with tests in `src/test/`; do not add another test runner.
- **Dependencies** — Before adding a package, check whether an installed library already covers the need and keep lockfiles in sync.
