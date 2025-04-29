"use client";
import { useState } from "react";

export default function Filter_2({setIsOpenF, isOpenF}) {
  const categories = [
    "Jackets & Coats", "Hoodies & Sweats", "Shirts",
    "T-Shirts & Longsleeve", "Vests", "Accessories",
    "Jeans", "Bags", "Shoes & Sneakers", "Big Sales"
  ];
  
  return (
    <div>
      {/* Menú lateral (SOLO para pantallas grandes) */}
      <div className="hidden md:block bg-black text-white p-4 space-y-2 text-center">
        <ul className="space-y-1">
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer p-4 hover:text-black hover:bg-white ${
                isOpenF === category ? "bg-white text-black" : ""
              }`}
              onClick={() =>
                setIsOpenF(isOpenF === category ? "none" : category)
              }
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
  
      {/* Menú superior (SOLO para móviles) */}
      <div className="block md:hidden w-full bg-black text-white py-4 px-6 overflow-x-auto space-x-4 text-sm uppercase tracking-wide">
        {categories.map((category) => (
          <span
            key={category}
            className={`cursor-pointer whitespace-nowrap px-2 hover:text-gray-400 ${
              isOpenF === category ? "text-gray-400 font-semibold underline" : ""
            }`}
            onClick={() =>
              setIsOpenF(isOpenF === category ? "none" : category)
            }
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
  
}
