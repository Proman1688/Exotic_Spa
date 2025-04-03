import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección 1: Logo y Descripción */}
        <div>
          <img src="/logo.png" alt="Facebook" className="w-30 h-a hover:scale-110 transition" />
          <p className="text-gray-400 mt-2">Tu mejor opción en moda online.</p>
        </div>

        {/* Sección 2: Enlaces Rápidos */}
        <div>
          <h3 className="text-lg font-semibold">Enlaces</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/" className="hover:text-gray-300">Inicio</Link></li>
            <li><Link href="/tienda" className="hover:text-gray-300">Tienda</Link></li>
            <li><Link href="/contacto" className="hover:text-gray-300">Contacto</Link></li>
          </ul>
        </div>

        {/* Sección 3: Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#"><img src="/github.svg" alt="Facebook" className="w-6 h-6 hover:scale-110 transition" /></a>
            <a href="#"><img src="/instagram.svg" alt="Instagram" className="w-6 h-6 hover:scale-110 transition" /></a>
            <a href="#"><img src="/linkedin.svg" alt="Twitter" className="w-6 h-6 hover:scale-110 transition" /></a>
          </div>
        </div>
      </div>

      {/* Sección de Derechos de Autor */}
      <div className="mt-8 text-center text-gray-500">
        © 2025 JADOS. Todos los derechos reservados.
      </div>
    </footer>
  );
}
