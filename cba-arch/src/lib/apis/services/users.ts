import { clientOne } from "@/lib/configs";
import { UserResponseData } from "@/lib/types";

/**
 * Description - Get all users
 * @returns {UserResponseData}
 */
export const getAllUsersApi = async (): Promise<UserResponseData[]> => {
  return await clientOne.get<UserResponseData[]>("users");
};
