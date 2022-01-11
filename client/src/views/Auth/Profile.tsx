import { Layout } from 'components';
import { UserInformation } from 'modules/user';
import { PrivateAuthGuard } from 'modules/auth';

export const Profile: React.FC = () => {
  return (
    <PrivateAuthGuard>
      {' '}
      <Layout>
        <UserInformation />
      </Layout>
    </PrivateAuthGuard>
  );
};
