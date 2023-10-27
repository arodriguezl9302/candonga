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
import { Link } from "react-router-dom";

const Bottombar = () => {
  return (
    <div className="md:hidden p-3 flex gap-3 items-center justify-center fixed bottom-0 h-[10vh] w-full bg-gray-100 border-t border-gray-300">
      <Link
        to="/"
        className="w-16 h-16 bg-white shadow-2xl rounded-sm p-1 flex flex-col gap-1 justify-center items-center"
      >
        <BiHome size={32} />
      </Link>
      <div className="w-16 h-16 bg-white shadow-2xl rounded-sm p-1 flex flex-col gap-1 justify-center items-center">
        <BiLayer size={32} />
      </div>
      <Link
        to="/box"
        className="w-16 h-16 bg-white shadow-2xl rounded-sm p-1 flex flex-col gap-1 justify-center items-center"
      >
        <BiWallet size={32} />
      </Link>
      <div className="w-16 h-16 bg-white shadow-2xl rounded-sm p-1 flex flex-col gap-1 justify-center items-center">
        <BiUserCircle size={32} />
      </div>
      <div className="w-16 h-16 bg-white shadow-2xl rounded-sm p-1 flex flex-col gap-1 justify-center items-center">
        <BiShoppingBag size={32} />
      </div>
      <Link
        to="/login"
        className="w-16 h-16 bg-white shadow-2xl rounded-sm p-1 flex flex-col gap-1 justify-center items-center"
      >
        <BiExit size={32} />
      </Link>
    </div>
  );
};

export default Bottombar;
