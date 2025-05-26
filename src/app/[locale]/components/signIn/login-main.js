"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "use-intl";

export default function LoginMain() {
    const t = useTranslations("signIn");
    return (
      <div className="w-full bg-[rgb(255,255,255,0.8)] z-30 flex flex-col items-center justify-center px-10 py-10 rounded-lg shadow-lg mx-auto">
        <h1 className="text-black text-2xl mb-2 font-bold text-center max-sm:text-xl">{t('title')}</h1>
        <p className="text-gray-500 text-xs mb-6 max-sm:text-[0.7rem]">{t('subtitle')}</p>
        <form className="flex flex-col w-full">
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 mb-1 text-xs max-sm:text-[0.7rem]">{t('email')}</label>
            <input type="text" id="username" name="username" className="text-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-xs" required placeholder={t('exampleEmail')}/>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-1 text-xs max-sm:text-[0.7rem]">{t('password')}</label>
            <input type="password" id="password" name="password" className="text-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:text-xs" required placeholder={t('examplePassword')}/>
          </div>
          <div className="flex items-center justify-between mb-4 text-xs max-sm:text-[0.7rem] max-[375px]:flex-col max-[375px]:items-start">
            <div className="flex items-center">
              <input type="checkbox" id="remember" name="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700">{t('remindMe')}</label>
            </div>
            <Link href="#" className="text-blue-500 hover:underline">{t('forgot')}</Link>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 text-sm max-sm:text-xs">{t('submit')}</button>
        </form>
        <p className="text-gray-700 mt-4 text-xs max-sm:text-[0.7rem]">{t('dontHave')} <Link href="/sign-up" className="text-blue-500 hover:underline">{t('signUp')}</Link></p>
      </div>
    );
  }
  