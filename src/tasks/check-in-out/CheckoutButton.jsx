/* eslint-disable react/prop-types */

import Button from "../../components/shared/Button";
import { useCheckOut } from "../../hooks/useCheckOut";

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkOut } = useCheckOut();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkOut(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
