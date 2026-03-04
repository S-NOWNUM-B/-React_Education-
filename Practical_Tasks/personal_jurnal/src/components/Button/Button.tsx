import styles from "./Button.module.css";
import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
}

function Button({ text, ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles.accent}`} {...props}>
      {text}
    </button>
  );
}

export default Button;
