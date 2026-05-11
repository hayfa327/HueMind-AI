import styles from './input.module.css';

import type { InputProps } from "./input.types";

function Input({
  label,
  placeholder,
  type = 'text',
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
      </label>

      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;