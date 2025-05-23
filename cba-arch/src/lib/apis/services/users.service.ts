import { clientOne } from "@/lib/configs";
import { UserResponseData } from "@/lib/types";

export class UserService {
  /**
   * Description - Get all users
   * @returns {UserResponseData}
   */
  static getAllUsersApi = async (): Promise<UserResponseData[]> => {
    return await clientOne.get<UserResponseData[]>("users");
  };
}
