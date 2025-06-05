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
import { useState, useMemo } from "react";

export default function teamMembers() {

const colleagues = [
    { name: "Juan Perez", rol: "Gerente", email: "juanp@gmail.com", phone: "1234567890", state: "Activo" },
    { name: "Maria Gomez", rol: "Recepcionista", email: "mariag@gmail.com", phone: "0987654321", state: "Activo" },
    { name: "Carlos Ruiz", rol: "Terapeuta", email: "carlosr@gmail.com", phone: "1122334455", state: "Inactivo" },
    { name: "Ana Torres", rol: "Gerente", email: "anatorres@gmail.com", phone: "2233445566", state: "Activo" },
    { name: "Luis Fernandez", rol: "Recepcionista", email: "luisf@gmail.com", phone: "3344556677", state: "Activo" },
    { name: "Sofia Martinez", rol: "Terapeuta", email: "sofiam@gmail.com", phone: "4455667788", state: "Activo" },
    { name: "Pedro Sanchez", rol: "Gerente", email: "pedros@gmail.com", phone: "5566778899", state: "Inactivo" },
    { name: "Lucia Castro", rol: "Recepcionista", email: "luciac@gmail.com", phone: "6677889900", state: "Activo" },
    { name: "Miguel Lopez", rol: "Terapeuta", email: "miguell@gmail.com", phone: "7788990011", state: "Activo" },
    { name: "Valeria Diaz", rol: "Recepcionista", email: "valeriad@gmail.com", phone: "8899001122", state: "Inactivo" }
];

  const columns = [
    { name: "Nombre Completo", key: "name" },
    { name: "Cargo / Rol", key: "rol" },
    { name: "Correo Electronico", key: "email" },
    { name: "Telefono", key: "phone" },
    { name: "Estado", key: "state" },
    { name: "Acciones", key: "actions" }
  ];

  const [addColleague, setAddColleague] = useState(false);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(colleagues.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return colleagues.slice(start, end);
  }, [page, colleagues]);

  return (
    <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
      <h1 className="text-4xl font-bold flex items-center mb-3 text-center max-md:text-2xl max-md:flex-col"><span className="material-symbols-outlined !text-5xl mr-2 max-sm:!text-3xl icon-filled">person</span>Gestion de colaboradores</h1>
      <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Administra el personal, sus roles, horarios y permisos</p>
      <div className="border border-gray-100 p-5 shadow-lg rounded w-full mb-10 flex">
        <input
          type="text"
          placeholder="Buscar colaborador"
          className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 text-xs rounded-r-md hover:bg-blue-600 transition-colors flex items-center"
          onClick={() => alert('Buscar colaborador')}
        >
          <span className="material-symbols-outlined !text-xs mr-2 icon-filled">search</span>Buscar
        </button>
      </div>
      
      <div className="w-full flex justify-between items-center mb-5 max-md:flex-col max-md:items-start max-md:gap-2">
          <div className="w-full flex items-end mb-5 gap-2 max-md:mb-0 max-md:w-full max-md:items-center max-md:flex-col">
              <select className="border border-gray-300 rounded-md p-2 text-sm text-gray-700">
                  <option value="all">Todos los roles</option>
                  <option value="manager">Gerente</option>
                  <option value="receptionist">Recepcionista</option>
                  <option value="therapist">Terapeuta</option>
              </select>
              <button className="bg-blue-500 text-white px-4 py-2 text-xs rounded-md hover:bg-blue-600 transition-colors flex items-center">
                  <span className="material-symbols-outlined !text-xs mr-2 icon-filled">filter_alt</span>Filtrar Colaboradores
              </button>
          </div>
          <div className="w-full flex items-end mb-5 gap-2 justify-end max-md:justify-center max-md:w-full max-md:items-center max-md:flex-col">
              <button onClick={() => setAddColleague(true)} className="bg-green-500 text-white px-4 py-2 text-xs rounded-md hover:bg-green-600 transition-colors flex items-center mb-5">
                  <span className="material-symbols-outlined !text-xs mr-2 icon-filled">add</span>Agregar colaborador
              </button>
          </div>
      </div>

      <div className="border border-gray-100 p-5 shadow-lg rounded w-full">
        <h3 className="text-2xl font-bold inline-flex items-center text-start w-full mb-1 max-md:text-lg max-sm:text-center max-md:flex-col">Listado de colaboradores</h3>
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
                  <TableCell className="px-4 py-2">{item.rol}</TableCell>
                  <TableCell className="px-4 py-2 ">{item.email}</TableCell>
                  <TableCell className="px-4 py-2 ">{item.phone}</TableCell>
                  <TableCell className="px-4 py-2 ">{item.state}</TableCell>
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

      {addColleague && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative max-h-[500px] overflow-auto">
            <button className="absolute top-4 right-4 text-black text-2xl" onClick={() => setAddColleague(false)}>
              <span className="material-symbols-outlined icon-filled">close</span>
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Agregar Colaborador</h2>
            <form className="space-y-4">
              <div className="w-full flex gap-4 justify-between max-md:flex-col">
                <div className="w-full">
                <h1 className="text-base font-bold flex items-center mb-1 text-center max-md:text-2xl max-md:flex-col"><span className="material-symbols-outlined max-sm:!text-base icon-filled">account_circle</span>Datos Personales</h1>
                <div className="w-full h-[0.5px] bg-black/40 mb-4"></div>

                <label className="block text-xs font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  className="w-full p-2 text-xs border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="block text-xs font-medium text-gray-700 mb-1">Cargo / Rol</label>
                <input
                  type="text"
                  placeholder="Correo Electronico"
                  className="w-full p-2 text-xs border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="block text-xs font-medium text-gray-700 mb-1">Correo Electronico</label>
                <input
                  type="text"
                  placeholder="Telefono"
                  className="w-full p-2 text-xs border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="block text-xs font-medium text-gray-700 mb-1">Telefono</label>
                <input
                  type="text"
                  placeholder="contraseña"
                  className="w-full p-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full">
                <h1 className="text-base font-bold flex items-center mb-1 text-center max-md:text-2xl max-md:flex-col"><span className="material-symbols-outlined mr-2 max-sm:!text-base icon-filled">business_center</span>Rol y Horarios</h1>
                <div className="w-full h-[0.5px] bg-black/40 mb-4"></div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Rol</label>
                <select className="w-full p-2 text-xs border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="manager">Gerente</option>
                  <option value="receptionist">Recepcionista</option>
                  <option value="therapist">Terapeuta</option>
                </select>
                <label className="block text-xs font-medium text-gray-700 mb-1">Horario</label>
                <textarea
                  placeholder="Horario de trabajo"
                  className="w-full p-2 text-xs border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <label className="block text-xs font-medium text-gray-700 mb-1">Estado</label>
                <select className="w-full p-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="active">Activo</option>
                  <option value="inactive">Inactivo</option>
                </select>
              </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 text-xs rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
                onClick={() => {
                  alert('Colaborador agregado');
                  setAddColleague(false);
                }}
              >
                <span className="material-symbols-outlined !text-xs mr-2 icon-filled">save</span>Guardar Colaborador
              </button>
              <button
                type="button"
                className="w-full bg-gray-300 text-gray-700 px-4 py-2 text-xs rounded-md hover:bg-gray-400 transition-colors flex items-center justify-center"
                onClick={() => setAddColleague(false)}
              >
                <span className="material-symbols-outlined !text-xs mr-2 icon-filled">cancel</span>Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
  </section>
  );
}