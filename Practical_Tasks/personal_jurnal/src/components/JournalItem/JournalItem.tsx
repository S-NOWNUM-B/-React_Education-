interface JournalItemProps {
  title: string;
  text: string;
  date: Date;
}

function JournalItem({ title, text, date }: JournalItemProps) {
  const formatedDate = new Intl.DateTimeFormat("ru-RU").format(date);

  return (
    <>
      <h2 className="text-lg font-semibold leading-7">{title}</h2>
      <h2 className="flex gap-2.5">
        <div className="text-white/40 text-base font-normal leading-normal">
          {formatedDate}
        </div>
        <div className="text-white/60 text-base font-normal leading-normal overflow-hidden">
          {text}
        </div>
      </h2>
    </>
  );
}

export default JournalItem;
