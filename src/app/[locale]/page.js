"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";



export default function Home() {
  const t = useTranslations("home");
  return (
  <section className="absolute top-0 left-0 w-full h-screen"> 
    <video className="w-full h-full object-cover absolute" src="/seaLandscape.mp4" width="0" height="0" autoPlay loop muted preload="auto" playsInline>Your browser does not support the video tag.</video>
    <div className="w-full h-full absolute z-[9] bg-[rgb(0,0,0,0.3)]"></div>
    <article className="flex flex-col items-center justify-center w-full h-full text-white">
      <h1 className="text-5xl z-10 mb-10 chewy-regular max-lg:text-4xl max-lg:mb-6 max-sm:text-3xl max-sm:mb-4">{t('welcome')}</h1>
      <p className="text-xl z-10 mb-14 max-lg:text-base max-lg:mb-6 max-md:text-sm max-md:p-4 text-center">{t('description')}</p>
      <Link href="/" className="z-10 text-xl bg-[#90796a] px-9 py-3 rounded-full transition-all duration-200 hover:scale-105 max-lg:text-base max-lg:px-5 max-lg:py-2">{t('bookNow')}</Link>
    </article>
  </section>
  );
}