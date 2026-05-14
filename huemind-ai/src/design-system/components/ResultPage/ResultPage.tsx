import styles from './resultPage.module.css'

interface DesignResult {
  primaryColor: { hex: string; name: string }
  secondaryColor: { hex: string; name: string }
  fontPrimary: string
  fontSecondary: string
  reasoning: string
  wcagLevel: string
  tokens: {
    borderRadius: string
    spacing: string
  }
}

interface ResultPageProps {
  result: DesignResult
  projectName: string
  onReset: () => void
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

function getLuminance(hex: string) {
  const { r, g, b } = hexToRgb(hex)
  const toLinear = (c: number) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  }
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

function getContrastRatio(hex1: string, hex2: string) {
  const l1 = getLuminance(hex1)
  const l2 = getLuminance(hex2)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2)
}

function getTextColor(bgHex: string): string {
  const { r, g, b } = hexToRgb(bgHex)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? '#111111' : '#ffffff'
}

function mixColors(hex1: string, hex2: string, ratio = 0.5): string {
  const c1 = hexToRgb(hex1)
  const c2 = hexToRgb(hex2)
  const r = Math.round(c1.r * ratio + c2.r * (1 - ratio))
  const g = Math.round(c1.g * ratio + c2.g * (1 - ratio))
  const b = Math.round(c1.b * ratio + c2.b * (1 - ratio))
  return `rgb(${r},${g},${b})`
}

export default function ResultPage({ result, projectName, onReset }: ResultPageProps) {
  const primary = result.primaryColor.hex
  const secondary = result.secondaryColor.hex
  const primaryText = getTextColor(primary)
  const secondaryText = getTextColor(secondary)
  const contrastRatio = getContrastRatio(primary, '#ffffff')
  const contrastDark = getContrastRatio(primary, '#111111')

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={styles.header}>
          <div className={styles.projectBadge}>
            {projectName || 'Your Project'} — Design System
          </div>
          <h1 className={styles.title}>Generated<br />Design System</h1>
          <p className={styles.reasoning}>{result.reasoning}</p>
        </div>

        {/* ── PALETTE ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Color Palette</p>

          {/* Hero colors */}
          <div className={styles.paletteHero}>
            <div
              className={styles.paletteHeroColor}
              style={{ background: primary }}
            >
              <div className={styles.paletteColorLabel}>
                <h3 style={{ color: primaryText }}>Primary</h3>
                <p style={{ color: primaryText }}>{result.primaryColor.name}</p>
                <p style={{ color: primaryText, opacity: 0.7 }}>{primary}</p>
              </div>
            </div>
            <div
              className={styles.paletteHeroColor}
              style={{ background: secondary }}
            >
              <div className={styles.paletteColorLabel}>
                <h3 style={{ color: secondaryText }}>Secondary</h3>
                <p style={{ color: secondaryText }}>{result.secondaryColor.name}</p>
                <p style={{ color: secondaryText, opacity: 0.7 }}>{secondary}</p>
              </div>
            </div>
          </div>

          {/* Usage chips */}
          <div className={styles.usageRow}>
            <div
              className={styles.usageChip}
              style={{ background: primary, color: primaryText }}
            >
              Button
            </div>
            <div
              className={styles.usageChip}
              style={{ background: secondary, color: secondaryText }}
            >
              Accent
            </div>
            <div
              className={styles.usageChip}
              style={{
                background: mixColors(primary, '#ffffff', 0.15),
                color: primary
              }}
            >
              Tint
            </div>
            <div
              className={styles.usageChip}
              style={{ background: '#111111', color: '#ffffff' }}
            >
              Text
            </div>
          </div>

          {/* Combinations */}
          <div className={styles.combosGrid}>
            <div className={styles.comboCard}>
              <div
                className={styles.comboPreview}
                style={{ background: primary }}
              >
                <span style={{
                  background: 'white',
                  color: primary,
                  padding: '8px 16px',
                  borderRadius: result.tokens.borderRadius,
                  fontSize: 14,
                  fontWeight: 600
                }}>
                  Button on Primary
                </span>
              </div>
              <div className={styles.comboLabel}>Primary Background</div>
            </div>

            <div className={styles.comboCard}>
              <div
                className={styles.comboPreview}
                style={{ background: 'white' }}
              >
                <span style={{
                  background: primary,
                  color: primaryText,
                  padding: '8px 16px',
                  borderRadius: result.tokens.borderRadius,
                  fontSize: 14,
                  fontWeight: 600
                }}>
                  Primary Button
                </span>
              </div>
              <div className={styles.comboLabel}>White Background</div>
            </div>

            <div className={styles.comboCard}>
              <div
                className={styles.comboPreview}
                style={{ background: secondary }}
              >
                <span style={{
                  background: primary,
                  color: primaryText,
                  padding: '8px 16px',
                  borderRadius: result.tokens.borderRadius,
                  fontSize: 14,
                  fontWeight: 600
                }}>
                  Mixed
                </span>
              </div>
              <div className={styles.comboLabel}>Color on Color</div>
            </div>
          </div>
        </div>

        {/* ── TYPOGRAPHY ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Typography System</p>
          <div className={styles.typographyShowcase}>

            <div className={styles.fontPair}>
              <div className={styles.fontBlock}>
                <p className={styles.fontRole}>Heading Font</p>
                <div className={styles.fontName}
                  style={{ fontFamily: result.fontPrimary }}>
                  {result.fontPrimary}
                </div>
                <p className={styles.fontCategory}>Display / Headings</p>
              </div>
              <div className={styles.fontBlock}>
                <p className={styles.fontRole}>Body Font</p>
                <div className={styles.fontName}
                  style={{ fontFamily: result.fontSecondary }}>
                  {result.fontSecondary}
                </div>
                <p className={styles.fontCategory}>Body / UI</p>
              </div>
            </div>

            {/* Type scale */}
            <div className={styles.typographyScale}>
              <p className={styles.scaleLabel}>Type Scale</p>
              {[
                { label: '72px', size: 72, text: 'Display' },
                { label: '48px', size: 48, text: 'Heading 1' },
                { label: '32px', size: 32, text: 'Heading 2' },
                { label: '24px', size: 24, text: 'Heading 3' },
                { label: '16px', size: 16, text: 'Body text — The quick brown fox' },
                { label: '14px', size: 14, text: 'Caption — Small details matter' },
              ].map(item => (
                <div key={item.label} className={styles.scaleItem}>
                  <span className={styles.scaleSize}>{item.label}</span>
                  <span
                    className={styles.scaleText}
                    style={{
                      fontSize: Math.min(item.size, 48),
                      fontFamily: item.size >= 32
                        ? result.fontPrimary
                        : result.fontSecondary
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Typography in context */}
            <div className={styles.typographyContext}>
              <p className={styles.scaleLabel}>In Context</p>
              <div className={styles.contextCard}>
                <div
                  className={styles.contextCardTitle}
                  style={{ fontFamily: result.fontPrimary }}
                >
                  {projectName || 'Your Brand'} — Where design meets purpose
                </div>
                <div
                  className={styles.contextCardBody}
                  style={{ fontFamily: result.fontSecondary }}
                >
                  This is how your body text will look across your product.
                  Clean, readable, and perfectly paired with your heading font
                  to create a cohesive typographic experience.
                </div>
                <div
                  className={styles.contextCardButton}
                  style={{
                    background: primary,
                    color: primaryText,
                    fontFamily: result.fontSecondary,
                    borderRadius: result.tokens.borderRadius
                  }}
                >
                  Get Started →
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TOKENS ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Design Tokens</p>
          <div className={styles.tokensGrid}>
            <div className={styles.tokenCard}>
              <p className={styles.tokenName}>Border Radius</p>
              <p className={styles.tokenValue}>{result.tokens.borderRadius}</p>
              <div className={styles.tokenVisual}>
                <div style={{
                  width: 60,
                  height: 24,
                  background: primary,
                  borderRadius: result.tokens.borderRadius
                }} />
              </div>
            </div>

            <div className={styles.tokenCard}>
              <p className={styles.tokenName}>Base Spacing</p>
              <p className={styles.tokenValue}>{result.tokens.spacing}</p>
              <div className={styles.tokenVisual} style={{ gap: result.tokens.spacing, display: 'flex' }}>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} style={{
                    width: 12,
                    height: 12,
                    background: primary,
                    borderRadius: 3,
                    opacity: i * 0.25
                  }} />
                ))}
              </div>
            </div>

            <div className={styles.tokenCard}>
              <p className={styles.tokenName}>Primary Color</p>
              <p className={styles.tokenValue}>{primary}</p>
              <div className={styles.tokenVisual}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: primary
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── ACCESSIBILITY ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Accessibility</p>
          <div className={styles.a11yGrid}>

            <div className={styles.a11yCard}>
              <div className={`${styles.a11yBadge} ${result.wcagLevel === 'AAA' ? styles.a11yBadgeAAA : styles.a11yBadgeAA}`}>
                ✓ WCAG {result.wcagLevel}
              </div>
              <p className={styles.a11yTitle}>Compliance Level</p>
              <p className={styles.a11yDesc}>
                {result.wcagLevel === 'AAA'
                  ? 'Highest accessibility standard. Suitable for all audiences including those with visual impairments.'
                  : 'Standard accessibility compliance. Meets requirements for most digital products and legal standards.'
                }
              </p>
            </div>

            <div className={styles.a11yCard}>
              <p className={styles.a11yTitle}>Contrast Ratios</p>
              <div className={styles.contrastDemo}>
                <div
                  className={styles.contrastRow}
                  style={{ background: primary, color: '#ffffff' }}
                >
                  White on Primary — {contrastRatio}:1
                </div>
                <div
                  className={styles.contrastRow}
                  style={{ background: primary, color: '#111111' }}
                >
                  Dark on Primary — {contrastDark}:1
                </div>
                <div
                  className={styles.contrastRow}
                  style={{ background: '#ffffff', color: primary }}
                >
                  Primary on White — {contrastRatio}:1
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ACTIONS ── */}
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={onReset}>
            Generate Another System →
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() => {
              const tokens = `
/* HueMind AI — Generated Design Tokens */
:root {
  --color-primary: ${primary};
  --color-secondary: ${secondary};
  --font-heading: '${result.fontPrimary}', sans-serif;
  --font-body: '${result.fontSecondary}', sans-serif;
  --border-radius: ${result.tokens.borderRadius};
  --spacing-base: ${result.tokens.spacing};
}
              `.trim()
              navigator.clipboard.writeText(tokens)
              alert('CSS tokens copied to clipboard!')
            }}
          >
            Copy CSS Tokens
          </button>
        </div>

      </div>
    </div>
  )
}