import "./App.css";

import Header from "./components/Header/Header";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import CardButton from "./components/CardButton/CardButton";
import JournalAddButton from "./components/JornualAddButton/JornualAddButton";
import JournalItem from "./components/JournalItem/JournalItem";
import JornualList from "./components/JornualList/JornualList";

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
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              text={data[1].text}
              title={data[1].title}
              date={data[1].date}
            />
          </CardButton>
        </JornualList>
      </LeftPanel>
      <Body>Body</Body>
    </div>
  );
}

export default App;
