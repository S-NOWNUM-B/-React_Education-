import SelectUser from "../SelectUser/SelectUser";
import Logo from "../Logo/Logo";
import type { OnUserChange } from "../../types";

interface HeaderProps {
  changedUser: OnUserChange;
}

function Header({ changedUser }: HeaderProps) {
  return (
    <>
      <Logo image="/logo.svg" />
      <SelectUser changedUser={changedUser} />
    </>
  );
}

export default Header;
