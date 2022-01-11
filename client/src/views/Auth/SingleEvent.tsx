import { Layout } from 'components';
import { EventItem } from 'modules/event';
import { PrivateAuthGuard } from 'modules/auth';

export const SingleEvent: React.FC = () => {
  return (
    <PrivateAuthGuard>
      <Layout>
        <EventItem />
      </Layout>
    </PrivateAuthGuard>
  );
};
