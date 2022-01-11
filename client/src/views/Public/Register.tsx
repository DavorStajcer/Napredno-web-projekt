import { PublicAuthGuard, SignUp } from 'modules/auth';

export const Register: React.FC = () => {
  return (
    <PublicAuthGuard>
      <SignUp />
    </PublicAuthGuard>
  );
};
