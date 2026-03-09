import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <img className={styles.logo} src="/logo.svg" alt="Логотип журнала" />
      <select name="user" id="user">
        
      </select>
    </>
  );
}

export default Header;
