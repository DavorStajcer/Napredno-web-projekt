/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';

import {
  refreshToken,
  LoginData,
  loginUser,
  logout,
  RegisterData,
  registerUser,
  selectAuth,
} from 'modules/auth';
import { navigate } from '@reach/router';
import { Routes } from 'fixtures';
import { fetchUserById } from 'modules/user';

export const useAuthentication = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const registerWithEmailPassword = (data: RegisterData) => {
    dispatch(registerUser(data));
  };
  const loginWithEmailPassword = (data: LoginData) => {
    dispatch(loginUser(data));
  };

  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem('userId');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('token');
  };
  const autoLogin = () => {
    if (token === null) {
      // console.log('auto logout ide');
      logoutUser();
      navigate(Routes.Login);
    } else {
      // console.log('auto login ide');
      dispatch(refreshToken());
      dispatch(fetchUserById());
    }
  };

  return {
    registerWithEmailPassword,
    loginWithEmailPassword,
    autoLogin,
    logoutUser,
  };
};
