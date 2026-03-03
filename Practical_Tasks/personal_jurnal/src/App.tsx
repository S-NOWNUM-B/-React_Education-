import "./App.css";

import { useState } from "react";

import Header from "./components/Header/Header";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import JournalAddButton from "./components/JornualAddButton/JornualAddButton";
import JornualList from "./components/JornualList/JornualList";
import JournalForm from "./components/JournalForm/JournalForm";

export interface JournalItem {
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

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JornualList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
