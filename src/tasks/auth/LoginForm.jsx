import { useState } from "react";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import FormRowVertical from "../../components/shared/FormRowVertical";
import Form from "../../components/shared/Form";
import { useLogin } from "../../hooks/useLogin";
import MiniSpinner from "../../components/shared/MiniSpinner";

function LoginForm() {
  const [email, setEmail] = useState("motit74754@mcuma.com");
  const [password, setPassword] = useState("12345678");
  const { login, isLogging } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLogging}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLogging}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLogging}>
          {isLogging ? <MiniSpinner /> : "Login"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;