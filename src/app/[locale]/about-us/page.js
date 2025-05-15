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
        <div className="absolute inset-0 flex text-white bg-black/40 px-4">
          <div className="flex flex-col items-center justify-center w-1/2" />
          <div className="flex flex-col items-center justify-center w-1/2 p-6">
            <h1 className="text-4xl font-bold">{t("about")}</h1>
            <p className="mt-6 max-w-3xl text-lg mx-20 text-center">{t("description")}</p>
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
        <div className="absolute inset-0 flex text-white bg-black/40 px-4">
          <div className="flex flex-col items-center justify-center w-1/2">
            <h1 className="text-4xl font-bold">{t("about")}</h1>
            <p className="mt-6 max-w-3xl text-lg mx-20 text-center">{t("description")}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 p-6">
            
          </div>
        </div>
      </div>
      {/* Sección 3 */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/wallpaper-about.jpg"
          alt="wallpaper about section 1"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex text-white bg-black/40 px-4">
          <div className="flex flex-col items-center justify-center w-1/2" />
          <div className="flex flex-col items-center justify-center w-1/2 p-6">
            <h1 className="text-4xl font-bold">{t("about")}</h1>
            <p className="mt-6 max-w-3xl text-lg mx-20 text-center">{t("description")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
