import styles from "./Input.module.css";
import cn from "classnames";
import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isValid?: boolean;
  appearence?: "title" | "default";
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, isValid = true, appearence, ...props },
  ref,
) {
  return (
    <input
      {...props}
      ref={ref}
      className={cn(className, styles["input"], {
        [styles["invalid"]]: !isValid,
        [styles["input-title"]]: appearence === "title",
      })}
    />
  );
});

Input.displayName = "Input";

export default Input;
