import CustomInput from "@/components/CustomInput";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="flex flex-col min-w-[384px] h-[450px] items-center">
      <div className="bg-[#FFFFFF] w-full h-full rounded-sm p-6 drop-shadow-2xl mb-4">
        <img src={Logo} alt="Logo" className="w-24 h-24 mb-4 mx-auto" />
        <p className="text-3xl font-normal text-center">Recuperar contraseña</p>
        <p className="mb-8 text-center">
          Ingresa tu correo para recuperar la contraseña
        </p>
        <form action="" autoComplete="off">
          <CustomInput
            placeholder="Email"
            type="email"
            className="mb-5 rounded-sm focus:border-[#0047BA]"
          />
          <Link
            to="/login"
            className="bg-[#0047BA] text-white font-medium flex justify-center items-center w-full py-2 rounded-sm"
          >
            Recuperar
          </Link>
        </form>
      </div>
      <Link to="/login" className="font-medium text-sm text-[#0047BA]">
        Ya tienes cuenta, regresar al login?
      </Link>
    </div>
  );
};

export default ResetPassword;
