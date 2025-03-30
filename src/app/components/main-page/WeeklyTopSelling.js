"use client";
import Image from "next/image";
import { useState } from "react";

const TopSelling = [
  { id: 1, name: "Message Basket Bag", price: "£75.00", image: "/chaqueta.jpg"},
  { id: 2, name: "Printed Cotton Bag", price: "£160.00", image: "/chaqueta.jpg"},
  { id: 3, name: "Pastel Bodycon Bag", price: "£55.00", image: "/chaqueta.jpg"},
  { id: 4, name: "Victoria Secret Bags", price: "£65.00", image: "/chaqueta.jpg"},
];

export function WeeklyTopSelling() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-10 text-white">
      {/* Título */}
      <h2 className="text-center text-2xl font-semibold mb-6">#Weekly Top Selling</h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TopSelling.map((TopSelling) => (
          <div key={TopSelling.id} className="relative bg-black p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Etiqueta "NEW" */}
            {TopSelling.isNew && (
              <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded-full">
                NEW
              </span>
            )}

            {/* Botón de favorito */}
            <button
              onClick={() => toggleFavorite(TopSelling.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-all duration-300"
            >
              {favorites[TopSelling.id] ? "❤️" : "🤍"}
            </button>

            {/* Imagen del producto */}
            <div className="top-8 w-full h-40 relative mb-4">
              <Image src={TopSelling.image} alt={TopSelling.name} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>

            {/* Nombre del producto */}
            <h3 className="text-lg font-medium mt-10 text-center">{TopSelling.name}</h3>

            {/* Precio */}
            <p className="text-gray-400 text-center">{TopSelling.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
