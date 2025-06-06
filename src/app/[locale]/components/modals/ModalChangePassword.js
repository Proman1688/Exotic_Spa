export default function ModalChangePassword({ onClose, onSave , setCurrentPassword, setNewPassword, setConfirmPassword }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Cambiar Contraseña</h2>
            <form onSubmit={onSave}>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Contraseña Actual</label>
                <input
                type="password"
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Nueva Contraseña</label>
                <input
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Confirmar Nueva Contraseña</label>
                <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex justify-end gap-3">
                <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                Cancelar
                </button>
                <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                Cambiar Contraseña
                </button>
            </div>
            </form>
        </div>
        </div>
    );
}