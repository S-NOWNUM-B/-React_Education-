import "./CardButton.css";
import type { ReactNode } from "react";

interface CardButtonProps {
  children: ReactNode;
  className?: string;
}

function CardButton({ children, className }: CardButtonProps) {
  const cl = "card-button" + (className ? " " + className : "");

  return <button className={cl}>{children}</button>;
}

export default CardButton;
