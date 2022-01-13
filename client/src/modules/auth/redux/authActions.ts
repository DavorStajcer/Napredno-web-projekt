import {
  LoginData,
  loginFulfilled,
  loginPending,
  loginRejected,
  logout,
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
import { Auth } from 'models';
import { fetchUserById } from 'modules/user';

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
      dispatch(registerFulfilled(data as Auth));
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
      localStorage.setItem('userId', data.data.userId);
      localStorage.setItem('refreshToken', data.data.refreshToken);
      localStorage.setItem('token', data.data.token);
      dispatch(loginFulfilled(data as Auth));
      dispatch(fetchUserById());
      navigate(Routes.Home);
    } catch (error) {
      dispatch(loginRejected(error));
    }
  };

export const refreshToken = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(refreshTokenPending());
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await API.post(refreshTokenEndpoint, { refreshToken });
    const data = response.data;
    dispatch(refreshTokenFulfilled(data as Auth));
  } catch (error) {
    console.log(error);
    dispatch(logout());
    dispatch(refreshTokenRejected(error));
  }
};
