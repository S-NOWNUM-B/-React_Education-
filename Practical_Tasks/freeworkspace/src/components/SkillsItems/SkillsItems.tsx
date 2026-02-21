function SkiilsItems() {
  const title = "Подготовка к собеседованию";
  const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript"];
  const data = new Date();
  const text =
    "Создайте компонент SkillsItems, который отображает список навыков. Компонент должен принимать массив навыков в виде пропса и отображать их в виде списка. Также добавьте заголовок для списка навыков и текущую дату.";

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 text-center bg-blue-300 p-4 rounded w-100 h-150">
        <h2 className="text-4xl font-bold bg-amber-600">{title}</h2>
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-light bg-emerald-400">{skills[0]}</div>
          <div className="text-2xl font-light bg-emerald-400">{skills[1]}</div>
          <div className="text-2xl font-light bg-emerald-400">{skills[2]}</div>
          <div className="text-2xl font-light bg-emerald-400">{skills[3]}</div>
          <div className="text-2xl font-light bg-emerald-400">{skills[4]}</div>
        </div>
        <p className="text-lg bg-cyan-400">{text}</p>
        <p className="text-lg bg-cyan-400">{data.toLocaleDateString()}</p>
      </div>
    </>
  );
}

export default SkiilsItems;
