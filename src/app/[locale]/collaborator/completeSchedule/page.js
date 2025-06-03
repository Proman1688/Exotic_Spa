"use client";
import CalendarioDetalle from "../../components/general/Calendar";
export default function CompleteSchedulePage() {
  const eventos = [
    {
      title: 'Masaje - Elena V.',
      start: '2025-06-02T09:00:00',
      end: '2025-06-02T10:00:00',
    },
    {
      title: 'Facial - Carlos R.',
      start: '2025-06-02T10:30:00',
      end: '2025-06-02T12:00:00',
    },
    {
      title: 'Manicura - Laura M.',
      start: '2025-06-03T14:00:00',
      end: '2025-06-03T14:45:00',
    },
    {
      title: 'Depilación - Ana G.',
      start: '2025-06-03T15:00:00',
      end: '2025-06-03T15:30:00',
    },
  ];
  return (
    <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5">
            <h1 className="text-4xl font-bold flex items-center mb-3 text-center max-md:text-2xl max-md:flex-col"><span className="material-symbols-outlined !text-5xl mr-2 max-sm:!text-3xl icon-filled">calendar_month</span>Mi calendario Detallado</h1>
            <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Aqui puedes ver todas tus citas programadas por mes, semana o dia</p>
            <div className="border border-gray-100 p-5 shadow-lg rounded w-full mb-10 flex">
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 text-xs rounded-r-md hover:bg-blue-600 transition-colors flex items-center"
                onClick={() => alert('Ir a fecha')}
              >
                <span className="material-symbols-outlined !text-xs mr-2 icon-filled">search</span>Buscar
              </button>
            </div>

            <div className="border border-gray-100 p-5 shadow-lg rounded w-full mb-10">
              <CalendarioDetalle eventos={eventos}/>
            </div>
        </section>
  );
}