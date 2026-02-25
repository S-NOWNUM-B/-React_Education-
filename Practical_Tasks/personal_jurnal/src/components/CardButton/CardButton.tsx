import type { ReactNode } from "react";

import "./CardButton.css";

interface CardButtonProps {
  children: ReactNode;
  className?: string;
}

function CardButton({ children, className = "" }: CardButtonProps) {
  return (
    <button className={`card-button ${className}`}>
			{children}
		</button>
  );
}

export default CardButton;
