/* eslint-disable @typescript-eslint/no-unused-vars */
import { Layout } from 'components';
import { fetchUserById, idUser, UserInformation } from 'modules/user';
import { PrivateAuthGuard } from 'modules/auth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const Profile: React.FC = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUserById());
  // }, []);
  return (
    <PrivateAuthGuard>
      <Layout>
        <UserInformation />
      </Layout>
    </PrivateAuthGuard>
  );
};
