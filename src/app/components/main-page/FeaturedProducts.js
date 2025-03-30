"use client";
import { useState } from "react";
import { Card } from "../card"; 

const products = [
  { id: 1, name: "Message Basket Bag", price: "£75.00", image: "/chaqueta.jpg", isNew: true },
  { id: 2, name: "Printed Cotton Bag", price: "£160.00", image: "/chaqueta.jpg", isNew: true },
  { id: 3, name: "Pastel Bodycon Bag", price: "£55.00", image: "/chaqueta.jpg", isNew: true },
  { id: 4, name: "Victoria Secret Bags", price: "£65.00", image: "/chaqueta.jpg", isNew: false },
  { id: 5, name: "New Style Bag", price: "£78.00", image: "/chaqueta.jpg", isNew: true },
  { id: 6, name: "Viccent Bag", price: "£55.00", image: "/chaqueta.jpg", isNew: false },
  { id: 7, name: "Colorful Summer Bags", price: "£55.00", image: "/chaqueta.jpg", isNew: true },
  { id: 8, name: "Luxury Bag", price: "£90.00", image: "/chaqueta.jpg", isNew: false },
];

export function FeaturedProducts() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-10 text-white">
      {/* Título */}
      <h2 className="text-center text-2xl font-semibold mb-6">#Featured Products</h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            cardImage={product.image}
            isNew={product.isNew}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        ))}
      </div>
    </section>
  );
}
