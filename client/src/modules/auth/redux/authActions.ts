/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://event-planner-5fa62-default-rtdb.europe-west1.firebasedatabase.app',
});
const registerUserEndpoint = '/api/auth/registerUser.json';
const loginEndpoint = '/api/auth/login.json';
const refreshTokenEndpoint = '/api/auth/refresh-token';
