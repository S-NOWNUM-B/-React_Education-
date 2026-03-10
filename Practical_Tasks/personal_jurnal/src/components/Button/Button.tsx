import "./Button.css";
import { memo } from "react";
import type { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="button accent" onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(Button);
