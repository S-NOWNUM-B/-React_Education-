import "./JornualList.css";

import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";

interface JournalItemData {
  id: number;
  title: string;
  text: string;
  date: Date | string;
}

interface JornualListProps {
  items: JournalItemData[];
}

function JornualList({ items }: JornualListProps) {
  if (items.length === 0) {
    return <p>Записей пока нет, добавьте новую</p>;
  }

  const sortItems = (a: JournalItemData, b: JournalItemData) => {
    const dateA =
      a.date instanceof Date ? a.date.getTime() : new Date(a.date).getTime();
    const dateB =
      b.date instanceof Date ? b.date.getTime() : new Date(b.date).getTime();
    return dateB - dateA;
  };

  return (
    <>
      {items.sort(sortItems).map((el) => (
        <CardButton key={el.id}>
          <JournalItem
            title={el.title}
            text={el.text}
            date={el.date instanceof Date ? el.date : new Date(el.date)}
          />
        </CardButton>
      ))}
    </>
  );
}

export default JornualList;
