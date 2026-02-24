import Button from "./components/Button/Button";
import JournalItem from "./components/JournalItem/JournalItem";
import "./App.css";
import CardButton from "./components/CardButton/CardButton";

function App() {
  const data = [
    {
      title: "Подготовка к обновлению курсов",
      text: "Горные походы открывают удивительные природные ландшафт",
      date: new Date("2023-07-18T17:23:14+03:00"),
    },
    {
      title: "Поход в годы",
      text: "Думал, что очень много времени",
      date: new Date("2023-07-18T17:23:14+03:00"),
    },
  ];
  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__title">Заголовок</h1>
        <p className="app__text">Какой-то текст</p>
        <Button />
        <CardButton>+ Новое воспоминание</CardButton>
        <div className="app__journal-list">
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </div>
      </div>
    </div>
  );
}

export default App;
