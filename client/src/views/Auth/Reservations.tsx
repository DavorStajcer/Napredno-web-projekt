import { Layout } from 'components';
import { ReservationList } from 'modules/reservation';

export const Reservations: React.FC = () => {
  return (
    <Layout>
      <ReservationList />
    </Layout>
  );
};
