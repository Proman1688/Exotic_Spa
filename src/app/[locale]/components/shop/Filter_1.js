"use client";
import { useTranslations } from "use-intl";
export default function Filter_1() {
  const t = useTranslations("filter1");
  return (
    <div className="w-full text-white py-4 px-6 flex flex-wrap justify-center gap-3 text-[10px] uppercase tracking-wide 
      md:text-[12px] md:gap-8 sm:text-[12px] sm:gap-5">
      <span className="cursor-pointer hover:text-gray-400">{t('size')}</span>
      <span className="cursor-pointer hover:text-gray-400">{t('color')}</span>
      <span className="cursor-pointer hover:text-gray-400">{t('material')}</span>
      <span className="cursor-pointer hover:text-gray-400">{t('type')}</span>
      <span className="cursor-pointer hover:text-gray-400">{t('brand')}</span>
      <span className="cursor-pointer hover:text-gray-400">{t('price')}</span>
    </div>
  );
}
