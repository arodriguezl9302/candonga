import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  roles?: string[] | string | null;
};

const Authguard = ({ children, roles }: Props) => {
  console.log(roles);
  const isAuthenticated = true;
  const asRole = roles && roles.includes("admin");

  if (!isAuthenticated || (roles && asRole != true)) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default Authguard;
