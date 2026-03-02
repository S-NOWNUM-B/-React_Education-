import Button from "./components/Button/Button";
import JournalItem from "./components/JournalItem/JournalItem";

import "./App.css";

function App() {
  const data = [
    {
      title: "Подготовка к обновлению курсов",
      text: "Горячие походы открывают удивительные природные ландшафт",
      date: new Date("2023-07-18T17:23:14+03:00"),
    },
    {
      title: "Подготовка к обновлению курсов",
      text: "Горячие походы открывают удивительные природные ландшафт",
      date: new Date("2023-07-18T17:23:14+03:00"),
    },
  ];
  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__title">Заголовок</h1>
        <p className="app__text">Какой-то текст</p>
        <Button />
        <div className="app__journal-list">
          {data.map((item, index) => (
            <JournalItem
              key={index}
              title={item.title}
              text={item.text}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
