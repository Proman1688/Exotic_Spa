'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'; 
import ChatFlotante from '../../chatbot/ChatFlotante/page';

export default function BookAppointmentPage() {
    const { data: session, status } = useSession();
    const [formData, setFormData] = useState({
        servicio: '',
        terapeuta: '',
        fecha: '',
        hora: '',
        notas: '',
        idCliente: session?.user?.id || '' 
    });

    useEffect(() => {
        if (session?.user?.id) {
            setFormData((prev) => ({ ...prev, idCliente: session.user.id }));
        }
    }, [session]);

    const [horaSeleccionada, setHoraSeleccionada] = useState('');
    const [terapeutas, setTerapeutas] = useState([]);
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        fetch('/api/auth/terapeuta')
            .then(res => res.json())
            .then(data => setTerapeutas(data.terapeutas || []));
    }, []);

    useEffect(() => {
        const fetchServicios = async () => {
            try {
                const res = await fetch('/api/auth/producto?tipo=Servicio');
                const data = await res.json();
                setServicios(data.productos || []);
            } catch (err) {
                console.error('Error al cargar servicios:', err);
            }
        };
        fetchServicios();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleHoraClick = (hora) => {
        setHoraSeleccionada(hora);
        setFormData({ ...formData, hora });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formateado = {
            ...formData,
            servicio: formData.servicio.trim(),
            terapeuta: formData.terapeuta ? formData.terapeuta.trim() : null,
            fecha: formData.fecha,
            hora: formData.hora,
            notas: formData.notas.trim(),
            idCliente: formData.idCliente
        };

        console.log("📤 Enviando formulario:", JSON.stringify(formateado, null, 2));

        try {
            const res = await fetch('/api/auth/bookApp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formateado)
            });

            const result = await res.json();

            if (result.ok) {
                alert('✅ Cita agendada con éxito.');
            } else {
                alert('❌ Error al agendar cita: ' + result.error);
            }
        } catch (error) {
            console.error('Error en el frontend:', error);
            alert('❌ Error inesperado');
        }
    };

    const servicioSeleccionado = servicios.find(
        (s) => String(s.Id) === String(formData.servicio)
    );
    const terapeutaSeleccionado = terapeutas.find(
        (t) => String(t.IdUsuario) === String(formData.terapeuta)
    );

    return (
        <>
            <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
                <h1 className="text-4xl font-bold flex items-center text-center justify-center w-full mb-3 gap-2 max-sm:text-2xl">
                    <span className="material-symbols-outlined icon-filled !text-4xl text-center text-blue-500">calendar_add_on</span> 
                    Agendar Cita
                </h1>
                <p className="text-xs mb-10 text-center">Aquí puedes agendar una cita.</p>

                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
                    {/* Paso 1: Servicio */}
                    <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                        <h1 className="text-lg font-bold text-blue-500 absolute top-[-15px] bg-white px-3">Paso 1: Elige tu Servicio</h1>
                        <label htmlFor="service" className="block text-sm text-gray-700 font-bold">Servicio deseado:</label>
                        <select
                            id="service"
                            name="servicio"
                            value={formData.servicio}
                            onChange={handleChange}
                            className="text-sm mt-1 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">-- Selecciona un servicio --</option>
                            {servicios.map((s) => (
                                <option key={s.Id} value={s.Id}>
                                    {s.Nombre} - ${Number(s.Precio).toFixed(2)}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Paso 2: Terapeuta */}
                    <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                        <h1 className="text-lg font-bold text-blue-500 absolute top-[-15px] bg-white px-3">Paso 2: Elige tu Terapeuta (Opcional)</h1>
                        <label htmlFor="terapeuta" className="block text-sm text-gray-700 font-bold">Terapeuta:</label>
                        <select
                            id="terapeuta"
                            name="terapeuta"
                            value={formData.terapeuta}
                            onChange={handleChange}
                            className="text-sm mt-1 p-2 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Cualquier terapeuta disponible</option>
                            {terapeutas.map((t) => (
                                <option key={t.IdUsuario} value={t.IdUsuario}>
                                    {t.Nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Paso 3: Fecha y Hora */}
                    <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5 flex gap-4 justify-between max-md:flex-col max-md:gap-2">
                        <div className="flex-1 relative">
                            <h1 className="text-lg font-bold text-blue-500 absolute top-[-45px] bg-white px-3">Paso 3: Elige Fecha y Hora</h1>
                            <label htmlFor="fecha" className="block text-sm text-gray-700 font-bold mb-2">Fecha:</label>
                            <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} className="p-2 border-2 border-gray-300 shadow-md rounded-lg" />
                        </div>
                        <div className="flex-1 relative">
                            <h1 className="font-bold">Horas Disponibles:</h1>
                            <div className="grid grid-cols-4 gap-2 mt-2 max-lg:grid-cols-3">
                                {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map((hora) => (
                                    <div
                                        key={hora}
                                        onClick={() => handleHoraClick(hora)}
                                        className={`text-center py-2 rounded-lg border-2 cursor-pointer ${
                                            horaSeleccionada === hora
                                                ? 'bg-blue-500 text-white border-blue-500'
                                                : 'bg-blue-100 text-blue-500 border-blue-200 hover:bg-blue-200'
                                        }`}
                                    >
                                        {hora}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Paso 4: Confirmación */}
                    <div className="w-full border-2 border-gray-200 rounded-lg py-8 px-5 shadow-md relative mb-5">
                        <h1 className="text-lg font-bold text-blue-500 absolute top-[-15px] bg-white px-3">Paso 4: Revisa y Confirma tu Cita</h1>
                        <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-lg shadow-sm border-2 border-gray-300 border-dashed"> 
                            <h1 className="text-lg font-bold text-gray-700">Resumen de tu cita:</h1>
                            <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
                            <p className="text-sm font-bold">Servicio: <span className="font-normal">{servicioSeleccionado?.Nombre || '-'}</span></p>
                            <p className="text-sm font-bold">Terapeuta: <span className="font-normal">{terapeutaSeleccionado?.Nombre || '-'}</span></p>
                            <p className="text-sm font-bold">Fecha: <span className="font-normal">{formData.fecha || '-'}</span></p>
                            <p className="text-sm font-bold">Hora: <span className="font-normal">{formData.hora || '-'}</span></p>
                            <p className="text-sm font-bold">Precio Estimado: <span className="font-normal">{servicioSeleccionado ? `$${Number(servicioSeleccionado.Precio).toFixed(2)}` : '-'}</span></p>
                        </div>
                        <label htmlFor="notes" className="block text-sm text-gray-700 font-bold mt-4">Notas Adicionales (opcional):</label>
                        <textarea id="notes" name="notas" value={formData.notas} onChange={handleChange} rows={3} className="mt-1 p-2 text-sm block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ej: Alguna preferencia o condición a tener en cuenta..."></textarea>
                    </div>

                    <button type="submit" className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-500 transition-colors cursor-pointer w-full">
                        Confirmar Cita
                    </button>
                </form>
            </section>
            <ChatFlotante />
        </>
    );
}
