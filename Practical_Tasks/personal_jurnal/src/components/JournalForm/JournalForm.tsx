import styles from "./JournalForm.module.css";

import { type ComponentProps, useState, useEffect } from "react";

import Button from "../Button/Button";
import type { JournalFormData } from "../../types";

interface JournalFormProps {
  onSubmit: (item: JournalFormData) => void;
}

const INITIAL_FORM_DATA = {
  title: "",
  post: "",
  date: "",
  tag: "",
};

const INITIAL_VALID_STATE = {
  title: true,
  post: true,
  date: true,
  tag: true,
};

function JournalForm({ onSubmit }: JournalFormProps) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formValidState, setFormValidState] = useState(INITIAL_VALID_STATE);

  useEffect(() => {
    if (
      !formValidState.title ||
      !formValidState.post ||
      !formValidState.date ||
      !formValidState.tag
    ) {
      const timerId = setTimeout(() => {
        setFormValidState(INITIAL_VALID_STATE);
      }, 2000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [formValidState]);

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();

    const validation = {
      title: formData.title.trim().length > 0,
      post: formData.post.trim().length > 0,
      date: formData.date.length > 0,
      tag: formData.tag.trim().length > 0,
    };

    setFormValidState(validation);

    const isValidForm = Object.values(validation).every((isValid) => isValid);

    if (!isValidForm) {
      return;
    }

    onSubmit(formData);
    setFormData(INITIAL_FORM_DATA);
    setFormValidState(INITIAL_VALID_STATE);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className={styles.journalForm} onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Заголовок"
          value={formData.title}
          onChange={handleChange}
          className={`${styles["inputTitle"]} ${formValidState.title ? "" : styles["invalid"]}`}
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
          value={formData.date}
          onChange={handleChange}
          className={`${styles["input"]} ${formValidState.date ? "" : styles["invalid"]}`}
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
          value={formData.tag}
          onChange={handleChange}
          className={`${styles["input"]} ${formValidState.tag ? "" : styles["invalid"]}`}
        />
      </div>
      <textarea
        name="post"
        cols={30}
        rows={10}
        placeholder="Текст записи"
        value={formData.post}
        onChange={handleChange}
        className={`${styles["input"]} ${formValidState.post ? "" : styles["invalid"]}`}
      />
      <Button text="Сохранить" type="submit" />
    </form>
  );
}

export default JournalForm;
