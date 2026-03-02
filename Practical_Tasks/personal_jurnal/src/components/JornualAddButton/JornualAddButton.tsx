import CardButton from "../CardButton/CardButton";

import "./JornualAddButton.css";

function JornualAddButton() {
  return (
    <CardButton className="journal-add">
      <img src="/plus.svg" alt="Plus-icon" />
      Новое воспоминание
    </CardButton>
  );
}

export default JornualAddButton;
