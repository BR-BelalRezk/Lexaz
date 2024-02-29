import Heading from "../components/shared/Heading";
import Row from "../components/shared/Row";
import UpdatePasswordForm from "../tasks/auth/UpdatePasswordForm";
import UpdateUserDataForm from "../tasks/auth/UpdateUserDataForm";
export default function Account() {
  return (
    <>
      <Heading as={"h1"}>Update your account</Heading>
      <Row>
        <Heading as={"h3"}>Update user data</Heading>
        <UpdateUserDataForm />
      </Row>
      <Row>
        <Heading as={"h3"}>Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}
