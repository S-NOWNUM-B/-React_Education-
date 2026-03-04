import "./CardButton.css";
import type { ReactNode } from "react";
import { cn } from "../../utils/classNames";

interface CardButtonProps {
  children: ReactNode;
  className?: string;
}

function CardButton({ children, className }: CardButtonProps) {
  return <button className={cn("card-button", className)}>{children}</button>;
}

export default CardButton;
