#  Source Architecture

HueMind AI follows a scalable frontend architecture designed around design system thinking, reusable components, and feature separation.

The structure aims to improve:
- maintainability
- scalability
- component reusability
- code organization
- long-term project growth

---

#  Source Structure

```txt
src/
 ├── design-system/
 │    ├── components/
 │    ├── themes/
 │    └── types/
 │
 ├── features/
 │    ├── ai-generator/
 │    ├── palette/
 │    ├── typography/
 │    └── accessibility/
 │
 ├── pages/
 ├── services/
 ├── hooks/
 ├── utils/
 ├── assets/
 │
 ├── index.css
 ├── App.tsx
 └── main.tsx
```

---

#  design-system/

Contains reusable UI foundations shared across the application.

## Includes:
- reusable UI components
- design tokens
- semantic themes
- shared TypeScript types

This layer represents the core design system architecture.

---

##  components/

Reusable system-level components such as:
- Button
- Input
- Card
- Badge
- Modal
- PaletteCard

These components are designed to remain independent from feature-specific business logic.

---

##  themes/

Contains:
- theme configurations
- semantic color mappings
- dark/light mode logic
- token-based styling systems

---

##  types/

Shared TypeScript interfaces and reusable type definitions.

Example:
- DesignSystem
- Palette
- TypographyConfig

---

#  features/

Feature-based architecture for application functionality.

Each feature contains:
- UI logic
- feature components
- feature-specific utilities
- API integration logic

---

## 🤖 ai-generator/

Handles:
- AI prompt processing
- AI-generated design systems
- OpenAI integration logic

---

##  palette/

Responsible for:
- color palette generation
- semantic color previews
- accessibility contrast checks

---

##  typography/

Manages:
- typography recommendations
- font pairing previews
- text hierarchy generation

---

##  accessibility/

Contains:
- accessibility scoring
- contrast analysis
- UX recommendation helpers

---

#  pages/

Contains top-level application pages and layouts.

Examples:
- HomePage
- ResultsPage
- SavedThemesPage

---

#  services/

Handles external API communication.

Examples:
- OpenAI API
- The Color API
- Unsplash API

This separation improves:
- maintainability
- testing
- scalability

---

#  hooks/

Reusable custom React hooks.

Examples:
- useTheme()
- useGenerateDesign()
- useAccessibility()

---

#  utils/

Shared helper functions and utilities.

Examples:
- color conversion helpers
- token formatting
- accessibility calculations

---

#  assets/

Stores static assets such as:
- images
- icons
- mockups
- fonts

---

#  index.css

Global styling layer containing:
- CSS variables
- primitive tokens
- semantic tokens
- typography settings
- spacing system
- global resets

Example tokens:
```css
:root {
  --color-primary: #3b82f6;
  --spacing-md: 16px;
  --radius-lg: 20px;
}
```

This supports scalable design system architecture across the application.

---

#  App.tsx

Main application entry component responsible for:
- layout rendering
- routing structure
- page composition

---

#  main.tsx

Application bootstrap file responsible for:
- rendering React
- importing global styles
- application initialization

---

#  Architecture Goals

The architecture was designed to support:

- scalable frontend development
- reusable design systems
- maintainable code structure
- isolated component development
- accessibility-focused UI design
- AI-assisted feature integration
- future project expansion