import styled from "styled-components";
import { useMoveBack } from "../../hooks/useMoveBack";
import Row from "../../components/shared/Row";
import Heading from "../../components/shared/Heading";
import ButtonText from "../../components/shared/ButtonText";
import BookingDataBox from "../bookings/BookingDataBox";
import Button from "../../components/shared/Button";
import ButtonGroup from "../../components/shared/ButtonGroup";
import { useSingleBooking } from "../../hooks/useSingleBooking";
import Spinner from "../../components/shared/Spinner";
import { HiArrowLeft } from "react-icons/hi2";
import { useEffect, useState } from "react";
import Checkbox from "../../components/shared/Checkbox";
import { formatCurrency } from "../../utils/utils";
import { useCheckIn } from "../../hooks/useCheckIn";
import { useSettings } from "../../hooks/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { booking, isLoading: isLoadingBooking } = useSingleBooking();
  const { isLoading: isLoadingSettings, settings } = useSettings();
  const moveBack = useMoveBack();
  const { checkIn, isCheckingIn } = useCheckIn();
  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  if (isLoadingBooking || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkIn({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extraPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkIn({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>
          <HiArrowLeft /> Back
        </ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((prevState) => !prevState);
              setConfirmPaid(false);
            }}
            id={"addBreakfast"}
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)} ?
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((prevState) => !prevState)}
          id={"confirm"}
          disabled={confirmPaid || isCheckingIn}
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
