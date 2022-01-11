import { Layout } from 'components';
import { PrivateAuthGuard } from 'modules/auth';
import { EditProfileForm } from 'modules/user';

export const EditProfile: React.FC = () => {
  return (
    <PrivateAuthGuard>
      {' '}
      <Layout>
        <EditProfileForm />
      </Layout>
    </PrivateAuthGuard>
  );
};
