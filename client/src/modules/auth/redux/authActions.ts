/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
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
import { AppDispatch, AppThunk } from 'modules/redux-store';

const registerUserEndpoint = '/api/auth/register';
const loginEndpoint = '/api/auth/login';
const refreshTokenEndpoint = '/api/auth/refresh-token';
/*
const config = {
  headers: { Authorization: `Bearer ${token}` },
};
*/

export const registerUser =
  (registerData: RegisterData): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(registerPending());
      const headers = {
        'Content-Type': 'application/json',
      };
      const response = await axios.post(
        'http://localhost:5000/api/auth/register',
        registerData,
        {
          headers: headers,
        },
      );
      const data = response.data;
      dispatch(registerFulfilled(data));
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
      console.log('data', data);
      dispatch(loginFulfilled(data));
    } catch (error) {
      dispatch(loginRejected(error));
    }
  };

export const getRefreshToken =
  (refreshToken: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(refreshTokenPending());
      const response = await API.post(loginEndpoint, refreshToken);
      const data = response.data;
      dispatch(refreshTokenFulfilled(data));
    } catch (error) {
      dispatch(refreshTokenRejected(error));
    }
  };
