import Button from "./components/Button/Button";
import JournalItem from "./components/JournalItem/JournalItem";

function App() {
  const data = [
    {
      title: "Заголовок 1",
      text: "Какой-то текст 1",
      date: new Date(),
    },
    {
      title: "Заголовок 2",
      text: "Какой-то текст 2",
      date: new Date(),
    },
    {
      title: "Заголовок 3",
      text: "Какой-то текст 3",
      date: new Date(),
    },
  ];
  return (
    <>
      <h1>Заголовок</h1>
      <p>Какой-то текст</p>
      <JournalItem
        title={data[0].title}
        text={data[0].text}
        date={data[0].date}
      />
      <Button />
    </>
  );
}

export default App;
