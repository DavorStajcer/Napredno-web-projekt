import { Layout } from 'components';
import { EditPasswordForm } from 'modules/user';
import { PrivateAuthGuard } from 'modules/auth';

export const EditPassword: React.FC = () => {
  return (
    <PrivateAuthGuard>
      <Layout>
        <EditPasswordForm />
      </Layout>
    </PrivateAuthGuard>
  );
};
