import styles from "./Input.module.css";
import cn from "classnames";

const input = forwiordRef(function Input({ className, isValid, appearence, ...props }, ref) {
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
}

export default Input;
