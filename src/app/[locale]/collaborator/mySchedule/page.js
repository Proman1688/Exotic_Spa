"use client";
import { useTranslations } from "next-intl";
import ModalCancel from "../../components/modals/ModalCancel";
import ModalFeatureUnavailable from "../../components/modals/ModalFeatureUnavailable";
import { useState } from "react";
import Link from "next/link";

export default function home() {
    const t = useTranslations("clientHome");
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalFeatureUnavailable, setShowModalFeatureUnavailable] = useState(false);
    const [selectedAppointmentIndex, setSelectedAppointmentIndex] = useState(null);
    const name = "John Doe"; // This would typically come from user data

    const quickAccess = [
        { title: "Ver calendario Completo", link: "/collaborator/completeSchedule", description: "Consulta tu agenda semanal o mensual", icon: "calendar_month"},
        { title: "Mis Clientes Atendidos", link: "/collaborator/clientsServed", description: "Accede al historial de clientes que has tratado", icon: "contacts" },
        { title: "Mi perfil", link: "/collaborator/myProfile", description: "Consulta tu perfil", icon: "person" },
    ];

    const appointments = [
        {
            descripcion: "Masaje terapéutico para aliviar tensiones musculares",
            nombreServicio: "Masaje",
            duracion: "1",
            recordatorio: "1 hora antes",
            estado: "Programada",
            fecha: "2025-06-10 09:00:00",
            nombreCliente: "Ana Torres",
            nombreTerapista: "Laura García",
            precio: "$55"
        },
        {
            descripcion: "Tratamiento facial hidratante profundo",
            nombreServicio: "Tratamiento Facial",
            duracion: "0.45",
            recordatorio: "30 minutos antes",
            estado: "Programada",
            fecha: "2025-06-01 15:30:00",
            nombreCliente: "Carlos Mendoza",
            nombreTerapista: "Jane Smith",
            precio: "$65"
        },
        {
            descripcion: "Sesión de exfoliación corporal completa",
            nombreServicio: "Tratamiento Corporal",
            duracion: "1.15",
            recordatorio: "1 día antes",
            estado: "Programada",
            fecha: "2025-05-28 11:00:00",
            nombreCliente: "Verónica López",
            nombreTerapista: "Emily Johnson",
            precio: "$70"
        }
    ];

    return (
        <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
            <h1 className="text-4xl font-bold flex items-center mb-3 text-center max-md:text-2xl max-md:flex-col"><span className="material-symbols-outlined !text-5xl mr-2 max-sm:!text-3xl icon-filled">manage_accounts</span>Mi Agenda y Tareas</h1>
            <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Bienvenido/a. Aqui tienes un resumen de tu jornada</p>
            
            {/* ////////////////////// */}
            {/* Citas Para hoy */}
            {/* ////////////////////// */}
            <div className="border border-gray-100 p-5 shadow-lg rounded w-full mb-10">
                <h3 className="text-2xl font-bold inline-flex items-center text-start w-full mb-1 max-md:text-lg max-sm:text-center max-md:flex-col"><span className="material-symbols-outlined !text-4xl mr-2 max-sm:!text-3xl icon-filled">today</span>Citas para Hoy - Martes, 13 de Mayo, 2025</h3>
                <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
                <div className="w-full mt-5 mb-10">
                    { appointments.length > 0 ? (
                        <ul className="list-disc pl-5 w-full">
                            {appointments.map((appointment, index) => (
                                <li key={index} className="mb-2 bg-gray-100 text-black p-3 rounded-lg flex items-center justify-between border-l-4 border-l-blue-500 hover:bg-blue-50 transition-colors shadow-xl max-sm:flex-col max-sm:gap-2">
                                    {/* Hora Inicio y Final */}
                                    <div
                                        key={index}
                                        className="flex flex-col items-center mr-4 bg-blue-500 text-white p-2 rounded-lg w-16"
                                    >
                                        {(() => {
                                        const start = new Date(appointment.fecha);
                                        const duracion = parseFloat(appointment.duracion);
                                        const end = new Date(start.getTime() + duracion * 60 * 60 * 1000);

                                        const format = (date) =>
                                            date.toLocaleTimeString("es-ES", {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: false,
                                            });

                                        return (
                                            <>
                                            <p className="font-semibold text-[10px]">{format(start)}</p>
                                            <p className="font-semibold text-[10px]">-</p>
                                            <p className="font-semibold text-[10px]">{format(end)}</p>
                                            </>
                                        );
                                        })()}
                                    </div>
                                    
                                    {/* Detalles de la cita */}
                                    <div className="flex-1 flex flex-col items-start gap-1">
                                        <p className="text-lg font-bold max-sm:text-center">{appointment.nombreServicio}</p>
                                        <p className="text-xs flex items-center gap-1 max-sm:w-full max-sm:justify-center max-sm:text-center"> Cliente: {appointment.nombreCliente}</p>
                                        <p className="text-xs flex items-center gap-1 max-sm:w-full max-sm:justify-center max-sm:text-center">Notas: {appointment.descripcion}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button
                                            onClick={() => {
                                                setShowModalCancel(true);
                                                setSelectedAppointmentIndex(index);
                                            }}
                                            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition-colors cursor-pointer flex items-center text-sm">
                                            <span className="material-symbols-outlined !text-lg mr-2 icon-filled">close</span>
                                            Cancelar</button>
                                        <button
                                            onClick={() => {
                                                setShowModalFeatureUnavailable(true);
                                            }}
                                            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition-colors cursor-pointer flex items-center text-sm">
                                            <span className="material-symbols-outlined !text-lg mr-2 icon-filled">note_stack_add</span>
                                            Añadir Notas</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>{t('noAppointments')}</p>
                    )}
                </div>
            </div>
            
            {/* ////////////////////// */}
            {/* Accesos Rápidos */}
            {/* ////////////////////// */}
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

            {/* ////////////////////// */}
            {/* Modales */}
            {/* ////////////////////// */}
            {showModalCancel && (
                <ModalCancel 
                    onClose={() => setShowModalCancel(false)} 
                    onConfirm={() => {
                        alert(`Cita para ${appointments[selectedAppointmentIndex].nombreServicio} cancelada.`);
                        setShowModalCancel(false);
                    }} 
                />
            )}

            {showModalFeatureUnavailable && (
                <ModalFeatureUnavailable
                    onClose={() => setShowModalFeatureUnavailable(false)}
                />
            )}
        </section>
    );
}