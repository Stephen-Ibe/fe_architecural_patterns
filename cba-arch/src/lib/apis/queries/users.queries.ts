import { useQuery } from "@tanstack/react-query";
import { getAllUsersApi } from "../services";
import { UserResponseData } from "@/lib/types";

export const useGetAllUsers = () =>
  useQuery<UserResponseData[]>({
    queryKey: ["users"],
    queryFn: getAllUsersApi,
  });
