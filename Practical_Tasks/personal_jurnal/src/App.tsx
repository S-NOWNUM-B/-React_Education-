import "./App.css";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalList from "./components/JournalList/JournalList";
import Body from "./layouts/Body/Body";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import type {
  JournalFormData,
  JournalItem,
  OnUserChange,
  StoredJournalItem,
} from "./types";
import { useLocalStorage } from "./hooks/use-localstorage.hook";
import { useContext, useState } from "react";
import { UserContext } from "./context/user.context";

function mapItems(items: StoredJournalItem[] | undefined): JournalItem[] {
  if (!items) {
    return [];
  }
  return items.map((i) => ({
    ...i,
    date: new Date(i.date),
  }));
}

function App() {
  const [items, setItems] = useLocalStorage<StoredJournalItem[]>("data");
  const [selectedItem, setSelectedItem] = useState<JournalItem | undefined>();
  const { userId, setUserId } = useContext(UserContext);

  const handleUserChange: OnUserChange = (newUserId) => {
    setUserId(newUserId);
    setSelectedItem(undefined);
  };

  const addItem = (item: JournalFormData) => {
    const currentItems = mapItems(items);

    if (selectedItem && currentItems.some((i) => i.id === selectedItem.id)) {
      // Редактирование существующей записи
      const updated = currentItems.map((i) => {
        if (i.id === selectedItem.id) {
          return {
            ...i,
            title: item.title,
            post: item.post,
            date: new Date(item.date),
            tag: item.tag,
          };
        }
        return i;
      });
      setItems(
        updated.map((i) => ({
          ...i,
          date: i.date.toISOString(),
        }))
      );
    } else {
      // Добавление новой записи
      const newItem: JournalItem = {
        title: item.title,
        post: item.post,
        date: new Date(item.date),
        tag: item.tag,
        userId: item.userId,
        id:
          currentItems.length > 0
            ? Math.max(...currentItems.map((i) => i.id)) + 1
            : 1,
      };
      const updated = [...currentItems, newItem];
      setItems(
        updated.map((i) => ({
          ...i,
          date: i.date.toISOString(),
        }))
      );
    }

    setSelectedItem(undefined);
  };

  const deleteItem = (id: number) => {
    const currentItems = mapItems(items);
    const updated = currentItems.filter((i) => i.id !== id);
    setItems(
      updated.map((i) => ({
        ...i,
        date: i.date.toISOString(),
      }))
    );
    setSelectedItem(undefined);
  };

  const clearForm = () => {
    setSelectedItem(undefined);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header changedUser={handleUserChange} currentUserId={userId} />
        <JournalAddButton clearForm={clearForm} />
        <JournalList
          items={mapItems(items)}
          setItem={setSelectedItem}
          currentUserId={userId}
        />
      </LeftPanel>
      <Body>
        <JournalForm
          onSubmit={addItem}
          onDelete={deleteItem}
          data={selectedItem}
        />
      </Body>
    </div>
  );
}

export default App;
