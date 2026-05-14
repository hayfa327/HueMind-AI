import React, { useState } from 'react';
import styles from './designForm.module.css';
import HeroTitle from '../heroTitle/herotitle';
import LoadingScreen from '../loadingScreen/loadingScreen';
import { generateDesignSystem } from  "../../../services/generateSystem";
import ResultPage from  "../ResultPage/ResultPage";



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

interface FormData {
  projectName: string
  industry: string
  audience: string
  location: string
  style: string
  personality: string
}

function DesignForm() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<DesignResult | null>(null)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState<FormData>({
    projectName: '',
    industry: '',
    audience: '',
    location: '',
    style: '',
    personality: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      const data = await generateDesignSystem(formData)
      setResult(data)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <LoadingScreen />

  if (error) {
    return (
      <section className={styles.container}>
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
        <button className={styles.button} onClick={() => setError('')}>
          Try Again
        </button>
      </section>
    )
  }

  if (result) {
    return (
      <ResultPage
        result={result}
        projectName={formData.projectName}
        onReset={() => setResult(null)}
      />
    )
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
            <label htmlFor="projectName" className={styles.label}>
              Project Name
            </label>
            <input
              id="projectName"
              type="text"
              placeholder="FitFlow"
              className={styles.input}
              value={formData.projectName}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="industry" className={styles.label}>
              Industry
            </label>
            <select
              id="industry"
              className={styles.select}
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="">Choose one</option>
              <option>Travel</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>E-commerce</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="audience" className={styles.label}>
              Audience
            </label>
            <input
              id="audience"
              type="text"
              placeholder="Young professionals"
              className={styles.input}
              value={formData.audience}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="location" className={styles.label}>
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Sweden"
              className={styles.input}
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="style" className={styles.label}>
              Visual Style
            </label>
            <select
              id="style"
              className={styles.select}
              value={formData.style}
              onChange={handleChange}
            >
              <option value="">Choose one</option>
              <option>Minimal</option>
              <option>Luxury</option>
              <option>Glassmorphism</option>
              <option>Modern</option>
              <option>Editorial</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="personality" className={styles.label}>
              Personality
            </label>
            <select
              id="personality"
              className={styles.select}
              value={formData.personality}
              onChange={handleChange}
            >
              <option value="">Choose one</option>
              <option>Elegant</option>
              <option>Playful</option>
              <option>Professional</option>
              <option>Bold</option>
              <option>Creative</option>
            </select>
          </div>

          <button type="submit" className={styles.button}>
            Generate System →
          </button>
        </form>
      </div>
    </section>
  )
}

export default DesignForm