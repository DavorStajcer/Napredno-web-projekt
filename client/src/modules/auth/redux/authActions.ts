import {
  LoginData,
  loginFulfilled,
  loginPending,
  loginRejected,
  refreshTokenFulfilled,
  refreshTokenPending,
  refreshTokenRejected,
  RegisterData,
  registerFulfilled,
  registerPending,
  registerRejected,
} from 'modules/auth';
import { API } from 'fixtures';
import { navigate } from '@reach/router';
import { Routes } from 'fixtures';
import { AppDispatch, AppThunk } from 'modules/redux-store';

const registerUserEndpoint = '/api/auth/register';
const loginEndpoint = '/api/auth/login';
const refreshTokenEndpoint = '/api/auth/refresh-token';

export const registerUser =
  (registerData: RegisterData): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(registerPending());
      const response = await API.post(registerUserEndpoint, registerData);
      const data = response.data;
      dispatch(registerFulfilled(data));
      navigate(Routes.Login);
    } catch (error) {
      console.log(error);
      dispatch(registerRejected(error));
    }
  };

export const loginUser =
  (loginData: LoginData): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loginPending());
      const response = await API.post(loginEndpoint, loginData);
      const data = response.data;

      //token- create,edit,delete post i fetch users events u Bearer ide ovaj
      //refreshtoken- autologin
      console.log(data.data.userId);
      localStorage.setItem('userId', data.data.userId);
      localStorage.setItem('refreshToken', data.data.refreshToken);
      dispatch(loginFulfilled(data));
      navigate(Routes.Home);
    } catch (error) {
      dispatch(loginRejected(error));
    }
  };

export const getToken =
  (refreshToken: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(refreshTokenPending());
      const response = await API.post(refreshTokenEndpoint, refreshToken);
      const data = response.data;
      console.log('refresh token data', data);
      dispatch(refreshTokenFulfilled(data));
    } catch (error) {
      dispatch(refreshTokenRejected(error));
    }
  };
