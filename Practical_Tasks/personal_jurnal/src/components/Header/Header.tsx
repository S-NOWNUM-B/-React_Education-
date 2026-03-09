import SelectUser from "../SelectUser/SelectUser";
import styles from "./Header.module.css";

function Header({ changedUser }) {
  const changeUser = (e: { target: { value: unknown } }) => {
    changedUser(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <img className={styles.logo} src="/logo.svg" alt="Логотип журнала" />
      <SelectUser changedUser={changeUser} />
    </>
  );
}

export default Header;
