import { useState } from "react";
import Button from "../components/shared/Button";
import Heading from "../components/shared/Heading";
import Row from "../components/shared/Row";
import CabinTable from "../tasks/cabins/CabinTable";
import CreateCabinForm from "../tasks/cabins/CreateCabinForm";

export default function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as={"h1"}>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm((prevState) => !prevState)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}
