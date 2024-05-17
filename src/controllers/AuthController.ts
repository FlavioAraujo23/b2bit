import axios from 'axios';
import { UserResponse, UserCredentials } from '../types/apiResponse';

export const loginUser = async (
  userData: UserCredentials
): Promise<UserResponse | undefined | { code: number; message: string }> => {
  const headers = {
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  };
  // eslint-disable-next-line no-useless-catch
  try {
    console.log(userData);
    const response = await axios.post(
      'https://api.homologation.cliqdrive.com.br/auth/login/',
      JSON.stringify(userData),
      { headers }
    );
    return response.data;
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      throw new Error('Verifique suas credenciais');
    }
  }
};
