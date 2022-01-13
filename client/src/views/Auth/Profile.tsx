/* eslint-disable @typescript-eslint/no-unused-vars */
import { Layout } from 'components';
import { fetchUserById, idUser, UserInformation } from 'modules/user';
import { PrivateAuthGuard } from 'modules/auth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { testRefreshToken } from 'testRequests';

export const Profile: React.FC = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token') as string;

  testRefreshToken('b35aab0e-f040-4761-81c0-2343c96c168f');
  useEffect(() => {
    dispatch(fetchUserById(token));
  }, []);
  return (
    <PrivateAuthGuard>
      <Layout>
        <UserInformation />
      </Layout>
    </PrivateAuthGuard>
  );
};
