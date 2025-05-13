"use client";
import { useState } from "react";
import { Card } from "../general/card"; 
import { products } from "@/app/[locale]/products.test";
import { useTranslations } from "use-intl";

export default function FeaturedProducts({isOpenF}) {
  const [favorites, setFavorites] = useState({});
  const [showMore, setShowMore] = useState(1);
  const productsToShow = 8 * showMore; 
  const t = useTranslations("catalog");

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (

      <section className="py-10 text-white ">
            {/* Grid de productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter((product) => isOpenF === "none" || product.type === isOpenF)
              .slice(0, productsToShow)
              .map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  cardImage={product.image}
                  isNew={product.isNew}
                  toggleFavorite={toggleFavorite}
                  favorites={favorites}
                  imagepng={product.imagepng}
                />
            ))}
            </div>

            {productsToShow < products.filter((product) => isOpenF === "none" || product.type === isOpenF).length ? (
              <button className="block mx-auto m-10 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-all" onClick={() => setShowMore((prev) => prev + 1)}>
              {t("showMore")}
              </button>)
            : null}

        </section>
        

  );
}
