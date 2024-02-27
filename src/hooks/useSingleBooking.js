import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../services/api/bookings";
import { useParams } from "react-router-dom";

export function useSingleBooking() {
  const { bookingId } = useParams();
  const { isLoading, data: booking } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
  return { isLoading, booking };
}
