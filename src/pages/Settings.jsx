import Heading from "../components/shared/Heading";
import Row from "../components/shared/Row";
import UpdateSettingsForm from "../tasks/settings/UpdateSettingsForm";

export default function Settings() {
  return (
    <Row>
      <Heading as={"h1"}>Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}
