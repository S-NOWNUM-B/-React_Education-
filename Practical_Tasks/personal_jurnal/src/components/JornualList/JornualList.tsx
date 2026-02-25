import "./JornualList.css";
import type { ReactNode } from "react";

function JornualList({ children }: { children: ReactNode }) {
  return <div className="journal-list">{children}</div>;
}

export default JornualList;
