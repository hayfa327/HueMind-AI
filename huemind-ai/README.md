# HueMind AI 

> **AI-powered design system generation — from brand intent to production-ready tokens in seconds.**

HueMind AI was built to explore the intersection of artificial intelligence, design systems, accessibility, and modern frontend architecture. It's not just a color picker — it's a full design system generator that thinks in tokens, scales, and semantics.

---

##  Features

| Feature | Description |
|---|---|
| 🎨 **Palette Generation** | AI-generates harmonious color palettes tailored to your brand personality |
| 🔤 **Typography Systems** | Complete type scales with pairing recommendations and optical sizing |
| ♿ **Accessibility Analysis** | WCAG contrast ratios, AA/AAA compliance checks, and remediation suggestions |
| 🏷️ **Semantic Tokens** | Design tokens structured for real-world use: `color.surface.default`, `text.brand.primary` |
| 🤖 **AI-Driven Branding** | Describe your brand in plain English — HueMind does the rest |

---

## 🛠 Tech Stack

```
React 18          → Component architecture & UI
TypeScript        → Type safety across the entire codebase
Vite              → Blazing-fast dev server & build tooling
CSS Modules       → Scoped, maintainable styling
OpenAI API        → AI palette, token, and typography generation
Framer Motion     → Fluid animations and transition design
Storybook         → Component development & design system documentation
```

---

## 🏗 Architecture

HueMind is structured around four core layers:

```
src/
├── components/          # Reusable, atomic UI components
│   ├── ColorSwatch/
│   ├── TokenDisplay/
│   ├── TypographyScale/
│   └── AccessibilityBadge/
│
├── features/            # Domain-specific feature modules
│   ├── palette/         # Palette generation & display
│   ├── typography/      # Type system generation
│   ├── tokens/          # Semantic token builder
│   └── accessibility/   # WCAG analysis & reporting
│
├── services/            # External integrations & business logic
│   ├── openai.ts        # AI prompt orchestration
│   ├── tokenizer.ts     # Token naming & structure
│   └── a11y.ts          # Contrast ratio calculations
│
└── state/               # Global state management
    ├── designSystemStore.ts
    └── sessionStore.ts
```

---

##  AI Workflow

Every design system starts with a single user prompt. Here's how HueMind turns intent into tokens:

```
User Input (brand description)
        ↓
  Prompt Engineering
  (context + constraints injected)
        ↓
  OpenAI API Request
        ↓
  Structured JSON Response
  (palette, typography, tokens)
        ↓
  Validation + Normalization
        ↓
  Dynamic UI Rendering
  (live preview, exportable output)
```

Example prompt sent to OpenAI:
> *"A fintech startup targeting Gen Z. Bold but trustworthy. Dark mode first."*

HueMind returns a complete design system: primary/secondary/neutral palettes, a type scale, semantic token names, and accessibility scores — all in one response.

---

##  Getting Started

### Prerequisites

- Node.js `>=18`
- An OpenAI API key

### Installation

```bash
git clone  https://github.com/hayfa327/HueMind-AI.git
cd huemind-ai
npm install
```

### Development

```bash
npm run dev          # Start Vite dev server
npm run storybook    # Launch Storybook component explorer
npm run build        # Production build
```

---

##  Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

>  Never commit your `.env.local` file. It's already in `.gitignore`.

---

##  Roadmap

These features are planned or actively being explored:

- [ ] **Figma Export** — Push generated tokens directly into a Figma file via the API
- [ ] **Tailwind Export** — One-click `tailwind.config.js` generation from your token set
- [ ] **Theme Marketplace** — Browse, fork, and remix community-generated design systems
- [ ] **Saved Projects** — Persist and version your design systems across sessions
- [ ] **Authentication** — User accounts with project history and team sharing
- [ ] **CSS / JSON Export** — Download tokens in W3C Design Token format
- [ ] **Dark Mode Toggle** — Preview your system in both light and dark contexts

---

##  Work in Progress

HueMind is under active development. The current focus is:

- Refining the AI prompt structure for more consistent JSON output
- Building out the token display UI with copy-to-clipboard support
- Accessibility score visualization (chart-based WCAG reporting)
- Storybook documentation for all core components

Screenshots will be added once the UI reaches a stable visual design.

---

##  Why This Project Exists

Most design tools are disconnected from the *thinking* behind design systems. HueMind AI was created to close that gap — letting developers and designers describe what they want in natural language, and receive structured, production-ready output that respects real design system principles.

It's also a personal deep-dive into prompt engineering, structured AI output, and the challenge of making AI output feel *intentional* rather than random.

---

##  License

MIT © HueMind AI
