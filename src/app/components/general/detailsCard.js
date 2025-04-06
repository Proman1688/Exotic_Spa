export default function DetailsCard({ id, name, price, cardImage, isNew, toggleFavorite, favorites, details, closeDetails }) {
    if (!details) return null; // No renderiza si no está activo
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-10 cursor-default overflow-y-auto touch-none" >
            <div className="bg-[#181818] p-2 pl-2 rounded-lg relative z-20 text-white w-3xl max-md:w-2xl max-h-[150vh] overflow-y-auto flex justify-center items-center max-sm:flex-col max-sm:h-full max-sm:bg-black" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col justify-center w-1/3 h-full mr-2 max-sm:h-[70%] max-sm:w-full">
                
                    <span className="material-symbols-outlined bg-white text-black px-1 py-1 rounded-4xl cursor-pointer w-8 flex items-center justify-center" onClick={(e) => { e.stopPropagation(); closeDetails(); }}>arrow_back</span>

                    <img className="w-[90%] mx-auto max-sm:w-[50%] max-sm:border-2 max-sm:border-amber-50 max-sm:rounded-2xl max-sm:p-3" src={cardImage} alt={name}/>

                    <h2 className="text-2xl font-bold mx-auto mt-5">{price}</h2>

                    <div className="flex justify-between items-center mt-2 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:bg-[#181818] max-sm:p-2 max-sm:rounded-t-lg w-full max-sm:h-16 max-sm:gap-2">
                        <span className="material-symbols-outlined bg-white text-black px-1 py-1 rounded-4xl cursor-pointer w-8 flex items-center justify-center">arrow_back</span>
                        <div className="flex gap-1 pr-2 items-center rounded-2xl border-2 border-green-500 ">
                            <span className="material-symbols-outlined bg-white text-black px-1 py-1 rounded-4xl cursor-pointer w-8 flex items-center justify-center">arrow_forward</span>
                            <p className="text-[10px]">ingresar al carrito</p>
                        </div>
                        <span className="material-symbols-outlined bg-white text-black px-1 py-1 rounded-4xl cursor-pointer w-8 flex items-center justify-center">arrow_forward</span>
                    </div>

                </div>
                <div className="flex flex-col justify-between w-2/3 h-[80%] p-10 border-l-4 border-white/60 max-sm:w-full max-sm:h-[30%] max-sm:p-2 max-sm:border-l-0 max-sm:border-t-4 max-sm:border-t-white/60 max-sm:pb-32">

                    <h1 className="text-3xl font-bold uppercase max-sm:text-xl">{name}</h1>
                    <ul className="flex gap-2 my-2 text-xs w-full justify-between max-md:mb-2 max-sm:text-[10px] max-sm:gap-0">
                        <li className="cursor-pointer">DETAILS</li>
                        <li className="cursor-pointer">MATERIALS</li>
                        <li className="cursor-pointer">SIZE GUIDE</li>
                        <li className="cursor-pointer">SHIPPING</li>
                    </ul>
                    <p className="text-xs mb-2 max-md:text-[10px] max-md:mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3 className="text-2xs max-sm:text-xs">SIZE</h3>
                    <ul className="flex gap-10 my-2 mb-2 w-full text-xs">
                        <li className="cursor-pointer">XS</li>
                        <li className="cursor-pointer">S</li>
                        <li className="cursor-pointer">M</li>
                        <li className="cursor-pointer">L</li>
                        <li className="cursor-pointer">XL</li>
                    </ul>
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
