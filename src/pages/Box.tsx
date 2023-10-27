import {
  BiTrendingUp,
  BiTrendingDown,
  BiPencil,
  BiFolderOpen,
} from "react-icons/bi";

const Box = () => {
  return (
    <div className="md:w-[768px] h-full bg-white rounded-sm shadow-2xl p-5 overflow-y-scroll scrollBarMod">
      <div className="flex flex-col md:flex-row gap-1 pb-5 items-center">
        <div className="md:w-1/3 w-full h-28 flex shadow-2xl md:shadow-none justify-between bg-white border-gray-300 border rounded-sm md:rounded-none mb-3 py-1 md:py-0 md:mb-0 md:border-r md:border-b-0 md:border-t-0 md:border-l-0">
          <div className="md:h-24 px-2 space-y-1 text-center md:text-start">
            <p className="text-xl font-light">Fondo (hoy)</p>
            <p className="text-2xl font-medium">$ - </p>
            <p className="text-sm font-light flex items-center gap-2 justify-center md:justify-start">
              <span className="text-[#0047BA] font-medium">Ayer</span>{" "}
              <span className="text-lg text-gray-400">$3480.00</span>
            </p>
          </div>
          <div className="cursor-pointer w-16 h-16 bg-[#0047BA] my-auto text-white shadow-2xl mr-5 rounded-sm  flex flex-col gap-1 items-center justify-center">
            <BiFolderOpen size={25} />
            <p>Abrir</p>
          </div>
        </div>
        <div className="md:w-2/5 w-full h-28 px-2 shadow-2xl md:shadow-none bg-white border-gray-300 space-y-1 text-center md:text-start border rounded-sm md:rounded-none mb-3 py-1 md:py-0 md:mb-0 md:border-r md:border-b-0 md:border-t-0 md:border-l-0">
          <p className="text-xl font-light">Dinero generado hoy</p>
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <p className="text-2xl font-medium">$5643370.00</p>
            <div className="rounded-full bg-green-400 px-3 py-1 text-sm flex gap-2 items-center text-white">
              <p>14%</p> <BiTrendingUp size={24} color="green" />
            </div>
          </div>
          <p className="text-sm font-light flex items-center gap-2 justify-center md:justify-start">
            <span className="text-[#0047BA] font-medium">
              Usuario mas ingresos:
            </span>{" "}
            <span className="text-lg text-gray-400">Raiber</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
