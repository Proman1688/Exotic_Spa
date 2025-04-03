export default function Catalog() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Aquí irían los productos */}
        <div className="bg-white p-4 border rounded-md shadow-md">
          <p className="text-center text-gray-700">Product 1</p>
        </div>
        <div className="bg-white p-4 border rounded-md shadow-md">
          <p className="text-center text-gray-700">Product 2</p>
        </div>
        <div className="bg-white p-4 border rounded-md shadow-md">
          <p className="text-center text-gray-700">Product 3</p>
        </div>
        <div className="bg-white p-4 border rounded-md shadow-md">
          <p className="text-center text-gray-700">Product 4</p>
        </div>
      </div>
    );
  }
  