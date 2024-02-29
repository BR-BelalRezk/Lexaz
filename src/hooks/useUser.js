import { useQuery } from "@tanstack/react-query";
import { getCurrentLoggedInUser } from "../services/api/auth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentLoggedInUser,
  });
  return { isLoading, user, isAuth: user?.role === "authenticated" };
}
