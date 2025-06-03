"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function home() {
    const t = useTranslations("clientHome");
    const name = "John Doe"; // This would typically come from user data

    const quickAccess = [
        { title: "Gestión de citas", link: "/admin/appointmentManagement", description: "Ver Calendario, registrar, modificar y asignar citas", icon: "calendar_add_on"},
        { title: "Gestión de clientes", link: "/admin/clientManagement", description: "Consultar perfiles, historiales y gestionar datos", icon: "groups" },
        { title: "Colaboradores", link: "/admin/teamMembers", description: "Registrar personal, asignar roles y horarios", icon: "person" },
        { title: "Inventario y Proveedores", link: "/admin/inventory", description: "Administrar productos, stock y datos de proveedores", icon: "box" },
        { title: "Servicios y Precios", link: "/admin/servicesPrices", description: "Definir y actualizar catálogo de servicios y tarifas", icon: "sell" },
        { title: "Gestión de Membresias", link: "/admin/memberships", description: "Crear planes, activar y gestionar membresías de clientes", icon: "contacts" },
        { title: "Reportes y Estadisticas", link: "#", description: "Visualizar el rendimiento y datos clave del SPA", icon: "monitoring" },
        { title: "Configuración General", link: "#", description: "Ajustes del sistema y parámetros operativos", icon: "settings" }
    ];

    const quickAlerts = [
        { title: "Citas para hoy", link: "/admin/appointmentManagement", description: "[XX]", icon: "pending_actions" },
        { title: "Clientes Nuevos", link: "/admin/clientManagement", description: "[YY]", icon: "new_releases" },
        { title: "Inventario Bajo", link: "/admin/inventory", description: "[Z] ítems", icon: "inventory" },
    ];

    return (
        <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5">
            <h1 className="text-4xl font-bold flex items-center mb-3 text-center max-md:text-2xl">Dashboard de administración</h1>
            <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Bienvenido, [Nombre del Administrador]. Gestiona todos los aspectos de EXOTICSPA desde aqui</p>
            <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
            <div className="grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1 mb-10 max-md:grid-cols-2">
                {quickAccess.map((item, index) => (
                    <Link href={item.link} key={index} className="bg-white shadow-2xl p-4 rounded-lg hover:bg-black/10 transition-colors cursor-pointer flex flex-col items-start">
                        <span className="material-symbols-outlined icon-filled !text-4xl block w-full text-center mb-4 text-blue-500">{item.icon}</span>
                        <h4 className="text-base font-bold text-center w-full mb-1">{item.title}</h4>
                        <p className="text-xs text-center w-full">{item.description}</p>
                    </Link>
                ))}
            </div>
            <h3 className="text-2xl font-bold inline-flex items-center text-start w-full mb-1 max-md:text-lg max-sm:text-center max-md:flex-col"><span className="material-symbols-outlined !text-4xl mr-2 max-sm:!text-3xl icon-filled">notifications</span>Resumen Rápido y Alertas</h3>
            <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
            <div className="grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1 mb-10 max-md:grid-cols-2">
                {quickAlerts.map((item, index) => (
                    <Link href={item.link} key={index} className="bg-white shadow-2xl p-4 rounded-lg hover:bg-black/10 transition-colors cursor-pointer flex flex-col items-start">
                        <span className="material-symbols-outlined icon-filled !text-4xl block w-full text-center mb-4 text-blue-500">{item.icon}</span>
                        <h4 className="text-base font-bold text-center w-full mb-1">{item.title}</h4>
                        <p className="text-xs text-center w-full">{item.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}