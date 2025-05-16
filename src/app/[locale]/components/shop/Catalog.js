"use client"; // Indica que este componente se ejecuta en el cliente (Next.js App Router)

// Importación de hooks y componentes
import { useState } from "react";
import { Card } from "../general/card"; // Componente que representa una tarjeta de producto
import { products } from "@/app/[locale]/products.test"; // Datos de productos de prueba
import { useTranslations } from "use-intl"; // Hook para traducciones multilingües

// Componente principal que muestra productos destacados
export default function FeaturedProducts({ isOpenF }) {
  // Estado para almacenar productos marcados como favoritos (por id)
  const [favorites, setFavorites] = useState({});

  // Estado para controlar cuántos grupos de productos mostrar (multiplicado por 8)
  const [showMore, setShowMore] = useState(1);

  // Número de productos visibles, basado en showMore
  const productsToShow = 8 * showMore;

  // Traducciones del archivo "catalog" (por ejemplo, para el botón "Mostrar más")
  const t = useTranslations("catalog");

  // Función que alterna el estado de favorito de un producto según su id
  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-10 text-white">
      {/* Grilla de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          // Filtra productos por tipo si hay un filtro activo (isOpenF distinto a "none")
          .filter((product) => isOpenF === "none" || product.type === isOpenF)
          // Limita los productos mostrados según showMore
          .slice(0, productsToShow)
          // Mapea cada producto a una Card
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

      {productsToShow <
        products.filter((product) => isOpenF === "none" || product.type === isOpenF).length && (
        <div className="flex justify-center gap-4 m-10">
          {/* Botón "Ver más" */}
          <button
            className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-all"
            onClick={() => setShowMore((prev) => prev + 1)}
          >
            {t("showMore")}
          </button>

          {/* Botón "Ver menos" solo si showMore > 1 */}
          {showMore > 1 && (
            <button
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-500 transition-all"
              onClick={() => setShowMore((prev) => Math.max(prev - 1, 1))}
            >
              {t("showLess") ?? "Ver menos"}
            </button>
          )}
        </div>
      )}
    </section>
  );
}
