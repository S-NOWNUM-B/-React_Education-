import SelectUser from "../SelectUser/SelectUser";
import styles from "./Header.module.css";
import type { OnUserChange } from "../../types";

interface HeaderProps {
  changedUser: OnUserChange;
}

function Header({ changedUser }: HeaderProps) {
  return (
    <>
      <img className={styles.logo} src="/logo.svg" alt="Логотип журнала" />
      <SelectUser changedUser={changedUser} />
    </>
  );
}

export default Header;
