import "./App.css";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalList from "./components/JournalList/JournalList";
import Body from "./layouts/Body/Body";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import type { JournalFormData, JournalItem } from "./types";
import { useLocalStorage } from "./hooks/use-localstorage.hook";

type StoredJournalItem = Omit<JournalItem, "date"> & { date: string };

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

  const addItem = (item: JournalFormData) => {
    const currentItems = items || [];
    const newItem: StoredJournalItem = {
      post: item.post,
      title: item.title,
      date: new Date(item.date).toISOString(),
      tag: item.tag,
      id:
        currentItems.length > 0
          ? Math.max(...currentItems.map((i) => i.id)) + 1
          : 1,
    };
    setItems([...currentItems, newItem]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={mapItems(items)} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
