import Button from "../../components/shared/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../components/shared/Modal";

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="createCabin">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="createCabin">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
