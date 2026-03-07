import styles from "./JournalForm.module.css";

import { type ComponentProps, useReducer, useEffect, useState } from "react";

import Button from "../Button/Button";
import {
  formReducer,
  INITIAL_STATE,
  type FormValues,
} from "./JournalForm.state";

function JournalForm({ onSubmit }: { onSubmit: (data: FormValues) => void }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const [showValidation, setShowValidation] = useState(false);

  useEffect(() => {
    if (showValidation) {
      const timerId = setTimeout(() => {
        setShowValidation(false);
        dispatchForm({ type: "RESET_VALIDITY" });
      }, 2000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [showValidation]);

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();

    const validation = {
      title: formState.values.title.trim().length > 0,
      post: formState.values.post.trim().length > 0,
      date: formState.values.date.length > 0,
      tag: formState.values.tag.trim().length > 0,
    };

    dispatchForm({ type: "SET_ALL_VALIDITY", isValid: validation });

    const isValidForm = Object.values(validation).every((isValid) => isValid);

    if (!isValidForm) {
      setShowValidation(true);
      return;
    }

    onSubmit(formState.values);
    dispatchForm({ type: "RESET_FORM" });
    setShowValidation(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    dispatchForm({
      type: "SET_FIELD_VALUE",
      field: name as keyof FormValues,
      value,
    });
  };

  return (
    <form className={styles.journalForm} onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Заголовок"
          value={formState.values.title}
          onChange={handleChange}
          className={`${styles["inputTitle"]} ${formState.isValid.title ? "" : styles["invalid"]}`}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="date" className={styles["form-label"]}>
          <img src="/calendar.svg" alt="иконка календаря" />
          <span>Дата</span>
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={formState.values.date}
          onChange={handleChange}
          className={`${styles["input"]} ${formState.isValid.date ? "" : styles["invalid"]}`}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="tag" className={styles["form-label"]}>
          <img src="/folder.svg" alt="иконка папки" />
          <span>Метки</span>
        </label>
        <input
          type="text"
          name="tag"
          id="tag"
          value={formState.values.tag}
          onChange={handleChange}
          className={`${styles["input"]} ${formState.isValid.tag ? "" : styles["invalid"]}`}
        />
      </div>
      <textarea
        name="post"
        cols={30}
        rows={10}
        placeholder="Текст записи"
        value={formState.values.post}
        onChange={handleChange}
        className={`${styles["input"]} ${formState.isValid.post ? "" : styles["invalid"]}`}
      />
      <Button text="Сохранить" type="submit" />
    </form>
  );
}

export default JournalForm;
