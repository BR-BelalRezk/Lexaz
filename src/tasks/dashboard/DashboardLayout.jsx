import styled from "styled-components";
import { useRecentBookings } from "../../hooks/useRecentBookings";
import { useCabins } from "../../hooks/useCabins";
import Spinner from "../../components/shared/Spinner";
import { useRecentStays } from "../../hooks/useRecentStays";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { isLoading, bookings } = useRecentBookings();
  const { isLoadingStays, confirmedStays, numDays } = useRecentStays();
  const { cabins, isLoading: isLodaingCabins } = useCabins();
  if (isLoading || isLoadingStays || isLodaingCabins) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
