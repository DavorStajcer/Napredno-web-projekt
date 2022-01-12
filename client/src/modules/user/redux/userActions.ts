/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from 'fixtures';
import { Auth } from 'models/auth';
import { User } from 'models/user';
import { AppDispatch, AppThunk } from 'modules/redux-store';
import {
  fetchByIdFulfilled,
  fetchByIdPending,
  fetchByIdRejected,
  idUser,
} from 'modules/user';

const fetchUserByIdEndpoint = '/api/user/fetch';
const fetchAllUsersEndpoint = '/api/user/fetch-all';
const editUserEndpoint = '/api/user/editUser.json';
const editUserPasswordEndpoint = '/api/user/edit-password.json';

export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async (userData: idUser) => {
    try {
      const response = await API.post(fetchUserByIdEndpoint, userData.userId, {
        headers: { Authorization: `Bearer ${userData.token}` },
      });
      const data = response.data;
      console.log('fetched user response', response);
      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

export const fetchAllUsers = createAsyncThunk(
  'user/fetchAllUsers',
  async (token: string) => {
    try {
      const response = await API.get(fetchAllUsersEndpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      console.log('fetched users response', data);
      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

// export const fetchByIdUser =
//   (allUsers: User[], auth: Auth): AppThunk =>
//   async (dispatch: AppDispatch) => {
//     try {
//       dispatch(fetchByIdPending());
//       const user = allUsers.find((user) => user._id === auth.data.userId);
//       console.log('user by id', user);
//       dispatch(fetchByIdFulfilled(user));
//     } catch (error) {
//       dispatch(fetchByIdRejected(error));
//     }
//   };
