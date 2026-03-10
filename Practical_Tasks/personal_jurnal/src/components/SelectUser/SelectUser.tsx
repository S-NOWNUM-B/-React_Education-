import type { ChangeEvent } from "react";
import type { OnUserChange } from "../../types";

interface SelectUserProps {
  changedUser: OnUserChange;
  currentUserId: number;
}

function SelectUser({ changedUser, currentUserId }: SelectUserProps) {
  const changeUser = (e: ChangeEvent<HTMLSelectElement>) => {
    changedUser(Number(e.target.value));
  };

  return (
    <>
      <select name="user" id="user" value={currentUserId} onChange={changeUser}>
        <option value="1">Стас</option>
        <option value="2">Петя</option>
        <option value="3">Вася</option>
      </select>
    </>
  );
}

export default SelectUser;
