/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch } from 'react-redux';

import {
  getToken,
  LoginData,
  loginUser,
  logout,
  RegisterData,
  registerUser,
} from 'modules/auth';
import { navigate } from '@reach/router';
import { Routes } from 'fixtures';

export const useAuthentication = () => {
  const dispatch = useDispatch();

  const autoLogin = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    console.log('refresh token', refreshToken);
    dispatch(getToken(refreshToken as string));
  };

  const registerWithEmailPassword = (data: RegisterData) => {
    dispatch(registerUser(data));
  };
  const loginWithEmailPassword = (data: LoginData) => {
    dispatch(loginUser(data));
  };

  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem('userId');
  };

  return {
    registerWithEmailPassword,
    loginWithEmailPassword,
    autoLogin,
    logoutUser,
  };
};
