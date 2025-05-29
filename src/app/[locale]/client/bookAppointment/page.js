export default function BookAppointmentPage() {
    return (
        <section className="relative flex flex-col items-center justify-center text-white p-10 rounded-2xl mb-10 max-[375px]:p-0">
            <h1 className="text-5xl font-bold flex items-center mb-3 text-center max-sm:text-3xl max-sm:flex-col">Agendar Cita</h1>
            <p className="text-base mb-10 max-sm:text-xs text-center">Aquí puedes agendar una cita.</p>
            <h3>accesos rápidos</h3>
            <div className="grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1">
                {/* Quick access items can be added here */}
            </div>
            <h1>Tus próximas Citas</h1>
            <div className="w-full max-w-2xl mt-5">
                <p>No tienes citas programadas.</p>
            </div>
        </section>
    );
}