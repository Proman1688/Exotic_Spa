"use client";
import { Card } from "../general/card";
import { useState } from "react";
import { useTranslations } from "use-intl";

const TopSelling = [
  { id: 1, name: "Message Basket Bag", price: "£75.00", image: "/chaqueta.jpg", imagepng: "/chaquetaSinFondo.png"},
  { id: 2, name: "Printed Cotton Bag", price: "£160.00", image: "/chaqueta.jpg", imagepng: "/chaquetaSinFondo.png"},
  { id: 3, name: "Pastel Bodycon Bag", price: "£55.00", image: "/chaqueta.jpg", imagepng: "/chaquetaSinFondo.png"},
  { id: 4, name: "Victoria Secret Bags", price: "£65.00", image: "/chaqueta.jpg", imagepng: "/chaquetaSinFondo.png"},
];

export function WeeklyTopSelling() {
  const [favorites, setFavorites] = useState({});
  const t = useTranslations("weeklyTopSelling");

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-10 text-white">
      {/* Título */}
      <h2 className="text-center text-2xl font-semibold mb-6">#{t("weekly")}</h2>

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
            imagepng={TopSelling.imagepng}
          />
        ))}
      </div>
    </section>
  );
}
