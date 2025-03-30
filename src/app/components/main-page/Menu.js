"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

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
          <img src="/logo.png" alt="Logo" className="w-20 h-auto" />
        </div>

        {/* Menú de navegación en pantallas grandes */}
        <div className="hidden md:flex space-x-6 text-lg absolute left-1/2 transform -translate-x-1/2">
          <Link href="#" className="cursor-pointer transition-colors duration-300 hover:text-gray-300">
            Inicio
          </Link>
          <Link href="#" className="cursor-pointer transition-colors duration-300 hover:text-gray-300">
            Tienda
          </Link>
          <Link href="#" className="cursor-pointer transition-colors duration-300 hover:text-gray-300">
            Sobre Nosotros
          </Link>
        </div>


        {/* Contenedor de carrito y menú hamburguesa */}
        <div className="flex items-center space-x-8 ml-auto">
          {/* Ícono del carrito de compras con contador */}
          <Link href="#" className="relative group">
            <img 
              src="/carrito.png" 
              alt="Carrito" 
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
        <div className="md:hidden bg-black text-white p-4 space-y-4">
        <a href="#" className="block text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300">
          Inicio
        </a>
        <a href="#" className="block text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300">
          Tienda
        </a>
        <a href="#" className="block text-lg font-medium py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300">
          Sobre Nosotros
        </a>
      </div>
      )}
    </>
  );
}
