"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "use-intl";
import { useEffect, useState } from "react";

export default function TopBar() {
  const t = useTranslations("topBar");
  const [selectedLang, setSelectedLang] = useState("");

   useEffect(() => {
    const pathParts = window.location.pathname.split("/");
    const langFromUrl = pathParts.find(part => ["en", "es", "fr"].includes(part));
    if (langFromUrl) {
      const langMapEn = {
        en: "English",
        es: "Spanish",
        fr: "French",
      };
      const langMapEs = {
        en: "Ingles",
        es: "Español",
        fr: "Frances",
      };
      const langMapFr = {
        en: "Anglais",
        es: "Espagnol",
        fr: "Francais",
      };
      if (langFromUrl === "en") {
        setSelectedLang(langMapEn[langFromUrl]);
      } else if (langFromUrl === "es") {
        setSelectedLang(langMapEs[langFromUrl]);
      } else if (langFromUrl === "fr") {
        setSelectedLang(langMapFr[langFromUrl]);
      }
    } else {
      setSelectedLang("French");
    }
  }, []);

  const language = (languageSelected) => {
    const langMap = {
      English: "en",
      Anglais: "en",
      Ingles: "en",
      Español: "es",
      Espagnol: "es",
      Spanish: "es",
      French: "fr",
      Frances: "fr",
      Français: "fr",
    };

    const currentUrl = window.location.href;
    const urlParts = currentUrl.split("/"); 

    let indexLang = -1;
    for (let i = 0; i < urlParts.length; i++) {
      if (["en", "es", "fr"].includes(urlParts[i])) {
        indexLang = i;
        break;
      }
    }

    const selectedLang = langMap[languageSelected] || "en";
    if (indexLang !== -1) {
      urlParts[indexLang] = selectedLang;
    } else {
      urlParts.splice(3, 0, selectedLang);
    }

    const newUrl = urlParts.join("/");
    console.log(newUrl);
    window.location.href = newUrl;
  };

  return ( 
  <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
    </Head>
    
    <nav className="flex justify-between p-2 px-16 text-[14px] text-white max-sm:px-5 select-none z-10 relative">
      <p className="flex items-center"></p>

      <div className="flex items-center space-x-5 max-sm:space-x-2 max-sm:w-full max-sm:justify-between">
        <select className="max-sm:text-[14px]" onChange={(e => language(e.target.value))} value={selectedLang}>
          <option className="text-black">{t('French')}</option>
          <option className="text-black">{t('English')}</option>
          <option className="text-black">{t('Spanish')}</option>
        </select>
        <div className="flex space-x-4">
          <Link href="https://github.com/jadodevs" className="transition-transform duration-300 hover:scale-110 hover:opacity-80">
            <Image src="/github.svg" alt="GitHub" width="30" height="30" />
          </Link>
          <Link href="https://instagram.com/mi_usuario" className="transition-transform duration-300 hover:scale-110 hover:opacity-80">
            <Image src="/instagram.svg" alt="Instagram" width="30" height="30" />
          </Link>
          <Link href="https://linkedin.com/in/mi_usuario" className="transition-transform duration-300 hover:scale-110 hover:opacity-80">
            <Image src="/linkedin.svg" alt="LinkedIn" width="30" height="30" />
          </Link>
        </div>
      </div>
    </nav>
  </>
  );
}