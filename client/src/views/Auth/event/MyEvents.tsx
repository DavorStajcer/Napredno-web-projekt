import { Layout } from 'components';
import { MyEventsList } from 'modules/event';
import { PrivateAuthGuard } from 'modules/auth';

export const MyEvents: React.FC = () => {
  return (
    <PrivateAuthGuard>
      <Layout>
        <MyEventsList />
      </Layout>
    </PrivateAuthGuard>
  );
};
