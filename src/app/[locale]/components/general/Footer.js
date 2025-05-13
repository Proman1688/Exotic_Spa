"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "use-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="w-full bg-zinc-800 text-white py-10 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección 1: Logo y Descripción */}
        <div>
          <Image src="/logo-sin-fondo.png" width={128} height={0} alt="Facebook" className="w-32 h-auto hover:scale-110 transition" />
          <p className="text-gray-400 mt-2">{t("option")}</p>
        </div>

        {/* Sección 2: Enlaces Rápidos */}
        <div>
          <h3 className="text-lg font-semibold">{t('link')}</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/" className="hover:text-gray-300">{t('home')}</Link></li>
            <li><Link href="/tienda" className="hover:text-gray-300">{t('shop')}</Link></li>
            <li><Link href="/contacto" className="hover:text-gray-300">{t('about')}</Link></li>
          </ul>
        </div>

        {/* Sección 3: Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold">{t('followUs')}</h3>
          <div className="flex space-x-4 mt-2">
            <Link href="#"><Image width={100} height={100} src="/github.svg" alt="Facebook" className="w-6 h-6 hover:scale-110 transition" /></Link>
            <Link href="#"><Image width={100} height={100} src="/instagram.svg" alt="Instagram" className="w-6 h-6 hover:scale-110 transition" /></Link>
            <Link href="#"><Image width={100} height={100} src="/linkedin.svg" alt="Twitter" className="w-6 h-6 hover:scale-110 transition" /></Link>
          </div>
        </div>
      </div>

      {/* Sección de Derechos de Autor */}
      <div className="mt-8 text-center text-gray-500">
        © 2025 JADOS. {t('rights')}.
      </div>
    </footer>
  );
}
