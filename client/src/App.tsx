/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routing } from 'modules';
import { selectAuth, useAuthentication } from 'modules/auth';
import { useUser } from 'modules/user';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const App: React.FC = () => {
  const { autoLogin } = useAuthentication();
  useEffect(() => {
    autoLogin();
  }, []);
  // const auth = useSelector(selectAuth);
  // const { getAllUsers } = useUser();
  // useEffect(() => {
  //   getAllUsers(auth.data.token);
  // }, []);
  return (
    <>
      <Routing />
    </>
  );
};
