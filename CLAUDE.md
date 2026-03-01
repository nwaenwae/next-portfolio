# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint via next lint
npm run start    # Start production server (after build)
```

No test suite is configured.

## Architecture

**Next.js 14 App Router** project using the `src/` directory layout.

```
src/
  app/           # Routes (each folder = a route with page.js)
  components/    # Shared UI components
  hooks/         # Custom React hooks
  utils/         # Utility helpers
```

### Routing & Layout

- `src/app/layout.js` — Root layout. Mounts `<Nav>` and `<Header>` globally (outside `{children}`), so every page gets the nav sidebar and header automatically. Uses Montserrat from `next/font/google` via the CSS variable `--font-mont`.
- `src/components/Layout.js` — A **page-level wrapper** (not the root layout) that adds consistent horizontal padding and renders `<Footer>`. Every page component wraps its content in this `<Layout>`.
- `src/components/Nav.js` — Fixed sidebar nav (right side on xl, bottom bar on mobile). Active link detection via `usePathname()`. Nav routes are defined in the exported `navData` array — update that array to add/remove nav links.

### Animation Pattern (Framer Motion)

Framer Motion is used throughout. Common patterns:
- **Page entry animations**: `motion.div` with `variants` (`hidden`/`visible`/`exit`) and `initial="hidden" animate="visible"`.
- **Scroll-driven animations**: `useScroll` with a `ref` target. The experience timeline uses `scrollYProgress` to scale a vertical line (`scaleY`) and drive `<LiIcon>` path drawing.
- **`<LiIcon>`**: A scroll-animated diamond SVG icon used as a list marker in timeline lists. Pass it a `reference` (ref to the `<li>`) and it draws itself as the item scrolls into view.
- **`<Details>`**: Reusable timeline entry component (used in Experience page). Accepts `title`, `company`, `companyLink`, `time`, `address`, `work` props.
- **`<Skills>`**: Radial skill cloud — skill bubbles animate from center `(0,0)` to their `x`/`y` positions (in `vw` units) on scroll into view.

### Styling

Tailwind CSS with a custom theme in `tailwind.config.js`:

| Token | Value |
|---|---|
| `bg-dark` | `#1B1B1B` |
| `bg-light` | `#F5F5F5` |
| `text-primary` | `#B63E96` (pink/magenta) |
| `primaryDark` | `#58E6D9` |
| `primaryLight` | `#CC97BE` |
| `bg-circularLight` | Radial gradient used as Skills section background |
| `animate-spin-slow` | 8s linear infinite spin |

Custom CSS classes in `globals.css`:
- `.end-cursor` — appends a `|` cursor after the element
- `.end-cursor.blinking` — makes the cursor blink (used in the typewriter on the home page)

### Typewriter Effect (Home page)

`useTypedDescription` hook cycles through a string array with three phases: `Typing` → `Pausing` → `Deleting`. The home page passes `["Nwae Nandar Aung", "a Frontend Developer"]` and applies `.end-cursor` / `.blinking` CSS classes based on the current phase.

### `"use client"` Usage

Pages and components that use hooks (`useState`, `useEffect`, `useRef`, `usePathname`, Framer Motion) are marked `"use client"`. Static/presentational components (`Layout`, `Footer`, `LiIcon`, `Details`) do not need the directive.

### Path Alias

`@/` maps to `src/` (configured in `jsconfig.json`).
