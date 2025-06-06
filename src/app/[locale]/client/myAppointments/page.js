"use client";
import ModalCancel from "@/app/[locale]/components/modals/ModalCancel";
import ModalModifierHour from "@/app/[locale]/components/modals/ModalModifierHour";
import { useState } from "react";
import { set } from "zod";

export default function MyAppointmentsPage() {
    const appointments = [
    {
        descripcion: "Masaje terapéutico para aliviar tensiones musculares",
        nombreServicio: "Masaje",
        duracion: "1 hora",
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
        duracion: "45 minutos",
        recordatorio: "30 minutos antes",
        estado: "Terminada",
        fecha: "2025-06-01 15:30:00",
        nombreCliente: "Carlos Mendoza",
        nombreTerapista: "Jane Smith",
        precio: "$65"
    },
    {
        descripcion: "Sesión de exfoliación corporal completa",
        nombreServicio: "Tratamiento Corporal",
        duracion: "1 hora 15 minutos",
        recordatorio: "1 día antes",
        estado: "Cancelada",
        fecha: "2025-05-28 11:00:00",
        nombreCliente: "Verónica López",
        nombreTerapista: "Emily Johnson",
        precio: "$70"
    },
    {
        descripcion: "Masaje deportivo para recuperación muscular",
        nombreServicio: "Masaje Deportivo",
        duracion: "1 hora",
        recordatorio: "2 horas antes",
        estado: "Programada",
        fecha: "2025-06-12 17:00:00",
        nombreCliente: "David Ruiz",
        nombreTerapista: "John Doe",
        precio: "$60"
    },
    {
        descripcion: "Tratamiento facial antiacné para piel grasa",
        nombreServicio: "Tratamiento Facial",
        duracion: "1 hora",
        recordatorio: "1 hora antes",
        estado: "Terminada",
        fecha: "2025-05-30 13:00:00",
        nombreCliente: "Lucía Herrera",
        nombreTerapista: "Carla Méndez",
        precio: "$68"
    },
    {
        descripcion: "Sesión de drenaje linfático",
        nombreServicio: "Terapia Linfática",
        duracion: "1 hora 30 minutos",
        recordatorio: "1 día antes",
        estado: "Programada",
        fecha: "2025-06-15 10:30:00",
        nombreCliente: "Francisco Morales",
        nombreTerapista: "Patricia Soto",
        precio: "$80"
    },
    {
        descripcion: "Masaje relajante con aromaterapia",
        nombreServicio: "Masaje Aromático",
        duracion: "1 hora",
        recordatorio: "1 hora antes",
        estado: "Cancelada",
        fecha: "2025-06-02 14:00:00",
        nombreCliente: "María José Paredes",
        nombreTerapista: "Laura García",
        precio: "$58"
    },
    {
        descripcion: "Tratamiento corporal reafirmante",
        nombreServicio: "Tratamiento Corporal",
        duracion: "1 hora",
        recordatorio: "30 minutos antes",
        estado: "Terminada",
        fecha: "2025-06-03 11:00:00",
        nombreCliente: "Iván Castillo",
        nombreTerapista: "Emily Johnson",
        precio: "$72"
    },
    {
        descripcion: "Masaje de tejido profundo para contracturas",
        nombreServicio: "Masaje Profundo",
        duracion: "1 hora",
        recordatorio: "2 horas antes",
        estado: "Programada",
        fecha: "2025-06-14 16:00:00",
        nombreCliente: "Gabriela Salas",
        nombreTerapista: "John Doe",
        precio: "$65"
    },
    {
        descripcion: "Facial antiarrugas con colágeno",
        nombreServicio: "Tratamiento Facial",
        duracion: "1 hora",
        recordatorio: "1 día antes",
        estado: "Terminada",
        fecha: "2025-05-29 12:00:00",
        nombreCliente: "Raúl Gutiérrez",
        nombreTerapista: "Jane Smith",
        precio: "$75"
    }
    ];



    const [showModal, setShowModal] = useState(false); 
    const [showModalModifier, setShowModalModifier] = useState(false);
    const [newHour, setNewHour] = useState(null);
    const [selectedAppointment, setSelectedAppointment] = useState("Programada");
    const [selectedAppointmentIndex, setSelectedAppointmentIndex] = useState(null);


    return (
        <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
            <h1 className="text-4xl font-bold flex items-center text-center justify-center w-full mb-3 gap-2 max-sm:text-2xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">calendar_month</span> Mis Citas</h1>
            <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Aquí puedes ver tus próximas citas.</p>
            <div className="w-full flex items-center justify-center gap-3 mb-5 max-sm:flex-col max-sm:items-center">
                <button 
                    onClick={() => setSelectedAppointment("Programada")} 
                    className={`px-5 py-2 rounded-2xl hover:bg-blue-500 hover:text-white transition-colors cursor-pointer ${selectedAppointment == "Programada" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`}>Proxima</button>
                <button 
                    onClick={() => setSelectedAppointment("Pasada")}
                    className={`px-5 py-2 rounded-2xl hover:bg-blue-500 hover:text-white transition-colors cursor-pointer ${selectedAppointment == "Pasada" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`}>Pasada</button>
                <button
                    onClick={() => setSelectedAppointment("Todas")}
                    className={`px-5 py-2 rounded-2xl hover:bg-blue-500 hover:text-white transition-colors cursor-pointer ${selectedAppointment == "Todas" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`}>Todas</button>
            </div>
            <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
            <div className="w-full mt-5">
                { appointments.length > 0 ? (
                    <ul className="list-disc w-full flex flex-col gap-6"> 
                        {appointments.map((appointment, index) => (
                            appointment.estado === selectedAppointment || (selectedAppointment === "Pasada" && appointment.estado !== "Programada") || (selectedAppointment == "Todas") ? (
                                <li key={index} className="mb-2 bg-white text-black rounded-lg flex flex-col items-center justify-between transition-colors shadow-xl max-sm:flex-col max-sm:gap-2">
                                    <div className="flex items-center justify-between w-full px-5 py-4 bg-gray-100 rounded-t-lg border-b-2 border-gray-300">
                                        <h1 className="font-bold text-xl">{appointment.nombreServicio}</h1>
                                        <h1>{appointment.estado}</h1>
                                    </div>
                                    <div className="flex flex-col justify-between gap-2 w-full px-5 py-10">
                                        <h1 className="flex items-center gap-2 text-sm text-gray-700 max-sm:text-xs">
                                            <span className="material-symbols-outlined icon-filled !text-lg text-center text-gray-500">calendar_month</span>
                                            <span className="font-bold">Fecha: </span> {new Date(appointment.fecha).toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" })}
                                        </h1>
                                        <h1 className="flex items-center gap-2 text-sm text-gray-700 max-sm:text-xs">
                                            <span className="material-symbols-outlined icon-filled !text-lg text-center text-gray-500">schedule</span>
                                            <span className="font-bold">Hora: </span> {new Date(appointment.fecha).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                                        </h1>
                                        <h1 className="flex items-center gap-2 text-sm text-gray-700 max-sm:text-xs">
                                            <span className="material-symbols-outlined icon-filled !text-lg text-center text-gray-500">supervisor_account</span>
                                            <span className="font-bold">Terapeuta: </span> {appointment.nombreTerapista}
                                        </h1>
                                        <h1 className="flex items-center gap-2 text-sm text-gray-700 max-sm:text-xs">
                                            <span className="material-symbols-outlined icon-filled !text-lg text-center text-gray-500">attach_money</span>
                                            <span className="font-bold">Price: </span> {appointment.precio}
                                        </h1>
                                    </div>
                                    {appointment.estado === "Programada" && (
                                        <div 
                                            className="flex items-center justify-end w-full px-5 py-4 gap-4 bg-gray-100 rounded-b-lg border-t-2 border-gray-300 max-sm:flex-col max-sm:items-center max-sm:gap-2 m">
                                            
                                            <button 
                                            onClick={() => {setShowModalModifier(true), setSelectedAppointmentIndex(index)}}
                                            className="bg-yellow-500 text-black text-base px-3 py-2 rounded hover:bg-yellow-600 transition-colors cursor-pointer flex text-center items-center gap-2 max-sm:text-xs">
                                                <span className="material-symbols-outlined icon-filled !text-lg text-center max-sm:!text-sm">edit_square</span>
                                                Modificar
                                                </button>
                                            <button 
                                            onClick={() => {setShowModal(true), setSelectedAppointmentIndex(index)}}
                                            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors cursor-pointer flex text-center items-center gap-1 text-base max-sm:text-xs">
                                                <span className="material-symbols-outlined icon-filled !text-sm text-center max-sm:!text-sm bg-white !text-red-600 rounded-2xl px-1 py-[0.5px] flex items-center justify-center">close</span>
                                                Cancelar
                                            </button>
                                        </div>
                                    )}
                                    {showModal && (
                                        <ModalCancel 
                                            onClose={() => setShowModal(false)} 
                                            onConfirm={() => {
                                                alert(`Cita para ${appointments[selectedAppointmentIndex].nombreServicio} cancelada.`);
                                                setShowModal(false);
                                            }} 
                                        />
                                    )}
                                    {showModalModifier && (
                                        <ModalModifierHour 
                                            onClose={() => setShowModalModifier(false)} 
                                            onConfirm={() => {
                                                alert(`Cita para ${appointments[selectedAppointmentIndex].nombreServicio} modificada a la hora ${newHour}.`);
                                                setShowModalModifier(false);
                                            }} 
                                            setHour={setNewHour}
                                        />
                                    )}
                                </li>
                            ) : null
                        ))}
                    </ul>
                ) : (
                    <p>nonas no hay nada</p>
                )}
            </div>
        </section>
    );
}