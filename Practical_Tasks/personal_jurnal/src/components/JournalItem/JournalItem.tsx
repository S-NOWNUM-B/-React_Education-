import "./JournalItem.css";
import { useMemo } from "react";
import { formatDate } from "../../utils/date";

interface JournalItemProps {
  title: string;
  text: string;
  date: Date;
}

function JournalItem({ title, text, date }: JournalItemProps) {
  const formattedDate = useMemo(() => formatDate(date), [date]);

  return (
    <article>
      <h2 className="journal-item__header">{title}</h2>
      <div className="journal-item__body">
        <time className="journal-item__date" dateTime={date.toISOString()}>
          {formattedDate}
        </time>
        <p className="journal-item__text">{text}</p>
      </div>
    </article>
  );
}

export default JournalItem;
