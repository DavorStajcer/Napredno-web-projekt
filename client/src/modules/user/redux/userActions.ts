/* eslint-disable @typescript-eslint/no-unused-vars */
import { navigate, useLocation } from '@reach/router';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API, Routes } from 'fixtures';
import { Auth } from 'models/auth';
import { User, UserData } from 'models/user';
import { AppDispatch, AppThunk } from 'modules/redux-store';
import { EditPasswordData, EditUserData, idUser } from 'modules/user';

const fetchUserByIdEndpoint = '/api/user/fetch';
const fetchAllUsersEndpoint = '/api/user/fetch-all';
const editUserEndpoint = '/api/user/edit';
const editUserPasswordEndpoint = '/api/user/edit-password';

export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await API.get(fetchUserByIdEndpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;

      if (data.confirmation === 'success') {
        navigate(+1);
      }
      const returnData: User = {
        confirmation: data.confirmation as string,
        message: data.message as string,
        data: data.data.user as UserData,
      };
      return returnData;
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
//   async () => {
//     try {
//       const token = localStorage.getItem('token');
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
