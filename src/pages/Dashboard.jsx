import Row from "../components/shared/Row";
import Heading from "../components/shared/Heading";
import DashboardLayout from "../tasks/dashboard/DashboardLayout";
import DashboardFilter from "../tasks/dashboard/DashboardFilter";
export default function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as={"h1"}>Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}
