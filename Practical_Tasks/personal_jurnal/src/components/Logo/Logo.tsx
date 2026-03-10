import styles from "./Logo.module.css";
import { memo } from "react";

interface LogoProps {
  image: string;
}

function Logo({ image }: LogoProps) {
  return <img className={styles.logo} src={image} alt="Логотип журнала" />;
}

export default memo(Logo);
