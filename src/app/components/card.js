import Image from "next/image";
export function Card({id, name, price, cardImage, isNew, toggleFavorite, favorites}) {
    // const [favorites, setFavorites] = useState({});
    return(<>
        <div key={id} className="relative bg-black p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Etiqueta "NEW" */}
            {isNew && (
              <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded-full"> NEW </span>
            )}

            {/* Botón de favorito */}
            <button
              onClick={() => toggleFavorite(id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-all duration-300"
            >
              {favorites[id] ? "❤️" : "🤍"}
            </button>

            {/* Imagen del producto */}
            <div className="top-8 w-full h-40 relative mb-4">
              <Image src={cardImage} alt={name} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>

            {/* Nombre del producto */}
            <h3 className="text-lg font-medium mt-10 text-center">{name}</h3>

            {/* Precio */}
            <p className="text-gray-400 text-center">{price}</p>
        </div>
    </>)
}