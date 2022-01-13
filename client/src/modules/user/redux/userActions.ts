/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from 'fixtures';
import { Auth } from 'models/auth';
import { User } from 'models/user';
import { AppDispatch, AppThunk } from 'modules/redux-store';
import {
  EditPasswordData,
  EditUserData,
  fetchByIdFulfilled,
  fetchByIdPending,
  fetchByIdRejected,
  idUser,
} from 'modules/user';

const fetchUserByIdEndpoint = '/api/user/fetch';
const fetchAllUsersEndpoint = '/api/user/fetch-all';
const editUserEndpoint = '/api/user/edit';
const editUserPasswordEndpoint = '/api/user/edit-password';

export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async (token: string) => {
    try {
      const response = await API.get(fetchUserByIdEndpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      //console.log('fetched user response', response);
      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

export const editUser = createAsyncThunk(
  'user/editUser',
  async (editData: EditUserData) => {
    try {
      const token = localStorage.getItem('token');

      const response = await API.post(editUserEndpoint, editData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      console.log('edit user data', data);
      //console.log('fetched user response', response);
      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

export const editPassword = createAsyncThunk(
  'user/editPassword',
  async (editPasswordData: EditPasswordData) => {
    try {
      const token = localStorage.getItem('token');

      const response = await API.post(
        editUserPasswordEndpoint,
        editPasswordData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const data = response.data;
      console.log('edit password data', data);
      //console.log('fetched user response', response);
      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

// export const fetchAllUsers = createAsyncThunk(
//   'user/fetchAllUsers',
//   async (token: string) => {
//     try {
//       const response = await API.get(fetchAllUsersEndpoint, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = response.data;
//       console.log('fetched users response', data);
//       return data;
//     } catch (error) {
//       throw new Error('didnt send event');
//     }
//   },
// );

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
