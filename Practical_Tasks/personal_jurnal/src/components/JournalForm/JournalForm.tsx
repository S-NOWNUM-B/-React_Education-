import styles from "./JournalForm.module.css";

import { type ComponentProps, useState } from "react";

import Button from "../Button/Button";
import type { JournalFormData } from "../../types";

interface JournalFormProps {
  onSubmit: (item: JournalFormData) => void;
}

function JournalForm({ onSubmit }: JournalFormProps) {
  const [formData, setFormData] = useState<JournalFormData>({
    title: "",
    text: "",
    date: "",
    tag: "",
  });

  const [formValidState, setFormValidState] = useState({
    title: true,
    text: true,
    date: true,
    tag: true,
  });

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();

    let isValidForm = true;

    if (
      !formData.title?.trim().length ||
      !formData.text?.trim().length ||
      !formData.date ||
      !formData.tag?.trim().length
    ) {
      setFormValidState((state) => ({
        ...state,
        title: !formData.title?.trim().length ? false : true,
        text: !formData.text?.trim().length ? false : true,
        date: !formData.date ? false : true,
        tag: !formData.tag?.trim().length ? false : true,
      }));
      isValidForm = false;
    } else {
      setFormValidState((state) => ({
        ...state,
        title: true,
        text: true,
        date: true,
        tag: true,
      }));
    }

    if (!isValidForm) {
      return;
    }

    onSubmit(formData);

    // Очистка формы после отправки
    setFormData({
      title: "",
      text: "",
      date: "",
      tag: "",
    });

    // Сброс состояния валидации
    setFormValidState({
      title: true,
      text: true,
      date: true,
      tag: true,
    });
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
          className={`${styles["input"]} ${formValidState.title ? "" : styles["invalid"]}`}
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
        name="text"
        cols={30}
        rows={10}
        placeholder="Текст записи"
        value={formData.text}
        onChange={handleChange}
        className={`${styles["input"]} ${formValidState.text ? "" : styles["invalid"]}`}
      />
      <Button text="Сохранить" type="submit" />
    </form>
  );
}

export default JournalForm;