import CardButton from "../CardButton/CardButton";
import styles from "./JornualAddButton.module.css";

function JornualAddButton() {
  return (
    <CardButton className={styles.journalAdd}>
      <img src="/plus.svg" alt="Plus-icon" />
      Новое воспоминание
    </CardButton>
  );
}

export default JornualAddButton;
