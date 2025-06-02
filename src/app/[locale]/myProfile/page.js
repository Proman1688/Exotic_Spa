"use client";
export default function MyProfile() {
  return (
    <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
      <h1 className="text-4xl font-bold flex items-center text-center justify-center w-full mb-3 gap-2 max-sm:text-2xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">person</span> My Profile</h1>

      <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">This is the My Profile page</p>

      <h3 className="text-2xl font-bold flex items-center text-center w-full mb-3 gap-2 max-sm:text-xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">badge</span>Informacion Personal</h3>
      <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>

      <form className="w-full flex flex-col items-start justify-start gap-3">
        <div className="grid grid-cols-3 gap-4 w-full mb-5 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <label className="text-sm font-semibold mb-1 mt-2">Nombre Completo: </label>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-semibold mb-1 mt-2">Email: </label>
            <input
              type="email"
              placeholder="Correo Electronico"  
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-semibold mb-1 mt-2">Numero de telefono:</label>
            <input
              type="text"
              placeholder="Numero de Telefono"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm font-semibold mb-1">Fecha de nacimiento</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-4 w-full">
          <label className="text-sm font-semibold mb-1">Direccion (opcional)</label>
          <textarea
            placeholder="Direccion"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded-md hover:bg-green-500 transition-colors duration-200 mt-4 mb-8 flex items-center justify-center gap-2 max-sm:w-auto px-5 py-2 font-bold"
        >
          <span className="material-symbols-outlined icon-filled !text-xl text-center">save</span>
          Guardar Cambios
        </button>
      </form>

      <div className="w-full h-[0.5px] bg-black/10 mb-6"></div>

      <h3 className="text-2xl font-bold flex items-center text-center w-full mb-3 gap-2 max-sm:text-xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">shield</span>Seguridad</h3>
      <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
      <div className="flex flex-col items-start justify-start gap-3 w-full mb-5">
        <button
          className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-400 transition-colors duration-200 mt-4 mb-8 flex items-center justify-center gap-2 max-sm:w-auto px-5 py-2 font-bold"
          onClick={() => alert('Cambiar contraseña')}
        >
          <span className="material-symbols-outlined icon-filled !text-xl text-center">key_vertical</span>
          Cambiar Contraseña
        </button>

      </div>

      <div className="w-full h-[0.5px] bg-black/10 mb-6"></div>

      <h3 className="text-2xl font-bold flex items-center text-center w-full mb-3 gap-2 max-sm:text-xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">settings</span>Configuración Adicional</h3>
      <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
      <div className="grid grid-cols-3 gap-4 w-full max-lg:grid-cols-2 max-sm:grid-cols-1 mb-10">

        <div className="flex flex-col items-center border p-4 rounded-lg hover:bg-black/10 transition-colors cursor-pointer border-gray-300 shadow-lg"> 
          <h3 className="flex flex-col items-start text-lg font-bold text-start w-full max-md:text-base mb-4 max-lg:text-base"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">health_metrics</span>Mis condiciones Médicas</h3>
          <p className="text-xs mb-4 max-sm:text-xs max-md:text-[10px]">Ver y actualizar información de salud relevante</p>
        </div>

        <div className="flex flex-col items-center border p-4 rounded-lg hover:bg-black/10 transition-colors cursor-pointer border-gray-300 shadow-lg"> 
          <h3 className="flex flex-col items-start text-lg font-bold text-start w-full max-md:text-base mb-4 max-lg:text-base"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">groups</span>Gestionar Perfiles Familiares</h3>
          <p className="text-xs mb-4 max-sm:text-xs max-md:text-[10px]">Añade o modifica perfiles para miembros de tu familia</p>
        </div>

        <div className="flex flex-col items-center border p-4 rounded-lg hover:bg-black/10 transition-colors cursor-pointer border-gray-300 shadow-lg"> 
          <h3 className="flex flex-col items-start text-lg font-bold text-start w-full max-md:text-base mb-4 max-lg:text-base"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">person_remove</span>Eliminar mi cuenta</h3>
          <p className="text-xs mb-4 max-sm:text-xs max-md:text-[10px]">Gestiona la eliminación permanente de tu cuenta</p>
        </div>

      </div>
    </section>
  );
}