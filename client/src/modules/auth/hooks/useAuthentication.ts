/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch } from 'react-redux';

import {
  getRefreshToken,
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

  const autoLogin = (refreshToken: string) => {
    console.log('Refresh token in useAuth', refreshToken);
    dispatch(getRefreshToken(refreshToken));
  };

  const registerWithEmailPassword = (data: RegisterData) => {
    dispatch(registerUser(data));
  };
  const loginWithEmailPassword = (data: LoginData) => {
    dispatch(loginUser(data));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    registerWithEmailPassword,
    loginWithEmailPassword,
    autoLogin,
    logoutUser,
  };
};
