"use client"; 
import { useState } from "react";
import Head from "next/head";

export default function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </Head>

      <nav className="flex justify-between items-center p-4 text-white dark:bg-black dark:text-white select-none">
        <div>
          <img src="/logo.png" alt="Logo" className="w-20 h-auto" />
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <div className="hidden md:flex space-x-6 text-lg">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Shop</span>
          <span className="cursor-pointer">About Us</span>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <img src="/carrito.png" alt="Carrito" className="w-6 h-6 filter invert dark:invert-0" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
              3 {/* Número dinámico */}
            </span>
          </div>
        </div>
      </nav>

      {/* Menú desplegable en móviles */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white p-4 space-y-4">
          <span className="block cursor-pointer">Home</span>
          <span className="block cursor-pointer">Shop</span>
          <span className="block cursor-pointer">About Us</span>
        </div>
      )}
    </>
  );
}
