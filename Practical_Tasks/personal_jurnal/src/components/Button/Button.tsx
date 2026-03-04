import "./Button.css";
import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
}

function Button({ text, ...props }: ButtonProps) {
  return (
    <button className="button accent" {...props}>
      {text}
    </button>
  );
}

export default Button;
