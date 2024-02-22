/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import Form from "../../components/shared/Form";
import FileInput from "../../components/shared/FileInput";
import Textarea from "../../components/shared/Textarea";
import { createEditCabin } from "../../services/api/cabins";
import FormRow from "../../components/shared/FormRow";

export default function CreateCabinForm({ cabinToEdit = {} }) {
  const queryClient = useQueryClient();
  const { id: editID, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editID);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: editValues || {},
  });
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  const isWorking = isCreating || isEditing;
  const onSubmit = (data) => {
    const image =
      typeof data.image === "string" ? data.image : data?.image?.[0];
    if (isEditSession) {
      editCabin({ newCabinData: { ...data, image }, id: editID });
    } else {
      createCabin({ ...data, image: image });
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        id="name"
        label="Cabin name"
        error={
          typeof errors?.name?.message === "string"
            ? errors?.name?.message
            : undefined
        }
      >
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "Please provide a name for the cabin",
          })}
        />
      </FormRow>

      <FormRow
        id="maxCapacity"
        label="maxCapacity"
        error={
          typeof errors?.maxCapacity?.message === "string"
            ? errors?.maxCapacity?.message
            : undefined
        }
      >
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "Max capacity is required",
            min: {
              value: 1,
              message: "Capacity should be at least one",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Regular price"
        id="regularPrice"
        error={
          typeof errors?.regularPrice?.message === "string"
            ? errors?.regularPrice?.message
            : undefined
        }
      >
        <Input
          type="number"
          disabled={isWorking}
          id="regularPrice"
          {...register("regularPrice", {
            required:
              "Regular price is required. Must be greater than discount",
            min: {
              value: 1,
              message: "Capacity should be at least one",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Discount"
        id="discount"
        error={
          typeof errors?.discount?.message === "string"
            ? errors?.discount?.message
            : undefined
        }
      >
        <Input
          type="number"
          disabled={isWorking}
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than the regular price",
          })}
        />
      </FormRow>

      <FormRow
        id="description"
        label="Description for website"
        error={
          typeof errors?.description?.message === "string"
            ? errors?.description?.message
            : undefined
        }
      >
        <Textarea
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", {
            required: "Describe the cabin please",
          })}
        />
      </FormRow>

      <FormRow id="image" label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession
              ? false
              : "Please provide an image for the cabin",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}

        <Button variation="secondary" type="reset" disabled={isWorking}>
          Cancel
        </Button>
        <Button type="submit" disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "Add Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}
