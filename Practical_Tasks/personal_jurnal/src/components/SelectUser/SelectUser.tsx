import type { ChangeEvent } from "react";
import type { OnUserChange, UserId } from "../../types";

interface SelectUserProps {
  changedUser: OnUserChange;
}

function SelectUser({ changedUser }: SelectUserProps) {
  const changeUser = (e: ChangeEvent<HTMLSelectElement>) => {
    changedUser(e.target.value as UserId);
  };

  return (
    <>
      <select name="user" id="user" onChange={changeUser}>
        <option value="user1">Стас</option>
        <option value="user2">Петя</option>
        <option value="user3">Вася</option>
      </select>
    </>
  );
}

export default SelectUser;
