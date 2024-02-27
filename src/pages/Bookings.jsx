import Heading from "../components/shared/Heading";
import Row from "../components/shared/Row";
import BookingTable from "../tasks/bookings/BookingTable";
import BookingTableOperations from "../tasks/bookings/BookingTableOperations";

export default function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as={"h1"}>All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
}
