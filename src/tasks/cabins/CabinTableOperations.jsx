import TableOperations from "../../components/shared/TableOperations";
import Filter from "../../components/shared/Filter";
const CabinTableOperationsOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "no-discount",
    label: "No discount",
  },
  {
    value: "with-discount",
    label: "With discount",
  },
];
export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField={"discount"} options={CabinTableOperationsOptions} />
    </TableOperations>
  );
}
