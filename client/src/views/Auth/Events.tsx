import { EventList } from 'modules/event';
import { Layout } from 'components';
import { PrivateAuthGuard } from 'modules/auth';

export const Events: React.FC = () => {
  return (
    <PrivateAuthGuard>
      <Layout>
        <EventList />
      </Layout>
    </PrivateAuthGuard>
  );
};
