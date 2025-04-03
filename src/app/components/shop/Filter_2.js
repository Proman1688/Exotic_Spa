export default function FilterMenu() {
    return (
      <div className="flex flex-col md:flex-row">
        {/* Filtro lateral derecho en pantallas grandes */}
        <div className="hidden md:flex flex-col w-1/4 bg-gray-900 text-white p-4 space-y-2">
          <span className="cursor-pointer hover:text-gray-400">Jackets & Coats</span>
          <span className="cursor-pointer hover:text-gray-400">Hoodies & Sweats</span>
          <span className="cursor-pointer hover:text-gray-400">Shirts</span>
          <span className="cursor-pointer hover:text-gray-400">T-Shirts & Longsleeve</span>
          <span className="cursor-pointer hover:text-gray-400">Vests</span>
          <span className="cursor-pointer hover:text-gray-400">Accessories</span>
          <span className="cursor-pointer hover:text-gray-400">Jeans</span>
          <span className="cursor-pointer hover:text-gray-400">Bags</span>
          <span className="cursor-pointer hover:text-gray-400">Shoes & Sneakers</span>
          <span className="cursor-pointer hover:text-gray-400">Big Sales</span>
        </div>
  
        {/* Filtro superior en pantallas pequeñas */}
        <div className="md:hidden w-full bg-black text-white py-4 px-6 flex overflow-x-auto space-x-4 text-sm uppercase tracking-wide">
          <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Jackets & Coats</span>
          <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Hoodies & Sweats</span>
          <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Shirts</span>
          <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">T-Shirts & Longsleeve</span>
          <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Vests</span>
          <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Accessories</span>
          <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Jeans</span>
          <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Bags</span>
          <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Shoes & Sneakers</span>
          <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Big Sales</span>
        </div>
  
        {/* Contenido de la tienda */}
        <div className="w-full md:w-3/4 p-6">
          <h1 className="text-2xl font-bold">Shop Page</h1>
          {/* Aquí iría el contenido de los productos */}
        </div>
      </div>
    );
  }
  