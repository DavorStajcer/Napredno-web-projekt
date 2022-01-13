import { Routing } from 'modules';
import { useAuthentication } from 'modules/auth';
import { useEffect } from 'react';

export const App: React.FC = () => {
  const { autoLogin } = useAuthentication();
  const token = localStorage.getItem('token');
  useEffect(() => {
    autoLogin();
  }, [token]);
  return (
    <>
      <Routing />
    </>
  );
};
