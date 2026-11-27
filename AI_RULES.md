# AI Rules — Vizinho Distribuidora

## Tech Stack

- **React 19** with **TypeScript** — all components are typed `.tsx` files; no plain JS.
- **TanStack Start** (full-stack React framework) with **TanStack Router** for file-based routing — routes live in `src/routes/`, the root layout is `__root.tsx`, and the generated route tree is `src/routeTree.gen.ts` (do not edit manually).
- **Vite 8** as the build tool and dev server; **Nitro** for server-side rendering.
- **Tailwind CSS v4** — configured entirely in `src/styles.css` via `@theme inline` and `@import "tailwindcss"`; no `tailwind.config.js` or PostCSS plugin.
- **shadcn/ui** (Radix UI primitives + CVA) — all shared UI components live in `src/components/ui/`; app-specific components live in `src/components/app/`.
- **TanStack Query** for server-state management — `QueryClient` is created per-request in `src/router.tsx` and provided via `QueryClientProvider` in `__root.tsx`.
- **React Hook Form** + **Zod** for forms and schema validation.
- **Lucide React** for icons; **Sonner** for toast notifications; **date-fns** for date formatting.
- **Vitest** + **Testing Library** for unit/component tests; **ESLint** + **Prettier** for linting and formatting.
- Dark-only UI — brand color tokens (gold `primary`, burgundy `wine`) are defined as oklch values in `src/styles.css` `:root`; there is no `.dark` variant.

## Library & Tool Rules

- **UI components** — Always use shadcn/ui components from `src/components/ui/` before building custom ones. Do not edit files in `src/components/ui/` directly; create new components in `src/components/app/` if you need to customise behaviour.
- **Styling** — Use Tailwind CSS utility classes exclusively. Do not write inline `style` props or separate CSS files. All design tokens (colors, fonts, shadows, gradients) must be defined in `src/styles.css` and referenced via Tailwind classes (e.g. `bg-primary`, `text-wine`).
- **Colors** — All colors must use the `oklch()` format. Add new semantic colors by defining the variable in `:root` and registering it in `@theme inline` as `--color-<name>`.
- **Routing** — Use TanStack Router file-based routes. Each route file exports a `Route` via `createFileRoute`. Set page-specific `<head>` meta in each route's `head()` option. Never edit `src/routeTree.gen.ts`.
- **Data fetching** — Use TanStack Query (`useQuery`, `useMutation`) for any server state. Do not use `useEffect` + `fetch` for data fetching. Set caching defaults on the `QueryClient`, not the router.
- **Forms** — Use React Hook Form with Zod resolvers (`@hookform/resolvers/zod`). Do not manage form state with `useState` for anything beyond trivial single-field inputs.
- **Icons** — Use `lucide-react` exclusively. Do not add other icon libraries.
- **Notifications** — Use `sonner` (`toast` from `sonner`) for all user-facing notifications. Do not use `alert()` or custom toast implementations.
- **Date handling** — Use `date-fns` for all date manipulation and formatting. Do not use `moment`, `dayjs`, or native `Date` methods for formatting.
- **App state** — Use React Context for app-wide state (see `src/components/app/cart-context.tsx`). Use component-level `useState` for local UI state. Do not introduce Redux, Zustand, or other state libraries.
- **Mock data** — All mock/static data lives in `src/data/mock.ts`. Do not scatter hardcoded data across components.
- **Error reporting** — Use `reportLovableError` from `src/lib/lovable-error-reporting.ts` in error boundaries. Do not add other error-tracking services.
- **Testing** — Write tests with Vitest + Testing Library in `src/test/`. Do not add Jest or other test runners.
- **No new dependencies** — Do not add npm packages without checking if an existing dependency already covers the need. The project already includes Radix UI, Recharts, Embla Carousel, cmdk, vaul, and others.