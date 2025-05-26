"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "use-intl";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const t = useTranslations("menu");

  const handleLinkClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300); // 300ms coincide con la duración de la animación
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </Head>

      <nav className="flex px-10 py-4 text-white bg-opacity-0 select-none relative z-10 justify-between">
        <div className="flex items-center space-x-5">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={80}
              height={0}
              alt="Logo"
              className="w-30 h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 text-lg transform">
            {[
              { href: "/", label: t("home") },
              { href: "/services", label: t("services") },
              { href: "/login", label: t("login") },
              { href: "/", label: t("contact") },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-8 ml-auto">
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {(isMenuOpen || isClosing) && (
        <div
          className={`md:hidden bg-opacity-90 text-white p-4 rounded-lg 
          transform origin-top transition-all duration-300 ease-out z-20 relative flex justify-between
          ${isClosing ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"}`}
        >
          {[
            { name: t("home"), link: "/" },
            { name: t("services"), link: "/services" },
            { name: t("login"), link: "/login" },
            { name: t("contact"), link: "/" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="block font-medium rounded-md text-center 
              transition-all duration-300 ease-out hover:scale-105 hover:bg-gray-700 text-xs"
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
