import Image from 'next/image';
import Link from 'next/link';

export default function Card() {
    return (
        <article className='flex flex-col items-center justify-center bg-white rounded-lg shadow-md shadow-black max-w-sm min-h-[30rem] max-[375px]:w-full'>
          <Image
            src="/massage.jpg"
            alt="Services Card"
            width={500}
            height={300}
            className="w-full h-1/2 object-cover rounded-t-lg shadow-lg border-b-3 border-black"
          />
          <div className='px-6 text-black flex flex-col justify-center h-1/2'>
            <h1 className='text-xl font-bold max-[375px]:text-center max-sm:text-lg'>Masaje Relajante Profundo</h1>
            <p className='mt-2 text-gray-700 text-xs mb-4 max-sm:text-[0.7rem] text-justify'>
              Disfruta de un masaje relajante profundo que alivia la tensión muscular y mejora la circulación. 
              Ideal para reducir el estrés y promover el bienestar general.
            </p>
            <p className='text-xs'><span className="material-symbols-outlined !text-sm align-middle">schedule</span> <strong>Duración:</strong> 60 min</p>
            <p className='text-xs'><span className="material-symbols-outlined !text-sm align-middle">attach_money</span> <strong>Precio:</strong> $50</p>
            <Link href="#" className='mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs text-center'><span className="material-symbols-outlined !text-sm align-middle">calendar_month</span> Reservar Ahora</Link>
          </div>
        </article>
    );
}