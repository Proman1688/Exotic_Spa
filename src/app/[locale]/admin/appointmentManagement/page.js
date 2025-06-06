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
import CalendarioDetalle from "../../components/general/Calendar";
export default function appointmentManagement() {

  const columns = [
    { name: "Hora", key: "date" },
    { name: "Cliente", key: "client" },
    { name: "Servicio", key: "service" },
    { name: "Colaborador", key: "collaborator" },
    { name: "Estado", key: "state" },
    { name: "Acciones", key: "actions" }
  ];  

  const appointments = useAsyncList({
    async load({ signal }) {
      const res = await fetch("/api/auth/appointments", { signal });
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

  const [page, setPage] = useState(1);
    const rowsPerPage = 4;
  
    const pages = Math.ceil(appointments.items.length / rowsPerPage);
  
    const items = useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return appointments.items.slice(start, end);
    }, [page, appointments]);

  const eventos = [
    {
      title: 'Masaje - Elena V.',
      start: '2025-06-02T09:00:00',
      end: '2025-06-02T10:00:00',
    },
    {
      title: 'Facial - Carlos R.',
      start: '2025-06-02T10:30:00',
      end: '2025-06-02T12:00:00',
    },
    {
      title: 'Manicura - Laura M.',
      start: '2025-06-03T14:00:00',
      end: '2025-06-03T14:45:00',
    },
    {
      title: 'Depilación - Ana G.',
      start: '2025-06-03T15:00:00',
      end: '2025-06-03T15:30:00',
    },
  ];
  return (
    <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5">
            <h1 className="text-4xl font-bold flex items-center mb-3 text-center max-md:text-2xl max-md:flex-col"><span className="material-symbols-outlined !text-5xl mr-2 max-sm:!text-3xl icon-filled">calendar_month</span>Gestion de citas del SPA</h1>
            <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Aqui puedes ver todas tus citas programadas por mes, semana o dia</p>
            <div className="border border-gray-100 p-5 shadow-lg rounded w-full mb-10 flex">
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 text-xs rounded-r-md hover:bg-blue-600 transition-colors flex items-center"
                onClick={() => alert('Ir a fecha')}
              >
                <span className="material-symbols-outlined !text-xs mr-2 icon-filled">search</span>Buscar
              </button>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 text-xs rounded-md hover:bg-blue-600 transition-colors mb-5 flex items-center"
              onClick={() => alert('Registrar nueva cita')}
            >
                <span className="material-symbols-outlined !text-xs mr-2 icon-filled">add</span>Registrar nueva cita
            </button>
            <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>

            <div className="border border-gray-100 p-5 shadow-lg rounded w-full mb-10">
              <CalendarioDetalle eventos={eventos}/>
            </div>
            
            <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-md p-5 mb-10">
                <h3 className="text-2xl font-bold inline-flex items-center text-start w-full mb-1 max-md:text-lg max-sm:text-center max-md:flex-col"><span className="material-symbols-outlined !text-4xl mr-2 max-sm:!text-3xl icon-filled">list</span>Proximas Citas</h3>
                <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
                <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-md">
                <Table
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
                        <TableCell className="px-4 py-2">{item.date}</TableCell>
                        <TableCell className="px-4 py-2">{item.client}</TableCell>
                        <TableCell className="px-4 py-2">{item.service}</TableCell>
                        <TableCell className="px-4 py-2">{item.collaborator}</TableCell>
                        <TableCell className="px-4 py-2 ">{item.state}</TableCell>
                        <TableCell className="px-4 py-2 text-right space-x-4 flex justify-center items-center">
                          <button className="text-sm text-gray-700 hover:text-blue-500 flex items-center gap-1">
                            <span className="material-symbols-outlined text-base icon-filled">visibility</span>
                            Ver
                          </button>
                          <button className="text-sm text-gray-700 hover:text-blue-500 flex items-center gap-1">
                            <span className="material-symbols-outlined text-base icon-filled">edit_square</span>
                            Editar
                          </button>
                          <button className="text-sm text-gray-700 hover:text-blue-500 flex items-center gap-1">
                            <span className="material-symbols-outlined text-base icon-filled">delete    </span>
                            Borrar
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