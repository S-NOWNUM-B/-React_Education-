import "./JournalItem.css";
import type { JournalItem as JournalItemType } from "../../types";

type JournalItemProps = Pick<JournalItemType, "title" | "post" | "date">;

function JournalItem({ title, post, date }: JournalItemProps) {
  const formatedDate = new Intl.DateTimeFormat("ru-RU").format(date);

  return (
    <>
      <h2 className="journal-item__header">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__date">{formatedDate}</div>
        <div className="journal-item__text">{post}</div>
      </h2>
    </>
  );
}

export default JournalItem;
