import Button from "./components/Button/Button";
import "./components/SkillsItems/SkillsItems";
import SkiilsItems from "./components/SkillsItems/SkillsItems";

export default function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center gap-4 text-center bg-gray-700">
        <h1 className="text-blue-600 dark:text-sky-400">Привет, мир!</h1>
        <p className="text-red-400 dark:text-pink-400">
          Это мой первый React-приложение.
        </p>
        <Button />
        <SkiilsItems />
      </div>
    </>
  );
}
