import Bottombar from "@/components/Bottombar";
import Navbar from "@/components/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-cyan-300">
      <Navbar />
      <div className="md:mt-4 md:max-w-[768px] md:mx-auto h-[90vh] md:h-[73vh]">
        {children}
      </div>
      <Bottombar />
    </div>
  );
};

export default AdminLayout;
