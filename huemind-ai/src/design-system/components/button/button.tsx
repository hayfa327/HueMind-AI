import styles from './button.module.css';
import type { ButtonProps } from './button.types';

function Button({ label, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;