import Spinner from "../../components/shared/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "../../hooks/useCabins";
import Table from "../../components/shared/Table";
import Menus from "../../components/shared/Menus";
export default function CabinTable() {
  const { isLoading, cabins } = useCabins();
  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>price</div>
          <div>discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
