import "./JournalForm.css";

import { useState } from "react";
import Button from "../Button/Button.tsx";

function JournalForm() {
  const [inputData, setInputData] = useState("");

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const addJournalItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const FormProps = Object.fromEntries(formData);
    console.log(FormProps);
  };

  return (
    <>
      <form className="journal-form" onSubmit={addJournalItem}>
        <input type="text" name="title" />
        <input type="date" name="date" />
        <input
          type="text"
          name="tag"
          value={inputData}
          onChange={inputChange}
        />
        <textarea name="post" cols={30} rows={10} />
        <Button text="Сохранить" onClick={() => console.log("Нажали")} />
      </form>
    </>
  );
}

export default JournalForm;
