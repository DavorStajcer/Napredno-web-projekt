import { Layout } from 'components';
import { CreateEventForm } from 'modules/event';
import { PrivateAuthGuard } from 'modules/auth';
export const CreateEvent: React.FC = () => {
  return (
    <PrivateAuthGuard>
      <Layout>
        <CreateEventForm />
      </Layout>
    </PrivateAuthGuard>
  );
};
