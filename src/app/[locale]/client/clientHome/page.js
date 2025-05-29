export default function home() {

    const quickAccess = [
        { title: "agendar Cita", link: "/contact", description: "Get in touch with us" },
        { title: "Mis citas", link: "/about", description: "Learn more about our company" },
        { title: "Mi perfil", link: "/services", description: "Explore our services" },
        { title: "nuestros servicios", link: "/blog", description: "Read our latest articles" },
        { title: "Membresias", link: "/faq", description: "Frequently Asked Questions" },
        { title: "Condiciones Medicas", link: "/testimonials", description: "See what our customers say" }
    ];

    const appointments = [
        { date: "2023-10-01", startTime: "10:00 AM", endTime: "11:00 AM", service: "Massage", therapist: "John Doe" },
        { date: "2023-10-02", startTime: "02:00 PM", endTime: "03:00 PM", service: "Facial Treatment", therapist: "Jane Smith" },
        { date: "2023-10-03", startTime: "01:00 PM", endTime: "02:00 PM", service: "Body Treatment", therapist: "Emily Johnson" }
    ];

    return (
        <section className="relative flex flex-col items-center justify-center text-white p-10 rounded-2xl mb-10 max-[375px]:p-0">
            <h1 className="text-5xl font-bold flex items-center mb-3 text-center max-sm:text-3xl max-sm:flex-col">Home Page</h1>
            <p className="text-base mb-10 max-sm:text-xs text-center">This is the home page content.</p>
            <h3>accesos rápidos</h3>
            <div className="grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1">
                {quickAccess.map((item, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer flex flex-col items-start">
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
            <h1>Tus próximas Citas</h1>
            <div className="w-full max-w-2xl mt-5">
                { appointments.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {appointments.map((appointment, index) => (
                            <li key={index} className="mb-2 bg-white text-black p-3 rounded-lg flex items-center justify-between">
                                <p className="font-semibold">{appointment.date}</p>
                                <p>{appointment.startTime} to {appointment.endTime} - {appointment.service} with {appointment.therapist}</p>
                                <button className="ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors">View Details</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No tienes citas programadas.</p>
                )}
            </div>
        </section>
    );
}