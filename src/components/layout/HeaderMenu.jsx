import styled from "styled-components";
import Logout from "../../tasks/auth/Logout";
import ButtonIcon from "../shared/ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./ThemeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      {Array.from({ length: 3 }, (_, i) => i).map((index) => (
        <li key={index}>
          {index === 0 ? (
            <ButtonIcon onClick={() => navigate("/account")}>
              <HiOutlineUser />
            </ButtonIcon>
          ) : index === 1 ? (
            <DarkModeToggle />
          ) : (
            <Logout />
          )}
        </li>
      ))}
    </StyledHeaderMenu>
  );
}
