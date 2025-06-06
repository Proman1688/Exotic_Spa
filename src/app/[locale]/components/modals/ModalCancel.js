"use client";
export default function ModalCancel({ onClose, onConfirm }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
                <h2 className="text-xl font-bold mb-4">Cancelar Cita</h2>
                <p className="mb-4">¿Estás seguro de que deseas cancelar esta cita?</p>
                <div className="flex justify-end gap-3">
                    <button 
                        onClick={onClose} 
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={onConfirm} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}