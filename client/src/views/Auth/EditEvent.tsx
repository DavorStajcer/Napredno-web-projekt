import { Layout } from 'components';
import { EditEventForm } from 'modules/event';
import { PrivateAuthGuard } from 'modules/auth';

export const EditEvent: React.FC = () => {
  return (
    <PrivateAuthGuard>
      <Layout>
        <EditEventForm />
      </Layout>
    </PrivateAuthGuard>
  );
};
