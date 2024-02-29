import Filter from "../../components/shared/Filter";

const dashboardFilterOption = [
  { value: "7", label: "Last 7 days" },
  { value: "30", label: "Last 30 days" },
  { value: "90", label: "Last 90 days" },
];
function DashboardFilter() {
  return <Filter filterField="last" options={dashboardFilterOption} />;
}

export default DashboardFilter;
