import Heading from "../components/shared/Heading";
import Row from "../components/shared/Row";
import AddCabin from "../tasks/cabins/AddCabin";
import CabinTable from "../tasks/cabins/CabinTable";

export default function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as={"h1"}>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}
