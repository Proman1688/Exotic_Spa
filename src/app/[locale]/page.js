"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";



export default function Home() {
  const t = useTranslations("home");
  return (
  <section className="relative flex items-center justify-center text-white"> 
    <article className="flex flex-col items-center justify-center w-full h-full text-white">
      <h1 className="text-5xl z-10 mb-10 chewy-regular max-lg:text-4xl max-lg:mb-6 max-sm:text-3xl max-sm:mb-4 max-sm:text-center">{t('welcome')}</h1>
      <p className="text-xl z-10 mb-14 max-lg:text-base max-lg:mb-6 max-md:text-sm max-md:p-4 text-center">{t('description')}</p>
      <Link href="/" className="z-10 text-xl bg-[#90796a] px-9 py-3 rounded-full transition-all duration-200 hover:scale-105 max-lg:text-base max-lg:px-5 max-lg:py-2">{t('bookNow')}</Link>
    </article>
  </section>
  );
}