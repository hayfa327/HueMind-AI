import styles from './select.module.css';

import type { SelectProps } from "./select.types";

 function Select({
  label,
  options,
}: SelectProps) {
  return (
    <div className={styles.wrapper}>
      <label
        className={styles.label}
        htmlFor={label}
      >
        {label}
      </label>

      <select
        id={label}
        className={styles.select}
      >
        <option>Select an option</option>

        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;