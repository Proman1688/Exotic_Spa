import Image from "next/image";

// Componente DetailsCard recibe varias props para mostrar detalles de un producto específico.
export default function DetailsCard({ id, name, price, cardImages, isNew, toggleFavorite, favorites, details, closeDetails }) {
    // Si no hay detalles (details === false o null), no renderiza nada.
    if (!details) return null; 

    return (
        // Contenedor principal que cubre toda la pantalla (fixed, inset-0)
        // Centra vertical y horizontalmente el contenido con flexbox
        // Fondo semi-transparente negro para overlay
        // z-10 para asegurarse que esté sobre otros elementos
        // overflow-y-auto permite scroll vertical si el contenido es alto
        // touch-none evita eventos táctiles en el overlay (no sé si es intencional)
        <div className="overflow-x-hidden fixed inset-0 flex items-center justify-center bg-black/80 z-10 cursor-default overflow-y-auto touch-none" >
            
            {/* 
              Contenedor interno para el contenido de la tarjeta:
              - Fondo oscuro #181818, con padding, bordes redondeados, texto blanco
              - relative para control de posicionamiento interno
              - z-20 para estar encima del overlay
              - ancho fijo con clases custom (w-5xl, max-md:w-4xl)
              - altura máxima limitada a 150vh para scroll vertical
              - flex para centrar elementos hijos
              - en pantallas pequeñas (max-sm), cambia el layout a columna, altura completa y fondo negro sólido
              - onClick detiene la propagación para que clicks dentro no cierren la modal (suponiendo que fuera así)
            */}
            <div className="bg-[#181818] overflow-x-hidden p-5 rounded-lg relative z-20 text-white w-5xl max-md:w-4xl max-h-[150vh] overflow-y-auto flex justify-center items-center max-sm:flex-col max-sm:h-full max-sm:bg-black" onClick={(e) => e.stopPropagation()}>
                
                {/* Columna izquierda: imagen, botón volver, precio */}
                <div className="flex flex-col justify-center w-1/3 h-full mr-2 max-sm:h-[70%] max-sm:w-full">
                    
                    {/* 
                      Botón volver con icono material-symbols
                      - Fondo blanco, texto negro, tamaño pequeño
                      - Rounded para apariencia circular
                      - cursor-pointer para indicar que es clickable
                      - onClick: detiene propagación y llama closeDetails para cerrar la tarjeta
                    */}
                    <span 
                      className="material-symbols-outlined bg-white text-black px-1 py-1 rounded-4xl cursor-pointer w-8 flex items-center justify-center" 
                      onClick={(e) => { e.stopPropagation(); closeDetails(); }}
                    >
                      arrow_back
                    </span>

                    {/* Imagen principal del producto */}
                    <Image 
                      width={100} 
                      height={100} 
                      className="w-[90%] mx-auto max-sm:w-[80%] max-sm:border-amber-50 max-sm:rounded-2xl max-sm:p-3" 
                      src={cardImages} 
                      alt={name}
                    />

                    {/* Precio del producto */}
                    <h2 className="text-2xl font-bold mx-auto mt-5">{price}</h2>

                    {/* 
                      Barra inferior con botones para navegar o agregar al carrito
                      - En móviles (max-sm) está fija en la parte inferior con fondo oscuro
                      - Espaciado y diseño responsivo
                    */}
                    <div className="flex justify-between items-center mt-2 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:bg-[#181818] max-sm:p-2 max-sm:rounded-t-lg w-full max-sm:h-16 max-sm:gap-2">
                        
                        {/* Botón flecha atrás */}
                        <span className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer mr-5">
                          <span className="material-symbols-outlined text-[24px] leading-none">arrow_back</span>
                        </span>

                        {/* Botón ingresar al carrito con texto y flecha adelante */}
                        <div className="flex gap-1 pr-2 items-center rounded-full border-3 border-green-500 ">
                            <span className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
                                <span className="material-symbols-outlined text-[24px] leading-none">arrow_forward</span>
                            </span>
                            <p className="text-[12px] text-bold ">Ingresar al carrito</p>
                        </div>

                        {/* Botón flecha adelante */}
                        <span className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer ml-5">
                          <span className="material-symbols-outlined text-[24px] leading-none">arrow_forward</span>
                        </span>

                    </div>
                </div>

                {/* Columna derecha: detalles del producto */}
                <div className="flex flex-col justify-between w-2/3 h-[90%] p-10 border-l-4 border-white/60 max-sm:w-full max-sm:h-[30%] max-sm:p-2 max-sm:border-l-0 max-sm:border-t-4 max-sm:border-t-white/60 max-sm:pb-32 mx-10">

                    {/* Nombre del producto */}
                    <h1 className="text-3xl font-bold uppercase max-sm:text-xl mb-5">{name}</h1>

                    {/* Navegación de pestañas (no funcional, solo visual) */}
                    <ul className="flex gap-2 my-2 text-xs w-full justify-between max-md:mb-2 max-sm:text-[10px] max-sm:gap-0">
                        <li className="cursor-pointer">DETAILS</li>
                        <li className="cursor-pointer">MATERIALS</li>
                        <li className="cursor-pointer">SIZE GUIDE</li>
                        <li className="cursor-pointer">SHIPPING</li>
                    </ul>

                    {/* Descripción de ejemplo (placeholder) */}
                    <p className="text-xs mb-2 max-md:text-[10px] max-md:mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    {/* Sección tallas disponibles */}
                    <h3 className="text-2xs max-sm:text-xs">SIZE</h3>
                    <ul className="flex gap-10 my-2 mb-2 w-full text-xs">
                        <li className="cursor-pointer">XS</li>
                        <li className="cursor-pointer">S</li>
                        <li className="cursor-pointer">M</li>
                        <li className="cursor-pointer">L</li>
                        <li className="cursor-pointer">XL</li>
                    </ul>

                    {/* Sección colores disponibles */}
                    <h3>COLOR</h3>
                    <ul className="flex gap-2 my-2 max-sm:pb-30">
                        <li className="cursor-pointer">RED</li>
                        <li className="cursor-pointer">BLUE</li>
                        <li className="cursor-pointer">GREEN</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}
