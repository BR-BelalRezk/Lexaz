import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../services/api/bookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../constants/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get("status");
  const sortedValue = searchParams.get("sortBy") || "startDate-desc";
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue };
  const [field, direction] = sortedValue.split("-");
  const sort = { field, direction };
  const pageValue = searchParams.get("page");
  const page = !pageValue ? 1 : Number(pageValue);
  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", filter, sort, page],
    queryFn: () => getBookings({ filter, sort, page }),
  });
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page + 1],
      queryFn: () => getBookings({ filter, sort, page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page - 1],
      queryFn: () => getBookings({ filter, sort, page: page - 1 }),
    });
  }

  return { isLoading, bookings, count };
}
