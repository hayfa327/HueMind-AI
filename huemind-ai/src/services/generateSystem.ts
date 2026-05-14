import { fetchColorPalette, fetchFonts } from "./fetchDesignData"

import type { ColorResult } from "./fetchDesignData"


export async function generateDesignSystem(formData: {
  projectName: string
  industry: string
  audience: string
  location: string
  style: string
  personality: string
}) {
  // الخطوة 1: نجلب البيانات الحقيقية بالتوازي
  const [colors, fonts] = await Promise.all([
    fetchColorPalette(formData.industry),
    fetchFonts(getCategoryFromStyle(formData.style))
  ])

  // الخطوة 2: نبني الـ prompt
  const prompt = `
You are a design system expert. You have REAL data to work with.

Brand info:
- Project: ${formData.projectName}
- Industry: ${formData.industry}
- Audience: ${formData.audience}
- Location: ${formData.location}
- Style: ${formData.style}
- Personality: ${formData.personality}

Available real colors from The Color API:
${colors.map((c: ColorResult) => `${c.name}: ${c.hex}`).join('\n')}

Available real fonts from Google Fonts:
${fonts.join(', ')}

Pick the BEST combination and explain why.
Return ONLY this JSON with no extra text:
{
  "primaryColor": { "hex": "#hex", "name": "color name" },
  "secondaryColor": { "hex": "#hex", "name": "color name" },
  "fontPrimary": "font name",
  "fontSecondary": "font name",
  "reasoning": "one sentence why this fits the brand",
  "wcagLevel": "AA or AAA",
  "tokens": {
    "borderRadius": "4px or 8px or 16px",
    "spacing": "8px"
  }
}
`

  // الخطوة 3: نرسل لـ Gemini
  const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }]
    })
  }
)

  // الخطوة 4: نتحقق من الـ response
  const json = await response.json()

  if (!response.ok) {
    console.error('Gemini error:', json)
    throw new Error(json.error?.message ?? 'Gemini request failed')
  }

  // الخطوة 5: نستخرج النص ونحوله لـ JSON
  const text = json.candidates[0].content.parts[0].text
  const clean = text.replace(/```json|```/g, '').trim()
  return JSON.parse(clean)
}

function getCategoryFromStyle(style: string): string {
  const map: Record<string, string> = {
    'Minimal':       'sans-serif',
    'Luxury':        'serif',
    'Modern':        'sans-serif',
    'Editorial':     'serif',
    'Glassmorphism': 'sans-serif'
  }
  return map[style] ?? 'sans-serif'
}