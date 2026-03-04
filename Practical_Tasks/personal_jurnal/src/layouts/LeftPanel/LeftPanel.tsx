import styles from "./LeftPanel.module.css";
import type { ReactNode } from "react";

interface LeftPanelProps {
  children: ReactNode;
}

function LeftPanel({ children }: LeftPanelProps) {
  return <div className={styles.leftPanel}>{children}</div>;
}

export default LeftPanel;
