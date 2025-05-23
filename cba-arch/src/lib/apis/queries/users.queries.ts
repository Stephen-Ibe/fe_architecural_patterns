import { useQuery } from "@tanstack/react-query";
import { UserService } from "../services";
import { UserResponseData } from "@/lib/types";

const { getAllUsersApi } = UserService;

export const useGetAllUsers = () =>
  useQuery<UserResponseData[]>({
    queryKey: ["users"],
    queryFn: getAllUsersApi,
  });
