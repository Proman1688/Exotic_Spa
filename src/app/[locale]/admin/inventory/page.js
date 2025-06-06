"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import { useState, useMemo } from "react";

export default function inventoryPage() {

  const products = useAsyncList({
    async load({ signal }) {
      const res = await fetch("/api/auth/products", { signal });
      const json = await res.json();
      return { items: json.results };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: [...items].sort((a, b) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
          if (sortDescriptor.direction === "descending") cmp *= -1;
          return cmp;
        }),
      };
    },
  }); 

  const columnsProducts = [
    { key: "name", name: "Nombre del Producto" },
    { key: "sku", name: "SKU" },
    { key: "category", name: "Categoria" },
    { key: "proveedor", name: "Proveedor" },
    { key: "stock", name: "Stock Actual" },
    { key: "price", name: "Precio Costo" },
    { key: "sel", name: "Precio Venta" },
    { key: "min", name: "Stock Min" },
    { key: "actions", name: "Acciones" }
  ];

  const providers = useAsyncList({
    async load({ signal }) {
      const res = await fetch("/api/auth/providers", { signal });
      const json = await res.json();
      return { items: json.results };
    },
  });

  const columnsProviders = [
    { key: "name", name: "Nombre del proveedor" },
    { key: "contact", name: "Contacto (Nombre)" },
    { key: "phone", name: "Teléfono" },
    { key: "email", name: "Correo Electrónico" },
    { key: "products", name: "Productos Suministrados" },
    { key: "actions", name: "Acciones" }
  ];

  const [page, setPage] = useState(1);
  const [page2, setPage2] = useState(1);
  const rowsPerPage = 4;
  const [buttonsPerPage, setButtonsPerPage] = useState(0);

  const pages = Math.ceil(products.items.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return products.items.slice(start, end);
  }, [page, products]);

  const pages2 = Math.ceil(providers.items.length / rowsPerPage);

  const items2 = useMemo(() => {
    const start = (page2 - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return providers.items.slice(start, end);
  }, [page2, providers]);
  // box 
  return (
    <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
            <h1 className="text-4xl font-bold flex items-center mb-3 text-center max-md:text-2xl max-md:flex-col"><span className="material-symbols-outlined !text-5xl mr-2 max-sm:!text-3xl icon-filled">trolley</span>Gestion de Inventario y Proveedores</h1>
            <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Controla tus productos, stock y la información de tus proveedores</p>

            <div className="w-full gap-8 mb-2 flex">
                <h2 onClick={() => setButtonsPerPage(0)} className={`text-lg flex items-center font-semibold max-md:text-lg max-md:flex-col cursor-pointer ${buttonsPerPage === 0 ? 'text-blue-500' : 'text-gray-500'}`} >
                    <span className="material-symbols-outlined !text-2xl mr-2 icon-filled">box</span>
                    Productos (inventario)</h2>
                <h2 onClick={() => setButtonsPerPage(1)} className={`text-lg flex items-center font-semibold max-md:text-lg max-md:flex-col cursor-pointer ${buttonsPerPage === 1 ? 'text-blue-500' : 'text-gray-500'}`}> 
                    <span className="material-symbols-outlined !text-2xl mr-2 icon-filled">local_shipping</span>
                    Proveedores</h2>
            </div>
            <div className="w-full h-[2px] bg-blue-500 mb-3"></div>

            {buttonsPerPage === 0 ? (
                <>
                    <div className="border border-gray-100 p-5 shadow-lg rounded w-full mb-10 flex">
                    <input
                        type="text"
                        placeholder="Buscar Servicio"
                        className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 text-xs rounded-r-md hover:bg-blue-600 transition-colors flex items-center"
                        onClick={() => alert('Buscar Servicio')}
                    >
                        <span className="material-symbols-outlined !text-xs mr-2 icon-filled">search</span>Buscar
                    </button>
                    </div>
                    
                    <div className="w-full flex justify-between items-center mb-5 max-md:flex-col max-md:items-start max-md:gap-2">
                        <div className="w-full flex items-end mb-5 gap-2 max-md:mb-0 max-md:w-full max-md:items-center max-md:flex-col">
                            <select className="border border-gray-300 rounded-md p-2 text-sm text-gray-700">
                                <option value="all">Todos las categorias</option>
                                <option value="facial">Faciales</option>
                                <option value="corporal">Corporales</option>
                                <option value="masajes">Masajes</option>
                                <option value="depilacion">Depilación</option>
                                <option value="tratamientos">Tratamientos Especiales</option>
                            </select>
                            <select className="border border-gray-300 rounded-md p-2 text-sm text-gray-700">
                                <option value="all">Stock</option>
                                <option value="low">Bajo</option>
                                <option value="medium">Medio</option>
                                <option value="high">Alto</option>
                            </select>
                            <button className="bg-blue-500 text-white px-4 py-2 text-xs rounded-md hover:bg-blue-600 transition-colors flex items-center">
                                <span className="material-symbols-outlined !text-xs mr-2 icon-filled">filter_alt</span>Filtrar Productos
                            </button>
                        </div>
                        <div className="w-full flex items-end mb-5 gap-2 justify-end max-md:justify-center max-md:w-full max-md:items-center max-md:flex-col">
                            <button className="bg-green-500 text-white px-4 py-2 text-xs rounded-md hover:bg-green-600 transition-colors flex items-center mb-5">
                                <span className="material-symbols-outlined !text-xs mr-2 icon-filled">add</span>Agregar Nuevo Producto
                            </button>
                        </div>
                    </div>

                    <div className="border border-gray-100 p-5 shadow-lg rounded w-full">
                    <h3 className="text-2xl font-bold inline-flex items-center text-start w-full mb-1 max-md:text-lg max-sm:text-center max-md:flex-col"><span className="material-symbols-outlined !text-4xl mr-2 max-sm:!text-3xl icon-filled">room_service</span>Listado de Productos</h3>
                    <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
                    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-md">
                        <Table
                        className="overflow-x-auto"
                        aria-label="Styled table with pagination"
                        isStriped
                        removeWrapper
                        classNames={{
                            base: "rounded-2xl shadow-md border border-gray-200",
                            table: "bg-white text-sm text-gray-700",
                            thead: "bg-gray-100 text-gray-900 font-semibold",
                            th: "px-4 py-3 text-left",
                            td: "px-4 py-3",
                            tbody: "divide-y divide-gray-200",
                            wrapper: "min-h-[222px]",
                        }}
                        bottomContent={
                            <div className="w-full py-4 flex justify-center bg-gray-50 rounded-b-2xl border-t border-gray-200">
                            <div>
                                <Pagination
                                isCompact
                                showControls
                                color="secondary"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}
                                classNames={{
                                    item: "text-sm text-gray-700 mx-1 hover:bg-gray-200 rounded-full px-3 py-1 transition-colors",
                                }}
                                />
                            </div>
                            </div>
                        }

                        >
                        <TableHeader>
                            {columnsProducts.map((column) => (
                            <TableColumn key={column.key} className="px-4 py-2 font-semibold text-gray-700">
                                {column.name}
                            </TableColumn>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {items.map((item, index) => (
                            <TableRow
                                key={item.name}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}
                            >
                                <TableCell className="px-4 py-2">{item.name}</TableCell>
                                <TableCell className="px-4 py-2">{item.sku}</TableCell>
                                <TableCell className="px-4 py-2 ">{item.category}</TableCell>
                                <TableCell className="px-4 py-2 ">{item.proveedor}</TableCell>
                                <TableCell className="px-4 py-2 ">{item.stock}</TableCell>
                                <TableCell className="px-4 py-2 ">{item.price}</TableCell>
                                <TableCell className="px-4 py-2 ">{item.sel}</TableCell>
                                <TableCell className="px-4 py-2 ">{item.min}</TableCell>
                                <TableCell className="px-4 py-2 text-right space-x-4 flex justify-center items-center">
                                <button className="text-sm text-gray-700 hover:text-blue-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base icon-filled">edit_square</span>
                                </button>
                                <button className="text-sm text-gray-700 hover:text-blue-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base icon-filled">delete    </span>
                                </button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </div>

                    </div>
                </>
            ) : (
                <>
                    <div className="border border-gray-100 p-5 shadow-lg rounded w-full mb-10 flex">
                    <input
                        type="text"
                        placeholder="Buscar Servicio"
                        className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 text-xs rounded-r-md hover:bg-blue-600 transition-colors flex items-center"
                        onClick={() => alert('Buscar Servicio')}
                    >
                        <span className="material-symbols-outlined !text-xs mr-2 icon-filled">search</span>Buscar
                    </button>
                    </div>
                    
                    <div className="w-full flex justify-center items-center mb-5 max-md:flex-col max-md:items-start max-md:gap-2">
                        <button className="bg-green-500 text-white px-4 py-2 text-xs rounded-md hover:bg-green-600 transition-colors flex items-center mb-5">
                            <span className="material-symbols-outlined !text-xs mr-2 icon-filled">add</span>Agregar Nuevo Proveedor
                        </button>
                    </div>

                    <div className="border border-gray-100 p-5 shadow-lg rounded w-full">
                    <h3 className="text-2xl font-bold inline-flex items-center text-start w-full mb-1 max-md:text-lg max-sm:text-center max-md:flex-col"><span className="material-symbols-outlined !text-4xl mr-2 max-sm:!text-3xl icon-filled">room_service</span>Listado de Proveedores</h3>
                    <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
                    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-md">
                        <Table
                        className="overflow-x-auto"
                        aria-label="Styled table with pagination"
                        isStriped
                        removeWrapper
                        classNames={{
                            base: "rounded-2xl shadow-md border border-gray-200",
                            table: "bg-white text-sm text-gray-700",
                            thead: "bg-gray-100 text-gray-900 font-semibold",
                            th: "px-4 py-3 text-left",
                            td: "px-4 py-3",
                            tbody: "divide-y divide-gray-200",
                            wrapper: "min-h-[222px]",
                        }}
                        bottomContent={
                            <div className="w-full py-4 flex justify-center bg-gray-50 rounded-b-2xl border-t border-gray-200">
                            <div>
                                <Pagination
                                isCompact
                                showControls
                                color="secondary"
                                page={page2}
                                total={pages2}
                                onChange={(page) => setPage(page)}
                                classNames={{
                                    item: "text-sm text-gray-700 mx-1 hover:bg-gray-200 rounded-full px-3 py-1 transition-colors",
                                }}
                                />
                            </div>
                            </div>
                        }

                        >
                        <TableHeader>
                            {columnsProviders.map((column) => (
                            <TableColumn key={column.key} className="px-4 py-2 font-semibold text-gray-700">
                                {column.name}
                            </TableColumn>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {items2.map((item, index) => (
                            <TableRow
                                key={item.name}
                                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}
                            >
                                <TableCell className="px-4 py-2">{item.name}</TableCell>
                                <TableCell className="px-4 py-2">{item.contact}</TableCell>
                                <TableCell className="px-4 py-2 ">{item.phone}</TableCell>
                                <TableCell className="px-4 py-2 ">{item.email}</TableCell>
                                <TableCell className="px-4 py-2 ">{item.products}</TableCell>
                                <TableCell className="px-4 py-2 text-right space-x-4 flex justify-center items-center">
                                <button className="text-sm text-gray-700 hover:text-blue-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base icon-filled">edit_square</span>
                                </button>
                                <button className="text-sm text-gray-700 hover:text-blue-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base icon-filled">delete    </span>
                                </button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </div>
                    </div>
                </>
            )}
        </section>
  );
}