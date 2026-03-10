import "./CardButton.css";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface CardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function CardButton({ children, className, ...props }: CardButtonProps) {
  const cl = "card-button" + (className ? " " + className : "");

  return (
    <button className={cl} {...props}>
      {children}
    </button>
  );
}

export default CardButton;
