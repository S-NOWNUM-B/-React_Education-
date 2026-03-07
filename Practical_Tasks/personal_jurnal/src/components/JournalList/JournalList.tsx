import "./JournalList.css";
import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";
import type { JournalItem as JournalItemType } from "../../types";

interface JournalListProps {
  items: JournalItemType[];
}

function JournalList({ items }: JournalListProps) {
  if (items.length === 0) {
    return <p>Записей пока нет, добавьте первую</p>;
  }

  const sortItems = (a: JournalItemType, b: JournalItemType) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      {[...items].sort(sortItems).map((el) => (
        <CardButton key={el.id}>
          <JournalItem title={el.title} post={el.post} date={el.date} />
        </CardButton>
      ))}
    </>
  );
}

export default JournalList;
