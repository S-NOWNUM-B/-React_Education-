import styles from "./App.module.css";

import { useState, useCallback } from "react";

import Header from "./components/Header/Header";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import JournalAddButton from "./components/JornualAddButton/JornualAddButton";
import JornualList from "./components/JornualList/JornualList";
import JournalForm from "./components/JournalForm/JournalForm";

import type { JournalItem, JournalFormData } from "./types";

function App() {
  const [items, setItems] = useState<JournalItem[]>([]);

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
          text: item.post,
          date: new Date(item.date),
        },
      ];
    });
  }, []);

  return (
    <div className={styles.app}>
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
