import "./App.css";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalList from "./components/JournalList/JournalList";
import Body from "./layouts/Body/Body";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import type { JournalFormData, JournalItem } from "./types";
import { useLocalStorage } from "./hooks/use-localstorage.hook";

function App() {
  const [items, setItems] = useLocalStorage<JournalItem[]>([]);

  const addItem = item => {
    setItems([...items.map(i => ({
      ...i,
      date: new Date(i.date)
    })), {
      post: item.post,
      title: item.title,
      date: new Date(item.date),
      tag: item.tag,
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
    }]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
