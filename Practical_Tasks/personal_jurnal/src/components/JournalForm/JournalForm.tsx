import "./JournalFrom.css";

import { useState } from "react";

function JournalForm() {
  const [inputData, setInputData] = useState("");

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  return (
    <>
      <input type="text" value={inputData} onChange={inputChange} />
    </>
  );
}

export default JournalForm;
