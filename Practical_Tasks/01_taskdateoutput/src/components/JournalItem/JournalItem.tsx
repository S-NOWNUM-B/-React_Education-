interface JournalItemProps {
  title: string;
  text: string;
  date: Date;
}

function JournalItem({ title, text, date }: JournalItemProps) {
  return (
    <div className="rounded-[3px] bg-[#3a3a3a] text-white p-5">
      <h2 className="text-lg font-semibold leading-7">{title}</h2>
      <div className="flex gap-2.5">
        <div className="text-white/40 text-base font-normal leading-normal">
          {date.toString()}
        </div>
        <div className="text-white/60 text-base font-normal leading-normal overflow-hidden">
          {text}
        </div>
      </div>
    </div>
  );
}

export default JournalItem;
