export default function ContactPage() {
    return (
        <section className="relative flex flex-col items-center justify-center text-white p-10 rounded-2xl mb-10 max-[375px]:p-0">
            <h1 className="text-5xl font-bold flex items-center mb-3 text-center max-sm:text-3xl max-sm:flex-col">Contacto</h1>
            <p className="text-base mb-10 max-sm:text-xs text-center">Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
            <h3>Información de Contacto</h3>
            <div className="w-full max-w-2xl mt-5">
                <p className="mb-2">Email: <a href="mailto:" /> </p>
                <p className="mb-2">Teléfono: <a href="tel:" /></p>
            </div>
            <h3>Formulario de Contacto</h3>
            <form className="w-full max-w-2xl mt-5">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded" required></textarea>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Enviar</button>
            </form>
        </section>
    );
}