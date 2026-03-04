import "./JornualList.css";
import { useMemo } from "react";

import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";
import type { JournalItem as JournalItemType } from "../../types";
import { parseDate } from "../../utils/date";

interface JornualListProps {
  items: JournalItemType[];
}

function JornualList({ items }: JornualListProps) {
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const dateA = parseDate(a.date).getTime();
      const dateB = parseDate(b.date).getTime();
      return dateB - dateA;
    });
  }, [items]);

  if (items.length === 0) {
    return <p>Записей пока нет, добавьте новую</p>;
  }

  return (
    <>
      {sortedItems.map((item) => (
        <CardButton key={item.id}>
          <JournalItem
            title={item.title}
            text={item.text}
            date={parseDate(item.date)}
          />
        </CardButton>
      ))}
    </>
  );
}

export default JornualList;
