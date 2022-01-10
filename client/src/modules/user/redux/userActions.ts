/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://event-planner-5fa62-default-rtdb.europe-west1.firebasedatabase.app',
});
const fetchUserByIdEndpoint = '/api/user/fetchUserByIdEndpoint.json';
const fetchAllUsersEndpoint = '/api/user/fetchAllUsers.json';
const editUserEndpoint = '/api/user/editUser.json';
const editUserPasswordEndpoint = '/api/user/edit-password.json';
