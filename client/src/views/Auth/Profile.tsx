import { Layout } from 'components';
import { fetchUserById, idUser, UserInformation } from 'modules/user';
import { PrivateAuthGuard } from 'modules/auth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const userData: idUser = {
    token: localStorage.getItem('token') as string,
    userId: localStorage.getItem('userId') as string,
  };
  console.log('profile page, userdata from local storage', userData);
  useEffect(() => {
    dispatch(fetchUserById(userData));
  }, []);
  return (
    <PrivateAuthGuard>
      <Layout>
        <UserInformation />
      </Layout>
    </PrivateAuthGuard>
  );
};
