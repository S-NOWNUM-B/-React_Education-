import "./JournalItem.css";

interface JournalItemProps {
  title: string;
  text: string;
  date: Date;
}

function JournalItem({ title, text, date }: JournalItemProps) {
  const formatedDate = new Intl.DateTimeFormat("ru-RU").format(date);

  return (
    <div>
      <h2 className="journal-item__header">{title}</h2>
      <div className="journal-item__body">
        <div className="journal-item__date">{formatedDate}</div>
        <div className="journal-item__text">{text}</div>
      </div>
    </div>
  );
}

export default JournalItem;
