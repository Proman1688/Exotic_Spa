"use client";
export default function MyProfile() {

  const services = [
    { name: "Masaje Relajante", description: "Masaje para aliviar el estrés y la tensión muscular." },
    { name: "Facial Hidratante", description: "Tratamiento facial para hidratar y revitalizar la piel." },
    { name: "Terapia de Aromaterapia", description: "Uso de aceites esenciales para mejorar el bienestar." },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
      <h1 className="text-4xl font-bold flex items-center text-center justify-center w-full mb-3 gap-2 max-sm:text-2xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">person</span> My Profile</h1>

      <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">This is the My Profile page</p>

      <form className="w-full flex flex-col items-center justify-center gap-3">

        <div className="grid grid-cols-1 gap-4 w-full mb-5 shadow-lg p-5 rounded-lg bg-gray-50">
          <h3 className="text-2xl font-bold flex items-center text-center w-full gap-2 max-sm:text-xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">badge</span>Informacion Personal</h3>
          <div className="w-full h-[0.5px] bg-black/40 mb-2"></div>
          <div>
            <label className="text-sm font-bold mb-1 mt-2">Nombre Completo: </label>
            <input
              type="text"
              placeholder="[Nombre del colaborador]"
              disabled
              className="w-full p-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
            <p className="text-xs text-gray-500 mt-1">Este campo es gestionado por el administrador.</p>
          </div>

          <div>
            <label className="text-sm font-bold mb-1 mt-2">Email: </label>
            <input
              type="email"
              disabled
              placeholder="[colaborador@exoticspa.com]"  
              className="w-full p-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
            <p className="text-xs text-gray-500 mt-1">Este campo es gestionado por el administrador.</p>
          </div>

          <div className="mb-4">
            <label className="text-sm font-bold mb-1 mt-2">Numero de telefono:</label>
            <input
              type="text"
              placeholder="Numero de Telefono"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
          </div>
        </div>
        
        <div className="w-full h-[0.5px] bg-black/10 mb-6"></div>

        <div className="grid grid-cols-1 gap-4 w-full mb-5 shadow-lg p-5 rounded-lg bg-gray-50">
          <h3 className="text-2xl font-bold flex items-center text-center w-full mb-3 gap-2 max-sm:text-xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">construction</span>Especialidades y Rol</h3>
          <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>

          <div>
            <label className="text-sm font-bold mb-1 mt-2">Mi Rol Principal: </label>
            <input
              type="text"
              placeholder="[Terapeuta Principal]"
              disabled
              className="w-full p-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
          </div>

          <div>
            <h3 className="text-sm font-bold mt-2 mb-5">Servicios que Realizo: </h3>
            <ul className="list-disc pl-5 mt-2 flex w-full gap-2 mb-4 max-md:flex-col max-md:items-start">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-gray-700 mb-1 border border-gray-200 shadow-sm rounded-2xl px-4 py-2 transition-colors list-none bg-gray-300 flex items-center justify-between">
                  {service.name}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-1">Tus especialidades son gestionadas por el administrador.</p>
          </div>

        </div>
        
        <div className="w-full h-[0.5px] bg-black/10 mb-6"></div>

        <div className="grid grid-cols-1 gap-4 w-full mb-5 shadow-lg p-5 rounded-lg bg-gray-50">
          <h3 className="text-2xl font-bold flex items-center text-center w-full mb-3 gap-2 max-sm:text-xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">key_vertical</span>Seguridad de la cuenta</h3>
          <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>

          <div className="flex flex-col w-full mb-2">
            <label className="text-sm font-bold mb-1 mt-2">Contraseña Actual: </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
          </div>
          <div className="flex gap-8 max-md:flex-col max-md:items-start max-md:gap-4">
            <div className="flex-1 max-md:w-full">
              <label className="text-sm font-bold mb-1 mt-2">Nueva Contraseña: </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
              />
            </div>
            <div className="flex-1 max-md:w-full">
              <label className="text-sm font-bold mb-1 mt-2">Confirmar Nueva Contraseña: </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
              />
            </div>
          </div>

        </div>

        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded-md hover:bg-green-500 transition-colors duration-200 mt-4 mb-8 flex items-center justify-center gap-2 max-sm:w-auto px-5 py-2 font-bold"
        >
          <span className="material-symbols-outlined icon-filled !text-xl text-center">save</span>
          Guardar Cambios
        </button>
      </form>
    </section>
  );
}