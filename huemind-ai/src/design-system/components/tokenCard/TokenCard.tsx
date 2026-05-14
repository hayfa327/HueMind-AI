import { useEffect, useRef } from 'react'
import styles from './tokenCard.module.css'

interface TokenCardProps {
  name: string
  value: string
  type: 'radius' | 'spacing' | 'color'
}

export default function TokenCard({ name, value, type }: TokenCardProps) {
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (visualRef.current) {
      if (type === 'radius') {
        visualRef.current.style.setProperty('--token-radius', value)
      }
      if (type === 'color') {
        visualRef.current.style.setProperty('--token-color', value)
      }
      if (type === 'spacing') {
        visualRef.current.style.setProperty('--token-spacing', value)
      }
    }
  }, [value, type])

  return (
    <div className={styles.card}>
      <p className={styles.name}>{name}</p>
      <p className={styles.value}>{value}</p>
      <div className={styles.visual}>
        {type === 'radius' && (
          <div ref={visualRef} className={styles.radiusBox} />
        )}
        {type === 'spacing' && (
          <div ref={visualRef} className={styles.spacingRow}>
            <div className={styles.spacingDot} />
            <div className={styles.spacingDot} />
            <div className={styles.spacingDot} />
          </div>
        )}
        {type === 'color' && (
          <div ref={visualRef} className={styles.colorBox} />
        )}
      </div>
    </div>
  )
}