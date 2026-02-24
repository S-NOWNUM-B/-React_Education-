import type { ReactNode } from "react";

interface CardButtonProps {
  children: ReactNode;
  className?: string;
}

function CardButton({ children, className = "" }: CardButtonProps) {
  return (
    <button
      className={`rounded-[3px] bg-[#3a3a3a] text-white p-5 border-none cursor-pointer hover:bg-white/10 text-start block ${className}`}
    >
      {children}
    </button>
  );
}

export default CardButton;
