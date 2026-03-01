import "./App.css";

import Header from "./components/Header/Header";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import CardButton from "./components/CardButton/CardButton";
import JournalAddButton from "./components/JornualAddButton/JornualAddButton";
import JournalItem from "./components/JournalItem/JournalItem";
import JornualList from "./components/JornualList/JornualList";
import JournalForm from "./components/JournalForm/JournalForm";

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
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JornualList>
          {data.map(el => (
            <CardButton key={el.title}>
              <JournalItem
                title={el.title}
                text={el.text}
                date={el.date}
            />
          </CardButton>
          ))}
        </JornualList>
      </LeftPanel>
      <Body>
        <JournalForm />
      </Body>
    </div>
  );
}

export default App;
