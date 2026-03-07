import "./LeftPanel.css";
import type { ReactNode } from "react";

interface LeftPanelProps {
  children: ReactNode;
}

function LeftPanel({ children }: LeftPanelProps) {
  return <div className="left-panel">{children}</div>;
}

export default LeftPanel;
