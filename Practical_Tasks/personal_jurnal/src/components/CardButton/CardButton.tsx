import "./CardButton.css";
import type { ReactNode } from "react";

function CardButton({ children, className }: { children: ReactNode; className?: string }) {
  const cl = "card-button" + (className ? " " + className : "");

  return <button className={cl}>{children}</button>;
}

export default CardButton;
