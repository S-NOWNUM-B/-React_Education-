import styles from "./Input.module.css";
import cn from "classnames";

function Input({ className, isValid, appearence, ...props }) {
  return (
    <input
      {...props}
      className={cn(className, styles["input"], {
        [styles["invalid"]]: !isValid,
        [styles["input-title"]]: appearence === "title",
      })}
    />
  );
}

export default Input;
