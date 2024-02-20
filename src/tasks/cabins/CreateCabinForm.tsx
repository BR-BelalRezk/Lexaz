import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import Form from "../../components/shared/Form";
import FileInput from "../../components/shared/FileInput";
import Textarea from "../../components/shared/Textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/api/cabins";
import toast from "react-hot-toast";
import FormRow from "../../components/shared/FormRow";
import { NEWCABIN } from "../../types/types";

export default function CreateCabinForm() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<NEWCABIN>();
  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  const onSubmit: SubmitHandler<NEWCABIN> = (data: NEWCABIN) => {
    mutate({ ...data, image: data.image[0] });
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
          {...register("image", {
            required: "Please provide an image for the cabin",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}

        <Button variation="secondary" type="reset" disabled={isCreating}>
          Cancel
        </Button>
        <Button type="submit" disabled={isCreating}>
          Add cabin
        </Button>
      </FormRow>
    </Form>
  );
}
