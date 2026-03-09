import styles from "./SelectUser.module.css";

function SelectUser({ changedUser }) {
  const changeUser = (e: { target: { value: unknown } }) => {
    changedUser(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <select name="user" id="user" onChange={changeUser}>
        <option value="ser1">Стас</option>
        <option value="ser2">Петя</option>
        <option value="ser3">Вася</option>
      </select>
    </>
  );
}

export default SelectUser;
