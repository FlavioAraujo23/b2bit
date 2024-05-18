import axios from 'axios';
import { UserProfileData } from '../types/userProfile';

export const fetchUserProfile = async (): Promise<UserProfileData> => {
  const accessToken = localStorage.getItem('accessToken');
  const headers = {
    Accept: 'application/json;version=v1_web',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const response = await axios.get<UserProfileData>(
      'https://api.homologation.cliqdrive.com.br/auth/profile/',
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user profile', error);
    throw error;
  }
};
