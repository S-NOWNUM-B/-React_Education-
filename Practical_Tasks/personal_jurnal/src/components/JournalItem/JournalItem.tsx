import "./JournalItem.css";
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
      <h2 className="journal-item__header">{title}</h2>
      <div className="journal-item__body">
        <time className="journal-item__date" dateTime={date.toISOString()}>
          {formattedDate}
        </time>
        <p className="journal-item__text">{text}</p>
        {tag && <span className="journal-item__tag">{tag}</span>}
      </div>
    </article>
  );
}

export default JournalItem;
