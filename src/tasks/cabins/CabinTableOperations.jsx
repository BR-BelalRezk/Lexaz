import TableOperations from "../../components/shared/TableOperations";
import Filter from "../../components/shared/Filter";
import Sort from "../../components/shared/Sort";
const cabinTableOperationsFilterOptions = [
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
const cabinTableOperationsSortOptions = [
  {
    value: "name-asc",
    label: "Sort by name (A-Z)",
  },
  {
    value: "name-dsc",
    label: "Sort by name (Z-A)",
  },
  {
    value: "regularPrice-asc",
    label: "Sort by price (low first)",
  },
  {
    value: "regularPrice-dsc",
    label: "Sort by price (high first)",
  },
  {
    value: "maxCapacity-asc",
    label: "Sort by capacity (low first)",
  },
  {
    value: "maxCapacity-dsc",
    label: "Sort by capacity (high first)",
  },
];
export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={cabinTableOperationsFilterOptions}
      />
      <Sort options={cabinTableOperationsSortOptions} />
    </TableOperations>
  );
}
