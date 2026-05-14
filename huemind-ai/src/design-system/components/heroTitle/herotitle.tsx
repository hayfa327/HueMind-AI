import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import styles from './heroTiltle.module.css'

const words = [
  'Simple',
  'Fast',
  'AI-Powered',
  'Custom',
  'Intelligent',
]

function HeroTitle() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <h1 className={styles.title}>
      Design Systems
      <br />

      <span className={styles.bold}>
        Made{' '}

        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{
              opacity: 0,
              y: 20,
              filter: 'blur(8px)',
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: 'blur(8px)',
            }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
            className={styles.gradientWord}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  )
}

export default HeroTitle