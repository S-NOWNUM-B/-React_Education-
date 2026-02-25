import "./App.css";

import LeftPanel from "./layouts/LeftPanel/LeftPanel";

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

      </LeftPanel>
      <Body>

      </Body>
    </div>
  );
}

export default App;
