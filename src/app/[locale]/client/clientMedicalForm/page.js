"use client";
import ChatFlotante from '../../chatbot/ChatFlotante/page';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function home() {
    const [embarazo, setEmbarazo] = useState(null);
    const [lactancia, setLactancia] = useState(null);

    return (
        <>
            <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
                <h1 className="text-4xl font-bold flex items-center text-center justify-center w-full mb-3 gap-2 max-sm:text-2xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">note_add</span> Formulario de Condiciones Médicas</h1>
                <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Por favor, completa la siguiente información para asegurar que nuestros tratamientos sean seguros y efectivos para ti. Esta información es confidencial</p>
                <form className="w-full flex flex-col items-center gap-4">

                    <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                        <h1 className="text-xl font-bold text-blue-500 absolute top-[-15px] bg-white px-3 max-md:text-base max-sm:text-sm max-sm:top-[-10px] flex gap-1 items-center text-center"><span className="material-symbols-outlined icon-filled !text-3xl text-center text-blue-500">eda</span> Alergias</h1>
                        <label htmlFor="alergia" className="block text-sm text-gray-700 font-bold mb-2">¿Tienes alguna alergia conocida (medicamentos, alimentos, productos, etc..)?</label>
                        <textarea id="alergia" name="alergia" rows="4" className="text-sm mt-1 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Escribe aquí tus alergias..."></textarea>
                    </div>

                    <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                        <h1 className="text-xl font-bold text-blue-500 absolute top-[-15px] bg-white px-3 max-md:text-base max-sm:text-sm max-sm:top-[-10px] flex gap-1 items-center text-center"><span className="material-symbols-outlined icon-filled !text-3xl text-center text-blue-500">pill</span> Medicamentos Actuales</h1>
                        <label htmlFor="medicamentos" className="block text-sm text-gray-700 font-bold mb-2">¿Estás tomando algún medicamento actualmente (con o sin receta)?</label>
                        <textarea id="medicamentos" name="medicamentos" rows="4" className="text-sm mt-1 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Escribe aquí tus alergias..."></textarea>
                    </div>

                    <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                        <h1 className="text-xl font-bold text-blue-500 absolute top-[-15px] bg-white px-3 max-md:text-base max-sm:text-sm max-sm:top-[-10px] flex gap-1 items-center text-center"><span className="material-symbols-outlined icon-filled !text-3xl text-center text-blue-500">note_add</span> Condiciones Médicas Preexistentes</h1>
                        <label htmlFor="medicamentos" className="block text-sm text-gray-700 font-bold mb-2">Por favor, marca Cualquier condición que tengas:</label>

                        <input type="checkbox" id="diabetes" name="diabetes" className="mt-2 mr-2" />
                        <label htmlFor="diabetes" className="text-sm text-gray-700">Diabetes</label><br />

                        <input type="checkbox" id="hipertension" name="hipertension" className="mt-2 mr-2" />
                        <label htmlFor="hipertension" className="text-sm text-gray-700">Hipertensión</label><br />

                        <input type="checkbox" id="hipotensión" name="hipotensión" className="mt-2 mr-2" />
                        <label htmlFor="hipotensión" className="text-sm text-gray-700">Hipotensión</label><br />

                        <input type="checkbox" id="problemas_Cardiacos" name="problemas_Cardiacos" className="mt-2 mr-2" />
                        <label htmlFor="problemas_Cardiacos" className="text-sm text-gray-700">Problemas Cardiacos</label><br />

                        <input type="checkbox" id="problemas_respiratorios" name="problemas_respiratorios" className="mt-2 mr-2" />
                        <label htmlFor="problemas_respiratorios" className="text-sm text-gray-700">Problemas Respiratorios</label><br />

                        <input type="checkbox" id="problemas_circulatorios" name="problemas_circulatorios" className="mt-2 mr-2" />
                        <label htmlFor="problemas_circulatorios" className="text-sm text-gray-700">Problemas Circulatorios</label><br />

                        <input type="checkbox" id="problemas_piel" name="problemas_piel" className="mt-2 mr-2" />
                        <label htmlFor="problemas_piel" className="text-sm text-gray-700">Problemas de piel</label><br />

                        <input type="checkbox" id="epilepsia" name="epilepsia" className="mt-2 mr-2" />
                        <label htmlFor="epilepsia" className="text-sm text-gray-700">Epilepsia o convulsiones</label><br />

                        <input type="checkbox" id="lesiones" name="lesiones" className="mt-2 mr-2" />
                        <label htmlFor="lesiones" className="text-sm text-gray-700">Lesiones recientes o cirugías (últimos 6 meses)</label><br />

                        <label htmlFor="otras_condiciones" className="block text-sm text-gray-700 font-bold mt-4">Otras condiciones médicas:</label>
                        <textarea id="otras_condiciones" name="otras_condiciones" rows="4" className="text-sm mt-2 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Otras condiciones médicas que consideres importantes..."></textarea>
                    </div>

                    <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                        <h1 className="text-xl font-bold text-blue-500 absolute top-[-15px] bg-white px-3 max-md:text-base max-sm:text-sm max-sm:top-[-10px] flex gap-1 items-center text-center">
                            <span className="material-symbols-outlined icon-filled !text-3xl text-center text-blue-500">
                            pill
                            </span>{" "}
                            Información Adicional (si aplica)
                        </h1>

                        <label className="block text-sm text-gray-700 font-bold mb-2">
                            ¿Estás embarazada o crees que podrías estarlo?
                        </label>

                        <div className="flex items-center mb-2">
                            <input
                            type="checkbox"
                            id="embarazo"
                            name="embarazo"
                            checked={embarazo === true}
                            onChange={() => setEmbarazo(true)}
                            className="rounded accent-blue-500 mr-2"
                            />
                            <label htmlFor="embarazo" className="text-sm text-gray-700">
                            Sí
                            </label>
                        </div>

                        <div className="flex items-center mb-5">
                            <input
                            type="checkbox"
                            id="no_embarazo"
                            name="no_embarazo"
                            checked={embarazo === false}
                            onChange={() => setEmbarazo(false)}
                            className="rounded accent-blue-500 mr-2"
                            />
                            <label htmlFor="no_embarazo" className="text-sm text-gray-700">
                            No
                            </label>
                        </div>

                        <label className="block text-sm text-gray-700 font-bold mb-2">
                            ¿Estás en periodo de lactancia?
                        </label>

                        <div className="flex items-center mb-2">
                            <input
                            type="checkbox"
                            id="lactancia"
                            name="lactancia"
                            checked={lactancia === true}
                            onChange={() => setLactancia(true)}
                            className="rounded accent-blue-500 mr-2"
                            />
                            <label htmlFor="embarazo" className="text-sm text-gray-700">
                            Sí
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                            type="checkbox"
                            id="no_lactancia"
                            name="no_lactancia"
                            checked={lactancia === false}
                            onChange={() => setLactancia(false)}
                            className="rounded accent-blue-500 mr-2"
                            />
                            <label htmlFor="no_embarazo" className="text-sm text-gray-700">
                            No
                            </label>
                        </div>
                        
                    </div>

                    <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                        <h1 className="text-xl font-bold text-blue-500 absolute top-[-15px] bg-white px-3 max-md:text-base max-sm:text-sm max-sm:top-[-10px] flex gap-1 items-center text-center"><span className="material-symbols-outlined icon-filled !text-3xl text-center text-blue-500">person_shield</span> Contacto de emergencia</h1>
                        <div className="flex gap-4 items-center justify-between max-md:flex-col max-md:gap-2">
                            <label htmlFor="nombre_emergencia" className="block text-sm text-gray-700 font-bold">Nombre:</label>
                            <input type="text" id="nombre_emergencia" name="nombre_emergencia" className="text-sm p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Nombre de contacto de emergencia" />
                            <label htmlFor="telefono_emergencia" className="block text-sm text-gray-700 font-bold">Teléfono:</label>
                            <input type="tel" id="telefono_emergencia" name="telefono_emergencia" className="text-sm p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Teléfono de contacto de emergencia" />
                        </div>
                    </div>

                    <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                        <h1 className="text-xl font-bold text-blue-500 absolute top-[-15px] bg-white px-3 max-md:text-base max-sm:text-sm max-sm:top-[-10px] flex gap-1 items-center text-center"><span className="material-symbols-outlined icon-filled !text-3xl text-center text-blue-500">signature</span> Consentimiento</h1>
                        <input type="checkbox" id="consentimiento" name="consentimiento" className="mt-2 mr-2" />
                        <label htmlFor="consentimiento" className="text-sm text-gray-700">
                            He leído y acepto los términos y condiciones del tratamiento, y confirmo que la información proporcionada es veraz y completa.
                        </label>
                    </div>

                    <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5 flex items-center justify-center gap-4 max-md:flex-col max-md:gap-2">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center gap-2 max-md:w-full">
                            <span className="material-symbols-outlined icon-filled !text-2xl text-center">save</span>
                            Guardar Información Médica
                        </button>
                        <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition-colors max-md:w-full">
                            Cancelar
                        </button>
                    </div>
                </form>
            </section>
            <ChatFlotante />
        </>
    );
}