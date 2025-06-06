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

export default function clientManagement() {

  const clients = useAsyncList({
    async load({ signal }) {
      const res = await fetch("/api/auth/clienta", { signal });
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

  const columns = [
    { name: "Nombre Completo", key: "name" },
    { name: "Correo Electronico", key: "email" },
    { name: "Telefono", key: "phone" },
    { name: "Fecha Registro", key: "date" },
    { name: "N° Citas", key: "appointment" },
    { name: "Membresia", key: "membership" },
    { name: "Acciones", key: "actions" }
  ];

  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(clients.items.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return clients.items.slice(start, end);
  }, [page, clients]);

  return (
    <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
            <h1 className="text-4xl font-bold flex items-center mb-3 text-center max-md:text-2xl max-md:flex-col"><span className="material-symbols-outlined !text-5xl mr-2 max-sm:!text-3xl icon-filled">groups</span>Gestion de clientes</h1>
            <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">administra la informacion y el historial de tus clientes</p>
            <div className="border border-gray-100 p-5 shadow-lg rounded w-full mb-10 flex">
              <input
                type="text"
                placeholder="Buscar Cliente"
                className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 text-xs rounded-r-md hover:bg-blue-600 transition-colors flex items-center"
                onClick={() => alert('Buscar Cliente')}
              >
                <span className="material-symbols-outlined !text-xs mr-2 icon-filled">search</span>Buscar
              </button>
            </div>
            
           <div className="w-full flex justify-between items-center mb-5 max-md:flex-col max-md:items-start max-md:gap-2">
                <div className="w-full flex items-end mb-5 gap-2 max-md:mb-0 max-md:w-full max-md:items-center max-md:flex-col">
                    <select className="border border-gray-300 rounded-md p-2 text-sm text-gray-700">
                        <option value="all">Todos</option>
                        <option value="premium">Premium</option>
                        <option value="basic">Básica</option>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                    </select>
                    <button className="bg-blue-500 text-white px-4 py-2 text-xs rounded-md hover:bg-blue-600 transition-colors flex items-center">
                        <span className="material-symbols-outlined !text-xs mr-2 icon-filled">filter_alt</span>Filtrar Clientes
                    </button>
                </div>
                <div className="w-full flex items-end mb-5 gap-2 justify-end max-md:justify-center max-md:w-full max-md:items-center max-md:flex-col">
                    <button className="bg-green-500 text-white px-4 py-2 text-xs rounded-md hover:bg-green-600 transition-colors flex items-center mb-5">
                        <span className="material-symbols-outlined !text-xs mr-2 icon-filled">add</span>Agregar Cliente
                    </button>
                </div>
            </div>

            <div className="border border-gray-100 p-5 shadow-lg rounded w-full">
              <h3 className="text-2xl font-bold inline-flex items-center text-start w-full mb-1 max-md:text-lg max-sm:text-center max-md:flex-col"><span className="material-symbols-outlined !text-4xl mr-2 max-sm:!text-3xl icon-filled">history</span>Historial de Clientes</h3>
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
                    {columns.map((column) => (
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
                        <TableCell className="px-4 py-2">{item.email}</TableCell>
                        <TableCell className="px-4 py-2 ">{item.phone}</TableCell>
                        <TableCell className="px-4 py-2 ">{item.date}</TableCell>
                        <TableCell className="px-4 py-2 ">{item.appointment}</TableCell>
                        <TableCell className="px-4 py-2 ">{item.membership}</TableCell>
                        <TableCell className="px-4 py-2 text-right space-x-4 flex justify-center items-center">
                          <button className="text-sm text-gray-700 hover:text-blue-500 flex items-center gap-1">
                            <span className="material-symbols-outlined text-base icon-filled">visibility</span>
                          </button>
                          <button className="text-sm text-gray-700 hover:text-blue-500 flex items-center gap-1">
                            <span className="material-symbols-outlined text-base icon-filled">history</span>
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
        </section>
  );
}