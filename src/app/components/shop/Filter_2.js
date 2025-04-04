export default function Filter_2() {
  return (
    <div>
      {/* Menú lateral (SOLO para pantallas grandes) */}
      <div className="hidden md:block bg-black text-white p-4 space-y-2 text-center">
        <ul className="space-y-1">
          <li className="cursor-pointer hover:text-black hover:bg-white p-4">Jackets & Coats</li>
          <li className="cursor-pointer hover:text-black hover:bg-white p-4">Hoodies & Sweats</li>
          <li className="cursor-pointer hover:text-black hover:bg-white p-4">Shirts</li>
          <li className="cursor-pointer hover:text-black hover:bg-white p-4">T-Shirts & Longsleeve</li>
          <li className="cursor-pointer hover:text-black hover:bg-white p-4">Vests</li>
          <li className="cursor-pointer hover:text-black hover:bg-white p-4">Accessories</li>
          <li className="cursor-pointer hover:text-black hover:bg-white p-4">Jeans</li>
          <li className="cursor-pointer hover:text-black hover:bg-white p-4">Bags</li>
          <li className="cursor-pointer hover:text-black hover:bg-white p-4">Shoes & Sneakers</li>
          <li className="cursor-pointer hover:text-black hover:bg-white p-4">Big Sales</li>
        </ul>
      </div>

      {/* Menú superior (SOLO para móviles) */}
      <div className="block md:hidden w-full bg-black text-white py-4 px-6 overflow-x-auto space-x-4 text-sm uppercase tracking-wide">
        <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Jackets & Coats</span>
        <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Hoodies & Sweats</span>
        <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Shirts</span>
        <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">T-Shirts & Longsleeve</span>
        <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Vests</span>
        <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Accessories</span>
        <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Jeans</span>
        <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Bags</span>
        <span className="cursor-pointer hover:text-gray-400 whitespace-nowrap">Shoes & Sneakers</span>
        <span className="cursor-pointer hover:text-red-400 whitespace-nowrap">Big Sales</span>
      </div>
    </div>
  );
}
