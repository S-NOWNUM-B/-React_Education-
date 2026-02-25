import "./JornualList.css";
import type { ReactNode } from "react";

interface JornualListProps {
  children: ReactNode;
}

function JornualList({ children }: JornualListProps) {
  return <div className="journal-list">{children}</div>;
}

export default JornualList;
