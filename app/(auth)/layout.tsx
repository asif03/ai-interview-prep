import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="auth-laout">{children}</div>;
};

export default AuthLayout;
