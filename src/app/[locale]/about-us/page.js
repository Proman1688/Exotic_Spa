"use client";
import { useTranslations } from "use-intl";
import Image from "next/image";

export default function AboutUs() {
  const t = useTranslations("about-us");

  return (
    <>
      {/* Sección 1 */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/wallpaper-about.jpg"
          alt="wallpaper about section 1"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row text-white bg-black/40 px-4">
          <div className="w-full md:w-1/2 hidden md:flex items-center justify-center" />
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-2xl md:text-4xl font-bold">{t("about")}</h1>
            <p className="mt-6 text-sm md:text-lg max-w-xl md:mx-20">{t("description")}</p>
          </div>
        </div>
      </div>

      {/* Sección 2 */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/wallpaper-about-2.jpeg"
          alt="wallpaper about section 2"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row text-white bg-black/40 px-4">
          <div className="w-full md:w-1/2 hidden md:flex items-center justify-center" />
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-2xl md:text-4xl font-bold">{t("mission")}</h1>
            <p className="mt-6 text-sm md:text-lg max-w-xl md:mx-20">{t("mission-description")}</p>
          </div>
        </div>
      </div>

      {/* Sección 3 */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/wallpaper-about-3.png"
          alt="wallpaper about section 3"
          fill
          className="object-cover filter opacity-70 brightness-300"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row text-white bg-black/40 px-4">
          <div className="w-full md:w-1/2 hidden md:flex items-center justify-center" />
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-2xl md:text-4xl font-bold">{t("vision")}</h1>
            <p className="mt-6 text-sm md:text-lg max-w-xl md:mx-20">{t("vision-description")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
