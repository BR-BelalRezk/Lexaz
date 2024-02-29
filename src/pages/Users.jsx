import Heading from "../components/shared/Heading";
import SignupForm from "../tasks/auth/SignupForm";
export default function Users() {
  return (
    <>
      <Heading as={"h1"}>Create a new user</Heading>
      <SignupForm />
    </>
  );
}
