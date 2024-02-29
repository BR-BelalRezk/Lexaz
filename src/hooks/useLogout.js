import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutAPI } from "../services/api/auth";
import { useNavigate } from "react-router-dom";
export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
  });
  return { logout, isLoggingOut };
}
