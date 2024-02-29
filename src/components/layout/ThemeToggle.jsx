import useTheme from "../../hooks/useTheme";
import ButtonIcon from "../shared/ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <ButtonIcon onClick={toggleTheme}>
      {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}
