import styles from './accessibilityBadge.module.css'

interface AccessibilityBadgeProps {
  level: 'AA' | 'AAA'
  contrastRatio: string
  description: string
}

export default function AccessibilityBadge({
  level,
  contrastRatio,
  description,
}: AccessibilityBadgeProps) {
  return (
    <div className={styles.card}>
      <div className={level === 'AAA' ? styles.badgeAAA : styles.badgeAA}>
        ✓ WCAG {level}
      </div>
      <p className={styles.ratio}>{contrastRatio}:1</p>
      <p className={styles.label}>Contrast Ratio</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}