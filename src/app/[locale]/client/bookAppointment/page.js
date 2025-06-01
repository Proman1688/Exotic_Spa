export default function BookAppointmentPage() {
    return (
        <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
            <h1 className="text-4xl font-bold flex items-center text-center justify-center w-full mb-3 gap-2 max-sm:text-2xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">calendar_add_on</span> Agendar Cita</h1>
            <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Aquí puedes agendar una cita.</p>
            <form className="w-full flex flex-col items-center gap-4">
                <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                    <h1 className="text-lg font-bold text-blue-500 absolute top-[-15px] bg-white px-3 max-md:text-base max-sm:text-sm max-sm:top-[-10px]">Paso 1: Elige tu Servicio</h1>
                    <label htmlFor="service" className="block text-sm text-gray-700 font-bold">Servicio deseado: </label>
                    <select id="service" name="service" className="text-sm mt-1 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option value="">-- Selecciona un servicio --</option>
                        <option value="massage">Masaje</option>
                        <option value="facial">Tratamiento Facial</option>
                        <option value="body">Tratamiento Corporal</option>
                        <option value="other">Otro</option>
                    </select>
                </div>

                <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                    <h1 className="text-lg font-bold text-blue-500 absolute top-[-15px] bg-white px-3 max-md:text-base max-sm:text-sm max-sm:top-[-10px]">Paso 2: Elige tu Terapeuta (Opcional)</h1>
                    <label htmlFor="terapeuta" className="block text-sm text-gray-700 font-bold">Terapeuta: </label>
                    <select id="terapeuta" name="terapeuta" className="text-sm mt-1 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option value="">Cualquier terapeuta disponible</option>
                        <option value="john">John Doe</option>
                        <option value="jane">Jane Smith</option>
                        <option value="emily">Emily Johnson</option>
                        <option value="other">Otro</option>
                    </select>
                </div>

                <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5 flex gap-4 justify-between max-md:flex-col max-md:gap-2">
                    <div className="flex-1 relative">
                        <h1 className="text-lg font-bold text-blue-500 absolute top-[-45px] bg-white px-3 max-md:text-base max-sm:text-sm max-sm:top-[-40px]">Paso 3: Elige Fecha y Hora</h1>
                        <label htmlFor="fecha" className="block text-sm text-gray-700 font-bold mb-2">Fecha: </label>
                        <input type="date" id="fecha" name="fecha" className="p-2 border-2 border-gray-300 shadow-md rounded-lg"></input>
                    </div>
                    <div className="flex-1 relative">
                        <h1 className="font-bold">Horas Disponibles:</h1>
                        <div className="grid grid-cols-4 gap-2 mt-2 max-lg:grid-cols-3">
                            <h1 className="bg-blue-100 text-center py-2 text-blue-500 rounded-lg border-2 border-blue-200 cursor-pointer hover:bg-blue-200">09:00 AM</h1>
                            <h1 className="bg-blue-100 text-center py-2 text-blue-500 rounded-lg border-2 border-blue-200 cursor-pointer hover:bg-blue-200">09:00 AM</h1>
                            <h1 className="bg-blue-100 text-center py-2 text-blue-500 rounded-lg border-2 border-blue-200 cursor-pointer hover:bg-blue-200">09:00 AM</h1>
                            <h1 className="bg-blue-100 text-center py-2 text-blue-500 rounded-lg border-2 border-blue-200 cursor-pointer hover:bg-blue-200">09:00 AM</h1>
                            <h1 className="bg-blue-100 text-center py-2 text-blue-500 rounded-lg border-2 border-blue-200 cursor-pointer hover:bg-blue-200">09:00 AM</h1>
                        </div>
                    </div>
                </div>

                <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                    <h1 className="text-lg font-bold text-blue-500 absolute top-[-15px] bg-white px-3 max-md:text-base max-sm:text-sm max-sm:top-[-10px]">Paso 4: Revisa y Confirma tu Cita</h1>
                    <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-lg shadow-sm border-2 border-gray-300 border-dashed"> 
                        <h1 className="text-lg font-bold text-gray-700">Resumen de tu cita:</h1>
                        <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
                        <p className="text-sm font-bold">Servicio: <span className="font-normal">-</span></p>
                        <p className="text-sm font-bold">Terapeuta: <span className="font-normal">-</span></p>
                        <p className="text-sm font-bold">Fecha: <span className="font-normal">-</span></p>
                        <p className="text-sm font-bold">Hora: <span className="font-normal">-</span></p>
                        <p className="text-sm font-bold">Precio Estimado: <span className="font-normal">-</span></p>
                    </div>
                    <label htmlFor="notes" className="block text-sm text-gray-700 font-bold mt-4">Notas Adicionales (opcional): </label>
                    <textarea id="notes" name="notes" rows="3" className="mt-1 p-2 text-sm block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ej: Alguna preferencia o condición a tener en cuenta..."></textarea>
                </div>

                <button type="submit" className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-500 transition-colors cursor-pointer w-full">
                    Confirmar Cita
                </button>
            </form>
        </section>
    );
}