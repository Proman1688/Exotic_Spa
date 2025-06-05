"use client";
import ModalCancel from "@/app/[locale]/components/general/ModalCancel";
import { useState } from "react";

export default function MyAppointmentsPage() {
    const appointments = [
        { day: "01", month: "MAY", year: "2023", startTime: "10:00 AM", endTime: "11:00 AM", service: "Massage", therapist: "John Doe", price: "$50" },
        { day: "08", month: "JUNE", year: "2023", startTime: "02:00 PM", endTime: "03:00 PM", service: "Facial Treatment", therapist: "Jane Smith", price: "$70" },
        { day: "20", month: "AUGUST", year: "2023", startTime: "01:00 PM", endTime: "02:00 PM", service: "Body Treatment", therapist: "Emily Johnson", price: "$60" },
    ];

    const [showModal, setShowModal] = useState(false); 


    return (
        <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
            <h1 className="text-4xl font-bold flex items-center text-center justify-center w-full mb-3 gap-2 max-sm:text-2xl"><span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">calendar_month</span> Mis Citas</h1>
            <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Aquí puedes ver tus próximas citas.</p>
            <div className="w-full flex items-center justify-center gap-3 mb-5 max-sm:flex-col max-sm:items-center">
                <button className="bg-gray-300 text-gray-500 px-5 py-2 rounded-2xl hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">Proxima</button>
                <button className="bg-gray-300 text-gray-500 px-5 py-2 rounded-2xl hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">Pasada</button>
                <button className="bg-gray-300 text-gray-500 px-5 py-2 rounded-2xl hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">Todas</button>
            </div>
            <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
            <div className="w-full mt-5">
                { appointments.length > 0 ? (
                    <ul className="list-disc w-full flex flex-col gap-6"> 
                        {appointments.map((appointment, index) => (
                            <li key={index} className="mb-2 bg-white text-black rounded-lg flex flex-col items-center justify-between transition-colors shadow-xl max-sm:flex-col max-sm:gap-2">
                                <div className="flex items-center justify-between w-full px-5 py-4 bg-gray-100 rounded-t-lg border-b-2 border-gray-300">
                                    <h1 className="font-bold text-xl">{appointment.service}</h1>
                                    <h1>estado</h1>
                                </div>
                                <div className="flex flex-col justify-between gap-2 w-full px-5 py-10">
                                    <h1 className="flex items-center gap-2 text-sm text-gray-700 max-sm:text-xs">
                                        <span className="material-symbols-outlined icon-filled !text-lg text-center text-gray-500">calendar_month</span>
                                        <span className="font-bold">Fecha: </span> {appointment.day} de {appointment.month}, {appointment.year}
                                    </h1>
                                    <h1 className="flex items-center gap-2 text-sm text-gray-700 max-sm:text-xs">
                                        <span className="material-symbols-outlined icon-filled !text-lg text-center text-gray-500">schedule</span>
                                        <span className="font-bold">Hora: </span> {appointment.startTime} - {appointment.endTime}
                                    </h1>
                                    <h1 className="flex items-center gap-2 text-sm text-gray-700 max-sm:text-xs">
                                        <span className="material-symbols-outlined icon-filled !text-lg text-center text-gray-500">supervisor_account</span>
                                        <span className="font-bold">Terapeuta: </span> {appointment.therapist}
                                    </h1>
                                    <h1 className="flex items-center gap-2 text-sm text-gray-700 max-sm:text-xs">
                                        <span className="material-symbols-outlined icon-filled !text-lg text-center text-gray-500">attach_money</span>
                                        <span className="font-bold">Price: </span> {appointment.price}
                                    </h1>
                                </div>
                                <div className="flex items-center justify-end w-full px-5 py-4 gap-4 bg-gray-100 rounded-b-lg border-t-2 border-gray-300 max-sm:flex-col max-sm:items-center max-sm:gap-2 m">
                                    <button className="bg-yellow-500 text-black text-base px-3 py-2 rounded hover:bg-yellow-600 transition-colors cursor-pointer flex text-center items-center gap-2 max-sm:text-xs">
                                        <span className="material-symbols-outlined icon-filled !text-lg text-center max-sm:!text-sm">edit_square</span>
                                        Modificar
                                        </button>
                                    <button 
                                    onClick={() => setShowModal(true)}
                                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors cursor-pointer flex text-center items-center gap-1 text-base max-sm:text-xs">
                                        <span className="material-symbols-outlined icon-filled !text-sm text-center max-sm:!text-sm bg-white !text-red-600 rounded-2xl px-1 py-[0.5px] flex items-center justify-center">close</span>
                                        Cancelar
                                    </button>
                                </div>
                                {showModal && (
                                    <ModalCancel 
                                        onClose={() => setShowModal(false)} 
                                        onConfirm={() => {
                                            alert(`Cita para ${appointment.service} cancelada.`);
                                            setShowModal(false);
                                        }} 
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>nonas no hay nada</p>
                )}
            </div>
        </section>
    );
}