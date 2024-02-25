import Heading from "../components/shared/Heading";
import Row from "../components/shared/Row";
import AddCabin from "../tasks/cabins/AddCabin";
import CabinTable from "../tasks/cabins/CabinTable";
import CabinTableOperations from "../tasks/cabins/CabinTableOperations";

export default function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as={"h1"}>All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}
