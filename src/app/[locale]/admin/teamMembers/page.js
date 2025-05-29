export default function TeamMembersPage(){
    return (
        <section className="relative flex flex-col items-center justify-center text-white p-10 rounded-2xl mb-10 max-[375px]:p-0">
            <h1 className="text-5xl font-bold flex items-center mb-3 text-center max-sm:text-3xl max-sm:flex-col">Gestión de Miembros del Equipo</h1>
            <p className="text-base mb-10 max-sm:text-xs text-center">Aquí puedes gestionar los miembros del equipo.</p>
            <h3>accesos rápidos</h3>
            <div className="grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1">
                {/* Quick access items can be added here */}
            </div>
            <h1>Miembros del Equipo Registrados</h1>
            <div className="w-full max-w-2xl mt-5">
                <p>No hay miembros del equipo registrados.</p>
            </div>
        </section>
    );
}