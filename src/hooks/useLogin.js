import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../services/api/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function useLogin() {
  const queryClient = useQueryClient();
  const naviagte = useNavigate();
  const { mutate: login, isPending: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      naviagte("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("provided email or password are incorrect");
    },
  });
  return { login, isLogging };
}
