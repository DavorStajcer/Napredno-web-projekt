import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:5000',
});

API.defaults.headers.common['Authorization'] = 'Auth from instance';

/*export const setAuthToken = token => {
 if (token) {
 //applying token
 API.defaults.headers.common['Authorization'] = token;
 } else {
 //deleting the token from header
 delete API.defaults.headers.common['Authorization'];
 }
} */
