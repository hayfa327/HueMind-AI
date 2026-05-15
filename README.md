 # HueMind AI 

> **AI-powered design system generation — from brand intent to production-ready tokens in seconds.**

HueMind AI was built to explore the intersection of artificial intelligence, design systems, accessibility, and modern frontend architecture. Describe your brand in plain English — HueMind returns a complete design system: colors, typography, semantic tokens, and accessibility scores.

---

##  Features

| Feature | Description |
|---|---|
| 🎨 **Palette Generation** | Real color palettes from The Color API, selected by AI based on your industry |
| 🔤 **Typography Systems** | Font pairing from Google Fonts API with full type scale preview |
| ♿ **Accessibility Analysis** | WCAG AA/AAA compliance with real contrast ratio calculations |
| 🏷️ **Semantic Tokens** | Production-ready tokens: `border-radius`, `spacing`, `color` |
| 🤖 **AI-Driven Branding** | Gemini 2.5 Flash analyzes real data and explains every decision |
| 📖 **Storybook Documentation** | Every component documented and testable in isolation |

---

##  Tech Stack

```
React 19          → Component architecture & UI
TypeScript        → Type safety across the entire codebase
Vite              → Blazing-fast dev server & build tooling
CSS Modules       → Scoped, maintainable styling
Gemini 2.5 Flash  → AI palette, token, and typography generation
The Color API     → Real color palettes (no API key needed)
Google Fonts API  → 1500+ real fonts by category
Framer Motion     → Fluid animations and transition design
Storybook 10      → Component development & design system documentation
Vercel            → Serverless backend + deployment
```

---

## Architecture

```
src/
├── design-system/
│   └── components/
│       ├── ColorCard/           # Reusable color display component
│       ├── TypographyCard/      # Font preview component
│       ├── TokenCard/           # Design token display component
│       ├── AccessibilityBadge/  # WCAG compliance component
│       ├── ResultPage/          # Full design system result view
│       ├── designForm/          # Main input form
│       ├── heroTitle/           # Animated heading component
│       └── loadingScreen/       # Loading state component
│
├── services/
│   ├── fetchDesignData.ts       # The Color API + Google Fonts API
│   └── generateSystem.ts        # Prompt builder + Gemini API call
│
└── stories/
    ├── ColorCard.stories.tsx
    ├── TypographyCard.stories.tsx
    ├── TokenCard.stories.tsx
    └── AccessibilityBadge.stories.tsx

api/
└── generate.ts                  # Vercel serverless function (Gemini proxy)
```

---

##  AI Workflow

```
User fills the form
(projectName, industry, audience, style, personality)
        ↓
Fetch real data in parallel:
├── The Color API  → real color palette based on industry
└── Google Fonts   → real fonts based on visual style
        ↓
Build intelligent prompt with real data
        ↓
Vercel Backend (api/generate.ts)
        ↓
Gemini 2.5 Flash analyzes and selects
        ↓
Structured JSON Response
        ↓
Dynamic UI Rendering
(live preview, contrast ratios, type scale, CSS export)
```

---

##  Storybook Components

```
Design System/
├── ColorCard          → Color swatch with hex, name, and Aa preview
├── TypographyCard     → Font preview with type scale
├── TokenCard          → Border radius, spacing, and color tokens
└── AccessibilityBadge → WCAG AA/AAA compliance display
```

```bash
npm run storybook
```

---

##  Getting Started

### Prerequisites

- Node.js `>=18`
- Gemini API key (free from aistudio.google.com)
- Google Fonts API key (free from console.cloud.google.com)

### Installation

```bash
git clone https://github.com/hayfa327/HueMind-AI.git
cd huemind-ai
npm install
```

### Development

```bash
npm run dev          # Start Vite dev server (localhost:5173)
npm run storybook    # Launch Storybook (localhost:6006)
npm run build        # Production build
```

---

##  Environment Variables

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=AIzaSyxxxxxxxxxxxxxxxx
VITE_GOOGLE_FONTS_KEY=AIzaSyxxxxxxxxxxxxxxxx
```

For Vercel deployment, add these in Vercel Dashboard under Settings > Environment Variables.

---

##  Roadmap

- [ ] Figma Export
- [ ] Tailwind Export
- [ ] Theme Marketplace
- [ ] Saved Projects
- [ ] Authentication
- [ ] Dark Mode Preview

---

## 💡 Why This Project Exists

Most design tools are disconnected from the thinking behind design systems. HueMind AI closes that gap — letting developers and designers describe what they want in natural language, and receive structured, production-ready output that respects real design system principles.

---

##  Use of AI Tools

This project was built with AI assistance (Claude) for prompt engineering, API integration guidance, and debugging. All design decisions and implementation were driven by the developer.

---

##  License

MIT © HueMind AI
