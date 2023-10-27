import CustomInput from "@/components/CustomInput";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
// import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col min-w-[384px] h-[450px] items-center">
      <div className="bg-[#FFFFFF] w-full h-full rounded-sm p-6 drop-shadow-2xl mb-4">
        <img src={Logo} alt="Logo" className="w-24 h-24 mb-4 mx-auto" />
        <p className="text-3xl font-normal text-center">Iniciar Sessión</p>
        <p className="mb-8 text-center">
          Ingresa las credenciales para entrar a tu cuenta
        </p>
        <form action="" autoComplete="off">
          <CustomInput
            placeholder="Email"
            type="email"
            className="mb-5 rounded-sm focus:border-[#0047BA]"
          />
          <CustomInput
            placeholder="Password"
            type="password"
            className="mb-8 focus:border-[#0047BA]"
          />
          <Link
            to="/"
            className="bg-[#0047BA] text-white font-medium flex justify-center items-center w-full py-2 rounded-sm"
          >
            Ingresar
          </Link>
        </form>
      </div>
      <Link to="/reset-password" className="font-medium text-sm text-[#0047BA]">
        Olvidaste la contrasña?
      </Link>
    </div>
  );
};

export default Login;
