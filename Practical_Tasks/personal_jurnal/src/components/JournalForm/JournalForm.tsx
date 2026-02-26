import "./JournalFrom.css";

import { useState } from "react";
import Button from "../Button/Button.tsx";

function JournalForm() {
  const [inputData, setInputData] = useState("");

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  return (
    <>
      <form className="journal-form">
		<input type="text" name="title" />
        <input type="date" name="date" />
        <input type="text" name="tag" value={inputData} onChange={inputChange} />
        <textarea name="post" id="" cols="30" rows="10" />
		<Button text="Сохранить" />
      </form>
    </>
  );
}

export default JournalForm;
