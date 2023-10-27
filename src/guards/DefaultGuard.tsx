import React from "react";

type Props = {
  children: React.ReactNode;
};
const DefaultGuard = ({ children }: Props) => {
  console.log("paso!");
  return <>{children}</>;
};

export default DefaultGuard;
