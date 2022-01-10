import { Navigation, Footer } from 'components';
import classes from './Layout.module.css';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={classes.container}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
