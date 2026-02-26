import "./Button.css";

function Button({ text }: { text: string }) {
  return <button className="button accent">{text}</button>;
}

export default Button;
