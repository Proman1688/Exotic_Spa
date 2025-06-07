"use client";
import ModalCancel from "@/app/[locale]/components/modals/ModalCancel";
import ModalModifierHour from "@/app/[locale]/components/modals/ModalModifierHour";
import { useState } from "react";
import ChatFlotante from '../../chatbot/ChatFlotante/page';
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function MyAppointmentsPage() {
    const [appointments, setAppointments] = useState([]);
    const { data: session } = useSession();
    const [idAppointment, setIdAppointment] = useState(null);


    useEffect(() => {
        if (session?.user?.id) {
            fetch(`/api/auth/citas-cliente?idUsuario=${session.user.id}`)
                .then(res => res.json())
                .then(data => setAppointments(data.citas || []));
        }
    }, [session]);

    const cambiarHoraCita = async () => {
        const res = await fetch('/api/auth/citas-cliente', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            idCita: idAppointment,             // ID de la cita a modificar
            idUsuario: session.user.id,          // ID del cliente (usuario autenticado)
            nuevaHora: newHour       // Nueva hora (formato HH:mm)
            })
        });

        const data = await res.json();
        console.log('Cita actualizada:', data.cita);
    };

    const cancelarCita = async () => {
        await fetch('/api/auth/cancelar', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                idCita: idAppointment,
            }) 
        });
        console.log('Cita cancelada');
    }


    const [showModal, setShowModal] = useState(false); 
    const [showModalModifier, setShowModalModifier] = useState(false);
    const [newHour, setNewHour] = useState(null);
    const [selectedAppointment, setSelectedAppointment] = useState("Pendiente");


    return (
        <>
            <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
                <h1 className="text-4xl font-bold flex items-center text-center justify-center w-full mb-3 gap-2 max-sm:text-2xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">calendar_month</span> Mis Citas</h1>
                <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Aquí puedes ver tus próximas citas.</p>
                <div className="w-full flex items-center justify-center gap-3 mb-5 max-sm:flex-col max-sm:items-center">
                    <button 
                        onClick={() => setSelectedAppointment("Pendiente")} 
                        className={`px-5 py-2 rounded-2xl hover:bg-blue-500 hover:text-white transition-colors cursor-pointer ${selectedAppointment == "Pendiente" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`}>Proxima</button>
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
                                appointment.Estado === selectedAppointment || (selectedAppointment === "Pasada" && appointment.Estado !== "Pendiente") || (selectedAppointment == "Todas") ? (
                                    <li key={index} className="mb-2 bg-white text-black rounded-lg flex flex-col items-center justify-between transition-colors shadow-xl max-sm:flex-col max-sm:gap-2">
                                        <div className="flex items-center justify-between w-full px-5 py-4 bg-gray-100 rounded-t-lg border-b-2 border-gray-300">
                                            <h1 className="font-bold text-xl">{appointment.Descripcion}</h1>
                                            <h1>{appointment.Estado}</h1>
                                        </div>
                                        <div className="flex flex-col justify-between gap-2 w-full px-5 py-10">
                                            <h1 className="flex items-center gap-2 text-sm text-gray-700 max-sm:text-xs">
                                                <span className="material-symbols-outlined icon-filled !text-lg text-center text-gray-500">calendar_month</span>
                                                <span className="font-bold">Fecha: </span> {new Date(appointment.Fecha).toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" })}
                                            </h1>
                                            <h1 className="flex items-center gap-2 text-sm text-gray-700 max-sm:text-xs">
                                                <span className="material-symbols-outlined icon-filled !text-lg text-center text-gray-500">schedule</span>
                                                <span className="font-bold">Hora: </span> {appointment.Hora ? appointment.Hora : "No especificada"}
                                            </h1>
                                            <h1 className="flex items-center gap-2 text-sm text-gray-700 max-sm:text-xs">
                                                <span className="material-symbols-outlined icon-filled !text-lg text-center text-gray-500">supervisor_account</span>
                                                <span className="font-bold">Terapeuta: </span> {appointment.NombreTerapeuta}
                                            </h1>
                                        </div>
                                        {appointment.Estado === "Pendiente" && (
                                            <div 
                                                className="flex items-center justify-end w-full px-5 py-4 gap-4 bg-gray-100 rounded-b-lg border-t-2 border-gray-300 max-sm:flex-col max-sm:items-center max-sm:gap-2 m">
                                                
                                                <button 
                                                onClick={() => {setShowModalModifier(true), setIdAppointment(appointment.id)}}
                                                className="bg-yellow-500 text-black text-base px-3 py-2 rounded hover:bg-yellow-600 transition-colors cursor-pointer flex text-center items-center gap-2 max-sm:text-xs">
                                                    <span className="material-symbols-outlined icon-filled !text-lg text-center max-sm:!text-sm">edit_square</span>
                                                    Modificar
                                                    </button>
                                                <button 
                                                onClick={() => {setShowModal(true), setIdAppointment(appointment.id)}}
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
                                                    alert(`Cita cancelada.`);
                                                    setShowModal(false);
                                                    cancelarCita();
                                                    window.location.href = `/client/clientHome`;
                                                }} 
                                            />
                                        )}
                                        {showModalModifier && (
                                            <ModalModifierHour 
                                                onClose={() => setShowModalModifier(false)} 
                                                onConfirm={() => {
                                                    alert(`Hora de la cita modificada exitosamente.`);
                                                    cambiarHoraCita();
                                                    setShowModalModifier(false);
                                                    window.location.href = `/client/clientHome`;
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
            <ChatFlotante />
        </>
    );
}