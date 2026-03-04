import "./App.css";

import { useState, useCallback } from "react";

import Header from "./components/Header/Header";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import JournalAddButton from "./components/JornualAddButton/JornualAddButton";
import JornualList from "./components/JornualList/JornualList";
import JournalForm from "./components/JournalForm/JournalForm";

import type { JournalItem, JournalFormData } from "./types";

const INITIAL_DATA: JournalItem[] = [
  {
    id: 1,
    title: "Подготовка к обновлению курсов",
    text: "Горные походы открывают удивительные природные ландшафт",
    date: new Date("2023-07-18T17:23:14+03:00"),
    tag: "Работа",
  },
  {
    id: 2,
    title: "Поход в годы",
    text: "Думал, что очень много времени",
    date: new Date("2023-07-18T17:23:14+03:00"),
    tag: "Горы",
  },
];

function App() {
  const [items, setItems] = useState<JournalItem[]>(INITIAL_DATA);

  const addItem = useCallback((item: JournalFormData) => {
    setItems((prevItems) => {
      const maxId =
        prevItems.length > 0 ? Math.max(...prevItems.map((i) => i.id)) : 0;

      return [
        ...prevItems,
        {
          id: maxId + 1,
          tag: item.tag,
          title: item.title,
          text: item.text,
          date: new Date(item.date),
        },
      ];
    });
  }, []);

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
