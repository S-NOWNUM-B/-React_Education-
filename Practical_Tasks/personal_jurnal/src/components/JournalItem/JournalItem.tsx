import styles from "./JournalItem.module.css";
import { useMemo } from "react";
import { formatDate } from "../../utils/date";

interface JournalItemProps {
  title: string;
  text: string;
  date: Date;
  tag?: string;
}

function JournalItem({ title, text, date, tag }: JournalItemProps) {
  const formattedDate = useMemo(() => formatDate(date), [date]);

  return (
    <article>
      <h2 className={styles.header}>{title}</h2>
      <div className={styles.body}>
        <time className={styles.date} dateTime={date.toISOString()}>
          {formattedDate}
        </time>
        <p className={styles.text}>{text}</p>
        {tag && <span className={styles.tag}>{tag}</span>}
      </div>
    </article>
  );
}

export default JournalItem;
