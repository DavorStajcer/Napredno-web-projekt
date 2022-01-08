import { Navigation, Footer } from 'components';

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
