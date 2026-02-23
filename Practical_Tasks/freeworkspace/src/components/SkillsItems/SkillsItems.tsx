const SkillsInfo = {
  title: "Подготовка к собеседованию",
  skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  data: new Date(),
  text: "Создайте компонент SkillsItems, который отображает список навыков. Компонент должен принимать массив навыков в виде пропса и отображать их в виде списка. Также добавьте заголовок для списка навыков и текущую дату.",
};

function SkillsItems() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 text-center bg-blue-300 p-4 rounded w-100 h-150">
        <h2 className="text-4xl font-bold bg-amber-600">{SkillsInfo.title}</h2>
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-light bg-emerald-400">
            {SkillsInfo.skills[0]}
          </div>
          <div className="text-2xl font-light bg-emerald-400">
            {SkillsInfo.skills[1]}
          </div>
          <div className="text-2xl font-light bg-emerald-400">
            {SkillsInfo.skills[2]}
          </div>
          <div className="text-2xl font-light bg-emerald-400">
            {SkillsInfo.skills[3]}
          </div>
          <div className="text-2xl font-light bg-emerald-400">
            {SkillsInfo.skills[4]}
          </div>
        </div>
        <p className="text-lg bg-cyan-400">{SkillsInfo.text}</p>
        <p className="text-lg bg-cyan-400">
          {SkillsInfo.data.toLocaleDateString()}
        </p>
      </div>
    </>
  );
}

export default SkillsItems;
