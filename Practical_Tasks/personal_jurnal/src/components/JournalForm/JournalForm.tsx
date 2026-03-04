import "./JournalForm.css";
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
      !formData.date
    ) {
      setFormValidState((state) => ({
        ...state,
        title: false,
        text: false,
        date: false,
      }));
      isValidForm = false;
    } else {
      setFormValidState((state) => ({
        ...state,
        title: true,
        text: true,
        date: true,
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
    <form className="journal-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Заголовок"
        value={formData.title}
        onChange={handleChange}
        required
        className={formValidState.title ? "" : "invalid"}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        className={formValidState.date ? "" : "invalid"}
      />
      <input
        type="text"
        name="tag"
        placeholder="Тег"
        value={formData.tag}
        onChange={handleChange}
        className={formValidState.tag ? "" : "invalid"}
      />
      <textarea
        name="text"
        cols={30}
        rows={10}
        placeholder="Текст записи"
        value={formData.text}
        onChange={handleChange}
        required
        className={formValidState.text ? "" : "invalid"}
      />
      <Button text="Сохранить" type="submit" />
    </form>
  );
}

export default JournalForm;
