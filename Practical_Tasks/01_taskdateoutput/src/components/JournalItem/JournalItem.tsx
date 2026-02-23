import './JournalItems.css';

function JournalItem({ title, text, date }) {
	return (
		<div className="journal-item">
			<h2>{title}</h2>
			<p>{text}</p>
			<p className="date">{date}</p>
		</div>
	)
}

export default JournalItem;