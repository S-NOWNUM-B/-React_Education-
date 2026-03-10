import "./JournalList.css";
import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";
import type { JournalItem as JournalItemType } from "../../types";

interface JournalListProps {
  items: JournalItemType[];
  setItem: (item: JournalItemType) => void;
  currentUserId: number;
}

function JournalList({ items, setItem, currentUserId }: JournalListProps) {
  const sortItems = (a: JournalItemType, b: JournalItemType) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  const filteredItems = items
    .filter((el) => el.userId === currentUserId)
    .sort(sortItems);

  if (filteredItems.length === 0) {
    return <p>Записей пока нет, добавьте первую</p>;
  }

  return (
    <>
      {filteredItems.map((el) => (
        <CardButton key={el.id} onClick={() => setItem(el)}>
          <JournalItem title={el.title} post={el.post} date={el.date} />
        </CardButton>
      ))}
    </>
  );
}

export default JournalList;
