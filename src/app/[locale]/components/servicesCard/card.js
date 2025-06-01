"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'use-intl';

export default function Card({title, description, image, duration, price}) {
    const t = useTranslations("servicesButton");
    return (
        <article className='flex flex-col items-center justify-center bg-white rounded-lg shadow-md shadow-black max-w-sm min-h-[30rem] max-[375px]:w-full max-[375px]:min-h-[35rem]'>
          <Image
            src={image}
            alt="Services Card"
            width={500}
            height={300}
            className="w-full h-1/2 object-cover rounded-t-lg shadow-lg border-b-3 border-black"
          />
          <div className='px-6 text-black flex flex-col justify-center h-1/2'>
            <h1 className='text-xl font-bold max-[375px]:text-center max-sm:text-lg'>{title}</h1>
            <p className='mt-2 text-gray-700 text-xs mb-4 max-sm:text-[0.7rem] text-justify'>
              {description}
            </p>
            <p className='text-xs'><span className="material-symbols-outlined !text-sm align-middle">schedule</span> <strong>Duración:</strong> {duration}</p>
            <p className='text-xs'><span className="material-symbols-outlined !text-sm align-middle">attach_money</span> <strong>Precio:</strong> {price}</p>
            <Link href="#" className='mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs text-center'><span className="material-symbols-outlined !text-sm align-middle">calendar_month</span> {t('bookNow')}</Link>
          </div>
        </article>
    );
}