import { Layout } from 'components';
import { UserInformation } from 'modules/user';

export const Profile: React.FC = () => {
  return (
    <Layout>
      <UserInformation />
    </Layout>
  );
};
