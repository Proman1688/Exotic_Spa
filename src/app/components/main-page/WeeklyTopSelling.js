"use client";
import { Card } from "../card";
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
          <Card
            key={TopSelling.id}
            id={TopSelling.id}
            name={TopSelling.name}
            price={TopSelling.price}
            cardImage={TopSelling.image}
            isNew={TopSelling.isNew}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        ))}
      </div>
    </section>
  );
}
