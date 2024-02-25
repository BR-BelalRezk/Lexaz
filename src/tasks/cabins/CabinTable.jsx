import Spinner from "../../components/shared/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "../../hooks/useCabins";
import Table from "../../components/shared/Table";
import Menus from "../../components/shared/Menus";
import { useSearchParams } from "react-router-dom";
export default function CabinTable() {
  const [searchParams] = useSearchParams();
  const { isLoading, cabins } = useCabins();
  if (isLoading) return <Spinner />;
  const filterValue = searchParams.get("discount") || "all";
  const filterdCabins =
    filterValue === "with-discount"
      ? cabins.filter((cabin) => cabin.discount > 0)
      : filterValue === "no-discount"
      ? cabins.filter((cabin) => cabin.discount === 0)
      : cabins;
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
          data={filterdCabins}
          render={(cabin, index) => (
            <CabinRow cabin={cabin} key={cabin.id} delay={index} />
          )}
        />
      </Table>
    </Menus>
  );
}
