import { fetchColorPalette, fetchFonts } from "./fetchDesignData"

import type { ColorResult } from "./fetchDesignData"

 

export async function generateDesignSystem(formData: {
  projectName: string
  industry: string
  audience: string
  style: string
  personality: string
}) {
  const [colors, fonts] = await Promise.all([
    fetchColorPalette(formData.industry),
    fetchFonts(getCategoryFromStyle(formData.style))
  ])

  const prompt = `
You are a design system expert. You have REAL data to work with.

Brand info:
- Project: ${formData.projectName}
- Industry: ${formData.industry}
- Audience: ${formData.audience}
- Style: ${formData.style}
- Personality: ${formData.personality}

Available real colors from The Color API:
${colors.map((c: ColorResult) => `${c.name}: ${c.hex}`).join('\n')}

Available real fonts from Google Fonts:
${fonts.join(', ')}

Pick the BEST combination and explain why.
Return ONLY this JSON:
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

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5
    })
  })

  const json = await response.json()
  const text = json.choices[0].message.content
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