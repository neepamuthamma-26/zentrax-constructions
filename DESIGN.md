# Design Brief – Zentrax Constructions Redesign

**Brand**: Zentrax Constructions (unchanged) | **Tagline**: Where Vision Meets Execution | **Category**: Premium construction & real estate showcase | **Theme**: Dark mode primary

---

## Tone & Purpose

Luxury architectural brand. Minimal, refined, aspirational through restraint. Deep navy + gold accents signal exclusivity. Every element conveys premium craftsmanship. Editorial typography (Fraunces serif + General Sans sans) evokes high-end magazines.

---

## Differentiation

Gold-accented architectural minimalism. Soft gold (#d4af37) as exclusivity signal on CTAs/hovers. Deep navy base + generous white space = architectural precision. No neon. Spacious, restrained shadows. Motion library (motion v12) for smooth, sophisticated animations throughout.

---

## Color Palette

| Token | OKLCH | Hex | Usage |
|-------|-------|-----|-------|
| dark.background | 0.11 0.01 260 | #1a1f2e | Deep navy — primary dark bg |
| dark.card | 0.145 0.01 260 | #202730 | Charcoal cards, secondary surfaces |
| accent (gold) | 0.68 0.18 58 | #d4af37 | CTAs, hover states, icon accents |
| dark.foreground | 0.96 0 0 | #f5f5f3 | Soft white text on dark |
| dark.muted | 0.18 0.01 260 | #272d3c | Secondary dark backgrounds |
| dark.border | 0.22 0.02 260 | #323d4f | Dark mode dividers |

---

## Typography

| Layer | Font | Use | Scale |
|-------|------|-----|-------|
| Display | Fraunces (serif) | Hero, section headlines | 48–80px, letter-spacing: -0.02em |
| Body | General Sans (sans-serif) | Paragraphs, labels | 16–18px, line-height: 1.6 |
| Mono | Geist Mono | Code, technical | 12–14px, line-height: 1.5 |

Generous line-height (1.6 body) and tight tracking on display for sophistication.

---

## Elevation & Depth

| Level | Shadow | Use |
|-------|--------|-----|
| Subtle | `0 2px 8px rgba(0,0,0,0.06)` | Hover states |
| Card | `0 4px 24px rgba(0,0,0,0.08)` | Service/portfolio cards |
| Gold Glow | `0 0 20px rgba(212,175,55,0.2)` | CTA hover, accent interactions |
| Glow Pulse | Keyframe 2s infinite | Featured CTAs (premium signal) |

Shadows subtle, restrained. Gold glow sparingly on primary CTAs.

---

## Structural Zones

| Zone | Background | Border | Treatment |
|------|------------|--------|-----------|
| Header/Nav | dark.background | dark.border bottom | Sticky, minimal wordmark + nav |
| Hero | Dark overlay + image | None | Full bleed, dark.card text overlay, CTA buttons |
| Services | dark.background | None | 5 cards (2x2+1), hover lift + gold accent line |
| Portfolio | dark.background | None | Premium grid, hover overlays, project images |
| Stats | dark.background | None | Animated counters, social proof cards |
| CTA Mid-Page | dark.card | None | Centered, prominent gold button |
| Contact | dark.background | dark.border top | Form + contact info, footer |

---

## Spacing & Layout

- Grid: 4px baseline; all spacing multiples of 4px
- Max-width: 1200px, centered
- Mobile: 32px padding, single column
- Desktop: 64px padding, full layouts
- Vertical sections: 80px desktop, 48px mobile
- Card spacing: 16px between, 24px between sections

---

## Component Patterns

- Buttons: Gold on primary CTAs, hover shadow-gold + 0.3s transition. Secondary: text-only gold underline.
- Cards: Charcoal (#202730), shadow-card, subtle border. Hover: lift shadow, brightness shift.
- Form inputs: Subtle dark background, border-subtle, focus: gold ring.
- Icons: Gold accent on service cards.
- Navigation: Sticky, underline active, gold on hover.

---

## Motion & Interaction

- Default transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (smooth easing)
- Entrance: `fade-in` (0.5s), `slide-up` (0.4s) on scroll
- Hover: Gold glow on CTAs, subtle lift on cards, underline animation on links
- Pulse: `glow-pulse` (2s infinite) on featured CTAs
- No bounce/elastic; ease-out/ease-in-out only

---

## Constraints

❌ NO neon/bright colors | ❌ NO heavy shadows (looks cheap) | ❌ NO rainbow accents | ❌ NO bouncy animations  
✅ YES soft gold warmth | ✅ YES restrained shadows | ✅ YES gold single accent | ✅ YES smooth motion

---

## Signature Detail

Gold-accented architectural minimalism. Gold glow = premium interaction psychology. Deep navy + white = structural confidence. Fraunces + General Sans = editorial luxury. Generous spacing + restrained shadows = breathing room = exclusivity.

---

## Dark Mode Strategy

Primary mode: **dark**. Deep navy base (#1a1f2e) with charcoal cards (#202730) creates luxury nocturnal aesthetic. Soft white text (0.96/0/0) for eye comfort. Gold accent consistent across all modes. WCAG AA+ contrast enforced.

---

## Responsive

Mobile-first: single column (32px padding), 2-column tablet (768px), full desktop (1024px+). All spacing/typography scales linearly. No abrupt jumps.

---

## Accessibility

- Contrast: WCAG AA+ (foreground-on-background ≥ 0.7 lightness difference)
- Motion: respects `prefers-reduced-motion`
- Focus: gold ring outline on keyboard navigation
- Semantic: proper heading hierarchy (h1→h3), alt text, ARIA labels
- Type: 16px minimum, 1.6 line-height
