import styles from "./Body.module.css";
import type { ReactNode } from "react";

interface BodyProps {
  children: ReactNode;
}

function Body({ children }: BodyProps) {
  return <div className={styles.body}>{children}</div>;
}

export default Body;
