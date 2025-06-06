"use client";
import { useState } from "react";
import { set } from "zod";

export default function ModalModifierHour({ onClose, onConfirm , setHour }) {
    const [horaSeleccionada, setHoraSeleccionada] = useState(null);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
                <h2 className="text-xl font-bold mb-4">Modificar Hora</h2>
                <div className="grid grid-cols-4 gap-2 mt-2 max-lg:grid-cols-3 my-8">
                           {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map((hora) => (
                            <div
                            key={hora}
                            onClick={() =>  {setHoraSeleccionada(hora), setHour(hora)}}
                            className={`text-center py-2 rounded-lg border-2 cursor-pointer ${
                                horaSeleccionada === hora
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'bg-blue-100 text-blue-500 border-blue-200 hover:bg-blue-200'
                            }`}
                            >
                            {hora}
                            </div>
                        ))}
                        </div>
                <div className="flex justify-end gap-3">
                    <button 
                        onClick={onClose} 
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={() => {
                            onConfirm(horaSeleccionada);
                            onClose();} 
                        }
                            disabled={!horaSeleccionada}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}