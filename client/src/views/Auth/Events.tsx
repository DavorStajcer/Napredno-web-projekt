import { EventList } from 'modules/event';
import { Layout } from 'components';
import { PrivateAuthGuard, useAuthentication } from 'modules/auth';
import { useEffect } from 'react';

export const Events: React.FC = () => {
  const { autoLogin } = useAuthentication();
  useEffect(() => {
    autoLogin();
  }, []);
  return (
    <PrivateAuthGuard>
      <Layout>
        <EventList />
      </Layout>
    </PrivateAuthGuard>
  );
};
