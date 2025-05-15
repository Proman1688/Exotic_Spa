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

      <nav className="flex justify-between items-center px-10 py-4 text-white dark:bg-black dark:text-white select-none relative">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={80}
              height={0}
              alt="Logo"
              className="w-20 h-auto cursor-pointer"
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 text-lg absolute left-1/2 transform -translate-x-1/2">
          {[
            { href: "/", label: t("home") },
            { href: "/shop-page", label: t("shop") },
            { href: "/about-us", label: t("about") },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative cursor-pointer transition-all duration-500 ease-in-out hover:text-gray-300 hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-500 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-8 ml-auto">
          <Link href="/cart" className="relative group">
            <Image
              src="/carrito.png"
              alt="Carrito"
              width={24}
              height={24}
              className="w-6 h-6 filter invert dark:invert-0 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
              3
            </span>
          </Link>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {(isMenuOpen || isClosing) && (
        <div
          className={`md:hidden bg-black bg-opacity-90 text-white p-4 space-y-4 rounded-lg 
          transform origin-top transition-all duration-300 ease-out
          ${isClosing ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"}`}
        >
          {[
            { name: t("home"), link: "/" },
            { name: t("shop"), link: "/shop-page" },
            { name: t("about"), link: "/about-us" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="block text-lg font-medium py-3 px-6 rounded-md text-center 
              transition-all duration-300 ease-out hover:scale-105 hover:bg-gray-700"
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
