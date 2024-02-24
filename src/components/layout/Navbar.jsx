import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navbar } from "../../constants/constants";
import { motion } from "framer-motion";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.5s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.5s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export default function Navbar() {
  return (
    <nav>
      <NavList>
        {navbar.map((item, index) => (
          <motion.li
            initial={{ x: -(25 + index), opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: index * 0.1 + 1,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            key={item.name}
          >
            <StyledNavLink to={item.path}>
              <item.icon />
              <span>{item.name}</span>
            </StyledNavLink>
          </motion.li>
        ))}
      </NavList>
    </nav>
  );
}
