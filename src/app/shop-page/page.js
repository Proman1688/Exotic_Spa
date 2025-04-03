import Filter_1 from "../components/shop/Filter_1";
import Filter_2 from "../components/shop/Filter_2";
import Catalog from "../components/shop/Catalog";

export default function Home() {
  return (
  <>
  <div className="flex items-center justify-center"> <Filter_1 /> </div>
  <div className="flex flex-col md:flex-row h-screen">
      {/* Contenedor que ajusta la disposición de los filtros y el catálogo */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Menú de filtros (izquierda en pantallas grandes, arriba en móviles) */}
        <div className="w-1/4 border-2">
          <Filter_2 />
        </div>

        {/* Catálogo de productos (derecha en pantallas grandes, abajo en móviles) */}
        <div className="w-3/4 p-4">
          <Catalog />
        </div>
      </div>
    </div>
  </>
  );
}