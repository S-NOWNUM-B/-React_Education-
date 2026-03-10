import styles from "./JournalForm.module.css";

import Button from "../Button/Button";
import { useEffect, useReducer, useRef } from "react";
import cn from "classnames";
import { INITIAL_STATE, formReducer } from "./JournalForm.state";
import type { ChangeEvent, SubmitEvent } from "react";
import type { JournalFormData } from "../../types";
import type { FormState } from "./JournalForm.state";
import Input from "../Input/Input";

interface JournalFormProps {
  onSubmit: (data: JournalFormData) => void;
}

function JournalForm({ onSubmit }: JournalFormProps) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const postRef = useRef<HTMLTextAreaElement>(null);

  const focusError = (isValid: FormState["isValid"]) => {
    switch (true) {
      case !isValid.title:
        titleRef.current?.focus();
        break;
      case !isValid.date:
        dateRef.current?.focus();
        break;
      case !isValid.post:
        postRef.current?.focus();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout> | undefined;
    if (!isValid.date || !isValid.post || !isValid.title) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({ type: "RESET_VALIDITY" });
      }, 2000);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: "CLEAR" });
    }
  }, [isFormReadyToSubmit, values, onSubmit]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const addJournalItem = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  return (
    <form className={styles["journal-form"]} onSubmit={addJournalItem}>
      <div>
        <Input
          type="text"
          name="title"
          ref={titleRef}
          isValid={isValid.title}
          onChange={onChange}
          value={values.title}
          className={cn(styles["input-title"], {
            [styles["invalid"]]: !isValid.title,
          })}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="date" className={styles["form-label"]}>
          <img src="/calendar.svg" alt="Иконка календаря" />
          <span>Дата</span>
        </label>
        <Input
          type="date"
          name="date"
          ref={dateRef}
          isValid={isValid.date}
          onChange={onChange}
          value={values.date}
          id="date"
          className={cn(styles["input"], {
            [styles["invalid"]]: !isValid.date,
          })}
        />
      </div>
      <div className={styles["form-row"]}>
        <label htmlFor="tag" className={styles["form-label"]}>
          <img src="/folder.svg" alt="Иконка папки" />
          <span>Метки</span>
        </label>
        <Input
          id="tag"
          type="text"
          name="tag"
          onChange={onChange}
          value={values.tag}
          className={styles["input"]}
        />
      </div>
      <textarea
        name="post"
        ref={postRef}
        onChange={onChange}
        value={values.post}
        cols={30}
        rows={10}
        className={cn(styles["input"], {
          [styles["invalid"]]: !isValid.post,
        })}
      ></textarea>
      <Button>Сохранить</Button>
    </form>
  );
}

export default JournalForm;
