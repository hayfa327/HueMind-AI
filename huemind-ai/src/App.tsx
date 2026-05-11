import Button from "./design-system/components/button/button"
import styles from './App.module.css';

function App() {
  

  return (
      <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          HueMind AI 
        </h1>

        <p className={styles.description}>
          AI-powered design system assistant for generating
          palettes, typography, themes, accessibility
          recommendations, and UI inspiration.
        </p>

        <Button label="Generate Design System" />
      </section>
    </main>
  );
}
export default App
