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

    
 const response = await fetch('/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ prompt }),
});

  
   const json = await response.json() as {
  candidates?: { content: { parts: { text: string }[] } }[]
  error?: { message: string }
}
 
 
if (response.status === 503) {
  throw new Error('Gemini is busy. Please try again in a few seconds.')
}

if (!response.ok) {
  console.error('Gemini error:', json)
  throw new Error(json.error?.message ?? 'Gemini request failed')
}

if (!json.candidates || json.candidates.length === 0) {
  throw new Error('No response from Gemini. Please try again.')
}

const text = json.candidates[0].content.parts[0].text
const clean = text.replace(/```json|```/g, '').trim()
return JSON.parse(clean)

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
}