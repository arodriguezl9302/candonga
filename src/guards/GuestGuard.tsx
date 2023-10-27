import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const GuestGuard = ({ children }: Props) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default GuestGuard;
