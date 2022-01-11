import { SignIn } from 'modules/auth';
import { PublicAuthGuard } from 'modules/auth';

export const Login: React.FC = () => {
  return (
    <PublicAuthGuard>
      <SignIn />
    </PublicAuthGuard>
  );
};
