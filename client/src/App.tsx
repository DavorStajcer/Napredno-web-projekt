/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { Routing } from 'modules';
import { LoginData, loginUser, RegisterData } from 'modules/auth';
import { registerUser } from 'modules/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const registerUserTest = async (data: RegisterData) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const response = await axios.post(
    'http://localhost:5000/api/auth/register',
    data,
    {
      headers: headers,
    },
  );
  console.log('resp', response);
};

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const testData: RegisterData = {
    email: 'mboras1@etfos.hr',
    name: 'Marko',
    surname: 'Boras',
    password: '1234567',
  };
  const loginData: LoginData = {
    email: 'mboras1@etfos.hr',
    password: '1234567',
  };
  registerUserTest(testData);
  useEffect(() => {
    //dispatch(registerUser(testData));
    dispatch(loginUser(loginData));
  }, []);
  return (
    <>
      <Routing />
    </>
  );
};
