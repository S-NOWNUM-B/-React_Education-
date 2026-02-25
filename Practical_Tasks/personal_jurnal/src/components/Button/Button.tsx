import "./Button.css";

function Button() {
  const clickHello = () => {
    console.log("Hello!");
  };

  return (
    <button onClick={clickHello} className="button accent">
      Сохранить
    </button>
  );
}

export default Button;
