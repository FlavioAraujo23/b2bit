import axios from "axios";
import { User } from "../types/apiResponse";

export const loginUser = async (userData: User) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post('https://api.homologation.cliqdrive.com.br/auth/login/', userData);
    return response;
  } catch (error) {
    console.log(error);
  }
};