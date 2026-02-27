import "./Button.css";

function Button({ text, onClick }: { text: string; onClick: () => void }) {
  return <button className="button accent" onClick={onClick}>{text}</button>;
}

export default Button;
