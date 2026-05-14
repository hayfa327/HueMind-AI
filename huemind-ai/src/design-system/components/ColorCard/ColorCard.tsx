import { useEffect, useRef } from 'react'
import styles from './colorCard.module.css'

interface ColorCardProps {
  label: string
  hex: string
  name: string
}

export default function ColorCard({ label, hex, name }: ColorCardProps) {
  const previewRef = useRef<HTMLDivElement>(null)
  const sampleRef = useRef<HTMLDivElement>(null)

  const getLightness = (bg: string) => {
    const r = parseInt(bg.slice(1, 3), 16)
    const g = parseInt(bg.slice(3, 5), 16)
    const b = parseInt(bg.slice(5, 7), 16)
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255
  }

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.style.setProperty('--card-color', hex)
    }
    if (sampleRef.current) {
      const textColor = getLightness(hex) > 0.5 ? '#111111' : '#ffffff'
      sampleRef.current.style.setProperty('--sample-bg', hex)
      sampleRef.current.style.setProperty('--sample-text', textColor)
    }
  }, [hex])

  return (
    <div className={styles.card}>
      <div ref={previewRef} className={styles.preview} />
      <div className={styles.info}>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.hex}>{hex}</p>
        <p className={styles.name}>{name}</p>
        <div ref={sampleRef} className={styles.sample} />
      </div>
    </div>
  )
}