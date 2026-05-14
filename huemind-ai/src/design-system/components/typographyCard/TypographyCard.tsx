import { useEffect, useRef } from 'react'
import styles from './typographyCard.module.css'

interface TypographyCardProps {
  fontFamily: string
  role: 'Heading' | 'Body'
  category: string
}

export default function TypographyCard({
  fontFamily,
  role,
  category,
}: TypographyCardProps) {
  const previewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.style.setProperty('--font-preview', `'${fontFamily}', sans-serif`)
    }
  }, [fontFamily])

  return (
    <div className={styles.card}>
      <p className={styles.role}>{role}</p>
      <div ref={previewRef} className={styles.preview}>
        Aa
      </div>
      <div className={styles.info}>
        <h3 className={styles.fontName}>{fontFamily}</h3>
        <p className={styles.category}>{category}</p>
      </div>
      <div className={styles.scaleRow}>
  <span className={styles.scaleItem}>Display</span>
  <span className={styles.scaleItem}>Heading</span>
  <span className={styles.scaleItem}>Body</span>
  <span className={styles.scaleItem}>Caption</span>
</div>
    </div>
  )
}