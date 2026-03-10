import SelectUser from "../SelectUser/SelectUser";
import Logo from "../Logo/Logo";
import type { OnUserChange } from "../../types";

interface HeaderProps {
  changedUser: OnUserChange;
  currentUserId: number;
}

function Header({ changedUser, currentUserId }: HeaderProps) {
  return (
    <>
      <Logo image="/logo.svg" />
      <SelectUser changedUser={changedUser} currentUserId={currentUserId} />
    </>
  );
}

export default Header;
