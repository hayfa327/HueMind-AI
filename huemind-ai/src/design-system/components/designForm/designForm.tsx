import React, { useState } from 'react';

import styles from './designForm.module.css';

import HeroTitle from '../heroTitle/herotitle';

import LoadingScreen from '../loadingScreen/loadingScreen';



function DesignForm() {
const [loading, setLoading] = useState(false)

  const handleSubmit = (
  event: React.FormEvent
) => {
  event.preventDefault()

  setLoading(true)

  setTimeout(() => {
    setLoading(false)
  }, 4000)
}

 if (loading) {
  return <LoadingScreen />
}


   return (
    <section className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.content}>
          <HeroTitle />

          <p className={styles.description}>
            Generate beautiful, consistent design foundations
            with AI. Colors, typography, and tokens in seconds.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label
              htmlFor="project-name"
              className={styles.label}
            >
              Project Name
            </label>

            <input
              id="project-name"
              type="text"
              placeholder="FitFlow"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label
              htmlFor="industry"
              className={styles.label}
            >
              Industry
            </label>

            <select
              id="industry"
              className={styles.select}
            >
              <option>Choose one</option>

              <option>Travel</option>

              <option>Finance</option>

              <option>Healthcare</option>

              <option>Education</option>

              <option>E-commerce</option>
            </select>
          </div>

          <div className={styles.field}>
            <label
              htmlFor="audience"
              className={styles.label}
            >
              Audience
            </label>

            <input
              id="audience"
              type="text"
              placeholder="Young professionals"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label
              htmlFor="location"
              className={styles.label}
            >
              Location
            </label>

            <input
              id="location"
              type="text"
              placeholder="Sweden"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label
              htmlFor="style"
              className={styles.label}
            >
              Visual Style
            </label>

            <select
              id="style"
              className={styles.select}
            >
              <option>Choose one</option>

              <option>Minimal</option>

              <option>Luxury</option>

              <option>Glassmorphism</option>

              <option>Modern</option>

              <option>Editorial</option>
            </select>
          </div>

          <div className={styles.field}>
            <label
              htmlFor="personality"
              className={styles.label}
            >
              Personality
            </label>

            <select
              id="personality"
              className={styles.select}
            >
              <option>Choose one</option>

              <option>Elegant</option>

              <option>Playful</option>

              <option>Professional</option>

              <option>Bold</option>

              <option>Creative</option>
            </select>
          </div>

          <button
            type="submit"
            className={styles.button}
          >
            Generate System →
          </button>
        </form>
      </div>
    </section>
  )
}

export default DesignForm;