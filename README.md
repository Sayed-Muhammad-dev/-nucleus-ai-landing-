# Nucleus — AI Company Landing Page

A landing page for a fictional AI product: an operational-knowledge platform
that answers questions from a company's own systems with citations you can
check. Dark, gradient-driven and deliberately original — no real company's
branding, wordmarks or logos appear anywhere.

> **Live demo:** _add the deployment URL here_

## Features

**Hero**
- Animated gradient-mesh background: three blurred radial blooms drifting on
  independent timings over a faint grid, rendered as a fixed pointer-events-free
  layer so it never intercepts clicks.
- Shimmering gradient headline, dual CTAs, and four platform statistics.

**Interactive demo panel** — the centrepiece
- A mock product surface with window chrome and three switchable threads
  (Renewals, Finance, Product).
- Each thread plays a scripted exchange: the question lands, a "searching 41
  sources" state pulses, then the answer types out character by character and
  its source citations fade in beneath.
- A replay control restarts the sequence; under `prefers-reduced-motion` the
  answer appears instantly instead of typing.

**Sections**
- Logo marquee with a seamless duplicated track and edge mask.
- "How it works" — three numbered steps with sub-detail and desktop connector
  lines.
- Nine feature cards with icons that light up and glow on hover.
- Full-width demo section pairing the panel with the argument for grounding.
- Three-tier pricing with a highlighted middle plan.
- Six-question FAQ accordion.
- Closing CTA over its own drifting bloom.

**Interaction detail**
- Scroll-reveal on every section via `IntersectionObserver`, staggered by index.
- Glowing button hovers, card lift, gradient one-pixel borders drawn with a
  masked pseudo-element.
- FAQ opens with a `grid-rows-[0fr→1fr]` transition, so it animates to natural
  height without measuring the content.
- Header goes translucent-blurred on scroll; nav collapses to a drawer on
  mobile.
- Every animation is neutralised under `prefers-reduced-motion`.

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 |
| Icons | lucide-react |
| Fonts | Inter + JetBrains Mono via `next/font` |

No animation library — the reveal system, typing effect and gradient drift are
`IntersectionObserver`, `setTimeout` and CSS keyframes respectively, which keeps
the first-load JS at roughly 100 kB.

## Design

Near-black canvas (`#04060f`) with electric blue (`#38bdf8`) and violet
(`#8b5cf6`) as the gradient pair, used for headline text, button fills, icon
washes and the mesh itself. Glow shadows rather than hard borders carry
elevation; where a border is needed it is a one-pixel gradient rather than a
flat line.

The look is futuristic-premium by construction — mesh, glow, mono accents — but
the product, name, copy and palette are invented for this project.

## Content

All copy is written for this fictional product: nine platform features, three
implementation steps, three pricing tiers, six FAQ answers, and three full demo
exchanges with plausible retrieval citations. No lorem ipsum.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production build
```

## Project Structure

```
app/
  layout.tsx           mesh backdrop, header, footer
  page.tsx             all eight page sections
  globals.css          tokens, gradient text, gradient ring, grid
src/
  components/
    gradient-mesh.tsx  animated background layer
    demo-panel.tsx     interactive scripted-chat preview
    faq-list.tsx       accordion
    reveal.tsx         IntersectionObserver scroll reveal
    site-chrome.tsx    header and footer
  data/content.ts      features, steps, plans, FAQs, demo threads
  lib/utils.ts         class merging
```
