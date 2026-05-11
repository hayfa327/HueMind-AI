import styles from './loadingScreen.module.css'

function LoadingScreen() {
  return (
    <section className={styles.container}>
      <div className={styles.loader} />

      <p className={styles.text}>
        Generating your design system...
      </p>
    </section>
  )
}

export default LoadingScreen