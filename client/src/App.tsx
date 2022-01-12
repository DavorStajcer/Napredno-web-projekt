/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routing } from 'modules';
import { selectAuth, useAuthentication } from 'modules/auth';
import { useUser } from 'modules/user';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const App: React.FC = () => {
  const { autoLogin } = useAuthentication();
  const { getAllUsers } = useUser();
  const auth = useSelector(selectAuth);
  useEffect(() => {
    autoLogin();
    getAllUsers(auth.data.token);
  }, []);
  //
  //
  // useEffect(() => {
  //
  // }, []);
  return (
    <>
      <Routing />
    </>
  );
};
