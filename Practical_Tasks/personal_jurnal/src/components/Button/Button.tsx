import { useState } from "react";

import "./Button.css";

function Button() {
  const [text, setText] = useState("Сохранить");

  const clickHello = () => {
    setText("Сохранено!");
    console.log("Запись сохранена");
  };

  return (
    <button onClick={clickHello} className="button accent">
      {text}
    </button>
  );
}

export default Button;
