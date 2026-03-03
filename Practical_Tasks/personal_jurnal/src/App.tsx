import "./App.css";

import { useState } from "react";

import Header from "./components/Header/Header";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import CardButton from "./components/CardButton/CardButton";
import JournalAddButton from "./components/JornualAddButton/JornualAddButton";
import JournalItem from "./components/JournalItem/JournalItem";
import JornualList from "./components/JornualList/JornualList";
import JournalForm from "./components/JournalForm/JournalForm";

interface JournalItem {
  id: number;
  title: string;
  text: string;
  date: Date | string;
}

const INITIAL_DATA = [
  {
    id: 1,
    title: "Подготовка к обновлению курсов",
    text: "Горные походы открывают удивительные природные ландшафт",
    date: new Date("2023-07-18T17:23:14+03:00"),
  },
  {
    id: 2,
    title: "Поход в годы",
    text: "Думал, что очень много времени",
    date: new Date("2023-07-18T17:23:14+03:00"),
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item: {
    title: string;
    text: string;
    date: string;
    tag?: string;
  }) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: Math.max(...oldItems.map((i) => i.id), 0) + 1,
      },
    ]);
  };

  const sortItems = (a: JournalItem, b: JournalItem) => {
    const dateA =
      a.date instanceof Date ? a.date.getTime() : new Date(a.date).getTime();
    const dateB =
      b.date instanceof Date ? b.date.getTime() : new Date(b.date).getTime();
    return dateB - dateA;
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JornualList>
          {items.sort(sortItems).map((el) => (
            <CardButton key={el.id}>
              <JournalItem title={el.title} text={el.text} date={el.date} />
            </CardButton>
          ))}
        </JornualList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
