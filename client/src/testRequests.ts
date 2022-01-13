import axios from 'axios';

export const testRefreshToken = async (refreshToken: string) => {
  try {
    console.log('refresh token data', refreshToken);
    const response = await axios.post(
      'http://localhost:5000/api/auth/refresh-token',
      { refreshToken },
    );
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log('error', error);
  }
};
