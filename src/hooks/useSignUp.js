import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../services/api/auth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
  });
  return { signup, isSigningUp };
}
