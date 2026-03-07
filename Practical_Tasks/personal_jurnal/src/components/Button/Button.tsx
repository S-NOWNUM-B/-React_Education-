import "./Button.css";
import type { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="button accent" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
