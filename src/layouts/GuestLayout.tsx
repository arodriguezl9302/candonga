import React from "react";

type Props = {
  children: React.ReactNode;
};

const GuestLayout = ({ children }: Props) => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-cyan-300">
      {children}
    </div>
  );
};

export default GuestLayout;
