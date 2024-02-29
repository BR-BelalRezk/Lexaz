import styled from "styled-components";
import LoginForm from "../tasks/auth/LoginForm";
import Logo from "../components/layout/Logo";
import Heading from "../components/shared/Heading";

const LoginLayout = styled.main`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 50rem;
  align-content: center;
  justify-content: center;
  gap: 3.5rem;
  background-color: var(--color-gray-50);
`;

export default function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as={"h4"}>Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}
