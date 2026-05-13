export interface ColorResult {
  hex: string
  name: string
}

interface FontItem {
  family: string
  category: string
}

const INDUSTRY_COLORS: Record<string, string> = {
  'Finance':    '1B4FD8',
  'Healthcare': '0D9488',
  'Education':  '7C3AED',
  'Travel':     'F59E0B',
  'E-commerce': 'EC4899',
}

export async function fetchColorPalette(industry: string): Promise<ColorResult[]> {
  const hex = INDUSTRY_COLORS[industry] ?? '7C3AED'
  const res = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${hex}&mode=analogic&count=5`
  )
  const data = await res.json()
  return data.colors.map((c: ColorResult) => ({
    hex: c.hex,
    name: c.name
  }))
}

export async function fetchFonts(category: string): Promise<string[]> {
  const key = import.meta.env.VITE_GOOGLE_FONTS_KEY
  const res = await fetch(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${key}&category=${category}&sort=popularity`
  )
  const data = await res.json()
  return data.items.slice(0, 5).map((f: FontItem) => f.family)
}