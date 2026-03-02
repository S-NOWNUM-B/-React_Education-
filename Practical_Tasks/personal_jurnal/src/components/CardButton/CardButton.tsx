import "./CardButton.css";
import type { ReactNode } from "react";

interface CardButtonProps {
  children: ReactNode;
  className?: string;
}

function CardButton({ children, className }: CardButtonProps) {
  const cl = className ? `card-button ${className}` : "card-button";

  return <button className={cl}>{children}</button>;
}

export default CardButton;
