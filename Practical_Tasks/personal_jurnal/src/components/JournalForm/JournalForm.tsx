import "./JournalForm.css";
import { type FormEvent, useState } from "react";

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.text.trim() || !formData.date) {
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
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="tag"
        placeholder="Тег"
        value={formData.tag}
        onChange={handleChange}
      />
      <textarea
        name="text"
        cols={30}
        rows={10}
        placeholder="Текст записи"
        value={formData.text}
        onChange={handleChange}
        required
      />
      <Button text="Сохранить" type="submit" />
    </form>
  );
}

export default JournalForm;
