"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  // Estado para controlar si el menú está abierto o cerrado en dispositivos móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Inclusión de la hoja de estilos de FontAwesome */}
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
      </Head>

      {/* Barra de navegación */}
      <nav className="flex justify-between items-center px-10 py-4 text-white dark:bg-black dark:text-white select-none relative">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" width={80} height={0} alt="Logo" className="w-20 h-auto cursor-pointer" />
          </Link>
        </div>

        {/* Menú de navegación en pantallas grandes */}
        <div className="hidden md:flex space-x-6 text-lg absolute left-1/2 transform -translate-x-1/2">
          {[
            { href: "/", label: "Inicio" },
            { href: "/shop-page", label: "Tienda" },
            { href: "/#", label: "Sobre Nosotros" }
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


        {/* Contenedor de carrito y menú hamburguesa */}
        <div className="flex items-center space-x-8 ml-auto">
          {/* Ícono del carrito de compras con contador */}
          <Link href="#" className="relative group">
            <Image 
              src="/carrito.png" 
              alt="Carrito" 
              width={24} height={24}
              className="w-6 h-6 filter invert dark:invert-0 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
              3 {/* Número dinámico */}
            </span>
          </Link>

          {/* Botón de menú para dispositivos móviles */}
          <button className="md:hidden text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* Menú desplegable para dispositivos móviles */}
      {isMenuOpen && (
      <div className="md:hidden bg-black bg-opacity-90 text-white p-4 space-y-4 rounded-lg 
          transition-all duration-500 ease-out opacity-100 max-h-screen transform scale-y-100 origin-top">
        
        {[
          { name: "Inicio", link: "/" },
          { name: "Tienda", link: "/shop-page" },
          { name: "Sobre Nosotros", link: "#" }
        ].map((item, index) => (
          <Link 
            key={index} 
            href={item.link} 
            className="block text-lg font-medium py-3 px-6 rounded-md text-center 
            transition-all duration-500 ease-out hover:scale-105 hover:bg-gray-700"
          >
            {item.name}
          </Link>
        ))}
      </div>
    )}
    </>
  );
}
