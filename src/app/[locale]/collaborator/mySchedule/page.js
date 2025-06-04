"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function home() {
    const t = useTranslations("clientHome");
    const name = "John Doe"; // This would typically come from user data

    const quickAccess = [
        { title: "Ver calendario Completo", link: "/collaborator/completeSchedule", description: "Consulta tu agenda semanal o mensual", icon: "calendar_month"},
        { title: "Mis Clientes Atendidos", link: "/collaborator/clientsServed", description: "Accede al historial de clientes que has tratado", icon: "contacts" },
        { title: "Mi perfil", link: "/collaborator/myProfile", description: "Consulta tu perfil", icon: "person" },
    ];

    const appointments = [
        { day: "01", month: "MAY", year: "2023", startTime: "10:00 AM", endTime: "11:00 AM", service: "Massage", client: "John Doe", notes: "Cliente prefiere música suave, reportó tensión en hombros" },
        { day: "08", month: "JUNE", year: "2023", startTime: "02:00 PM", endTime: "03:00 PM", service: "Facial Treatment", client: "Jane Smith", notes: "Cliente prefiere música suave, reportó tensión en hombros" },
        { day: "20", month: "AUGUST", year: "2023", startTime: "01:00 PM", endTime: "02:00 PM", service: "Body Treatment", client: "Emily Johnson", notes: "Cliente prefiere música suave, reportó tensión en hombros" }
    ];

    return (
        <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
            <h1 className="text-4xl font-bold flex items-center mb-3 text-center max-md:text-2xl max-md:flex-col"><span className="material-symbols-outlined !text-5xl mr-2 max-sm:!text-3xl icon-filled">manage_accounts</span>Mi Agenda y Tareas</h1>
            <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Bienvenido/a [Nombre del Colaborador]. Aqui tienes un resumen de tu jornada</p>
            
            <div className="border border-gray-100 p-5 shadow-lg rounded w-full mb-10">
                <h3 className="text-2xl font-bold inline-flex items-center text-start w-full mb-1 max-md:text-lg max-sm:text-center max-md:flex-col"><span className="material-symbols-outlined !text-4xl mr-2 max-sm:!text-3xl icon-filled">today</span>Citas para Hoy - Martes, 13 de Mayo, 2025</h3>
                <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
                <div className="w-full mt-5 mb-10">
                    { appointments.length > 0 ? (
                        <ul className="list-disc pl-5 w-full">
                            {appointments.map((appointment, index) => (
                                <li key={index} className="mb-2 bg-gray-100 text-black p-3 rounded-lg flex items-center justify-between border-l-4 border-l-blue-500 hover:bg-blue-50 transition-colors shadow-xl max-sm:flex-col max-sm:gap-2">
                                    <div className="flex flex-col items-center mr-4 bg-blue-500 text-white p-2 rounded-lg w-16">
                                        <p className="font-semibold text-[10px]">{appointment.startTime}</p>
                                        <p className="font-semibold text-[10px]">-</p>
                                        <p className="font-semibold text-[10px]">{appointment.endTime}</p>
                                    </div>
                                    <div className="flex-1 flex flex-col items-start gap-1">
                                        <p className="text-lg font-bold max-sm:text-center">{appointment.service}</p>
                                        <p className="text-xs flex items-center gap-1 max-sm:w-full max-sm:justify-center max-sm:text-center"> Cliente: {appointment.client}</p>
                                        <p className="text-xs flex items-center gap-1 max-sm:w-full max-sm:justify-center max-sm:text-center">Notas: {appointment.notes}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition-colors cursor-pointer flex items-center text-sm"><span className="material-symbols-outlined !text-lg mr-2 icon-filled">person</span>Ver Cliente</button>
                                        <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition-colors cursor-pointer flex items-center text-sm"><span className="material-symbols-outlined !text-lg mr-2 icon-filled">note_stack_add</span>Añadir Notas</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>{t('noAppointments')}</p>
                    )}
                </div>
            </div>
            
            <div className="border border-gray-100 p-5 shadow-lg rounded">
                <h3 className="text-2xl font-bold inline-block text-start w-full mb-1 max-md:text-lg max-sm:text-center">{t('quickActions')}</h3>
                <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
                <div className="grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1 mb-10 max-md:grid-cols-2">
                    {quickAccess.map((item, index) => (
                        <Link href={item.link} key={index} className="bg-white shadow-2xl p-4 rounded-lg hover:bg-black/10 transition-colors cursor-pointer flex flex-col items-start">
                            <span className="material-symbols-outlined icon-filled !text-4xl block w-full text-center mb-4 text-blue-500">{item.icon}</span>
                            <h4 className="text-base font-bold text-center w-full mb-1">{item.title}</h4>
                            <p className="text-xs text-center w-full">{item.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}