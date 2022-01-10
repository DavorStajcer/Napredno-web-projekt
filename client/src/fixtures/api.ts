import axios from 'axios';

export const API = axios.create({
  baseURL:
    'https://event-planner-5fa62-default-rtdb.europe-west1.firebasedatabase.app',
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
