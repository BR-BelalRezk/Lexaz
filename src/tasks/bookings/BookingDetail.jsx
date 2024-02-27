import styled from "styled-components";

import Row from "../../components/shared/Row";
import Spinner from "../../components/shared/Spinner";
import Heading from "../../components/shared/Heading";
import Tag from "../../components/shared/Tag";
import ButtonGroup from "../../components/shared/ButtonGroup";
import Button from "../../components/shared/Button";
import ButtonText from "../../components/shared/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import BookingDataBox from "./BookingDataBox";
import { useSingleBooking } from "../../hooks/useSingleBooking";
import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckOut } from "../../hooks/useCheckOut";
import Modal from "../../components/shared/Modal";
import ConfirmDelete from "../../components/shared/ConfirmDelete";
import { useDeleteBooking } from "../../hooks/useDeleteBooking";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { booking, isLoading } = useSingleBooking();
  const { isDeleting, deleteBooking } = useDeleteBooking();
  const { checkOut, isCheckingOut } = useCheckOut();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const { status, id: bookingId } = booking;
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking {bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>
          <HiArrowLeft /> Back
        </ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        {status === "checked-in" && (
          <Button onClick={() => checkOut(bookingId)} disabled={isCheckingOut}>
            Check out
          </Button>
        )}
        <Modal>
          <Modal.Open opens={"delete"}>
            <Button variation="danger">Delete booking</Button>
          </Modal.Open>
          <Modal.Window name={"delete"}>
            <ConfirmDelete
              resourceName={"booking"}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                })
              }
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
