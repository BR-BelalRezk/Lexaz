import ButtonIcon from "../../components/shared/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../../hooks/useLogout";
import MiniSpinner from "../../components/shared/MiniSpinner";
export default function Logout() {
  const { logout, isLoggingOut } = useLogout();
  return (
    <ButtonIcon disabled={isLoggingOut} onClick={logout}>
      {isLoggingOut ? <MiniSpinner /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}
