import { Link, useLocation } from "react-router-dom";
import {
  BiShoppingBag,
  BiExit,
  BiUserCircle,
  BiBox,
  BiHome,
  BiFile,
  BiWallet,
  BiLayer,
} from "react-icons/bi";

const Navbar = () => {
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/dashboard",
      name: "Dashboard",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  // const location = useLocation();

  return (
    <nav>
      <div className="px-96 pt-10 pb-5 md:flex space-x-5 items-center justify-center w-full hidden">
        <Link
          to="/"
          className="hover:text-[#0047BA] min-w-[96px] duration-300 w-24 h-24 bg-white space-y-1 shadow-2xl rounded-sm flex flex-col items-center justify-center"
        >
          <BiHome size={40} />
          <p className="text-md font-medium">Inicio</p>
        </Link>
        <Link
          to="/"
          className="hover:text-[#0047BA] min-w-[96px] duration-300 w-24 h-24 bg-white space-y-1 shadow-2xl rounded-sm flex flex-col items-center justify-center"
        >
          <BiLayer size={40} />
          <p className="text-md font-medium">Almacen</p>
        </Link>
        <Link
          to="/box"
          className="hover:text-[#0047BA] min-w-[96px] duration-300 w-24 h-24 bg-white space-y-1 shadow-2xl rounded-sm flex flex-col items-center justify-center"
        >
          <BiWallet size={40} />
          <p className="text-md font-medium">Caja</p>
        </Link>
        <Link
          to="/"
          className="hover:text-[#0047BA] min-w-[96px] duration-300 w-24 h-24 bg-white space-y-1 shadow-2xl rounded-sm flex flex-col items-center justify-center"
        >
          <BiUserCircle size={40} />
          <p className="text-md font-medium">Usuarios</p>
        </Link>
        <Link
          to="/"
          className="hover:text-[#0047BA] min-w-[96px] duration-300 w-24 h-24 bg-white space-y-1 shadow-2xl rounded-sm flex flex-col items-center justify-center"
        >
          <BiShoppingBag size={40} />
          <p className="text-md font-medium">Mis tiendas</p>
        </Link>
        <Link
          to="/login"
          className="hover:text-[#0047BA] min-w-[96px] duration-300 w-24 h-24 bg-white space-y-1 shadow-2xl rounded-sm flex flex-col items-center justify-center"
        >
          <BiExit size={40} />
          <p className="text-md font-medium">Salir</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
