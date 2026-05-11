import Button from "../button/button"

import Input from '../input/input';

import Select from '../select/select'; 

import styles from './designForm.module.css';

function DesignForm() {
  return (
    <section className={styles.container}>
      <div className={styles.logo} />

      <h1 className={styles.title}>
        AI Design System Assistant
      </h1>

      <p className={styles.description}>
        Generate a complete UI design foundation
        for your project.
      </p>

      <form className={styles.form}>
        <Input
          label="Application or Brand Name"
          placeholder="e.g., FitFlow"
        />

        <Select
          label="Industry Type"
          options={[
            'Fintech',
            'Travel',
            'Fitness',
            'Education',
          ]}
        />

        <Input
          label="Target Audience"
          placeholder="Young adults, students..."
        />

        <Input
          label="Country or Region"
          placeholder="Sweden, United States..."
        />

        <Select
          label="Preferred Style"
          options={[
            'Minimal',
            'Modern',
            'Glassmorphism',
            'Corporate',
          ]}
        />

        <Button label="Generate Design System" />
      </form>
    </section>
  );
}

export default DesignForm;