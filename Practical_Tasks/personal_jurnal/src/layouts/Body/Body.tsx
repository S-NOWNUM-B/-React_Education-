import "./Body.css";
import type { ReactNode } from "react";

interface BodyProps {
  children: ReactNode;
}

function Body({ children }: BodyProps) {
  return <div className="body">{children}</div>;
}

export default Body;
