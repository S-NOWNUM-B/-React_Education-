import Button from "./components/Button/Button";
import "./components/SkillsItems/SkillsItems";
import SkiilsItems from "./components/SkillsItems/SkillsItems";

export default function App() {
  const data = [
    {
      title: "Подготовка к собеседованию",
      text: "Создайте компонент SkillsItems, который отображает список навыков. Компонент должен принимать массив навыков в виде пропса и отображать их в виде списка. Также добавьте заголовок для списка навыков и текущую дату.",
      date: new Date(),
    },
    {
      title: "Второй элемент",
      text: "Второй элемент данных для отображения в компоненте SkillsItems.",
      date: new Date(),
    },
    {
      title: "Третий элемент",
      text: "Третий элемент данных для отображения в компоненте SkillsItems.",
      date: new Date(),
    }
  ]

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center gap-4 text-center bg-gray-700">
        <h1 className="text-blue-600 dark:text-sky-400">Привет, мир!</h1>
        <p className="text-red-400 dark:text-pink-400">
          Это мой первый React-приложение.
        </p>
        <Button />
        <SkiilsItems
          title={data[0].title}
          text={data[0].text}
          date={data[0].date} 
        />
        <SkiilsItems
          title={data[1].title}
          text={data[1].text}
          date={data[1].date}
         />
      </div>
    </>
  );
}
