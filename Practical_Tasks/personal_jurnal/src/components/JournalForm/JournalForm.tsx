import "./JournalForm.css";
import type { FormEvent } from "react";

import Button from "../Button/Button";

interface JournalFormProps {
  onSubmit: (item: {
    title: string;
    text: string;
    date: string;
    tag?: string;
  }) => void;
}

function JournalForm({ onSubmit }: JournalFormProps) {
  const addJournalItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData.entries()) as {
      title: string;
      text: string;
      date: string;
      tag?: string;
    };
    onSubmit(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="text" cols={30} rows={10} />
      <Button text="Сохранить" onClick={() => console.log("Нажали")} />
    </form>
  );
}

export default JournalForm;
