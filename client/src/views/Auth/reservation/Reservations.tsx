import { Layout } from 'components';
import { ReservationList } from 'modules/reservation';
import { PrivateAuthGuard } from 'modules/auth';

export const Reservations: React.FC = () => {
  return (
    <PrivateAuthGuard>
      <Layout>
        <ReservationList />
      </Layout>
    </PrivateAuthGuard>
  );
};
