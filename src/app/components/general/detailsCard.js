export default function DetailsCard({ id, name, price, cardImage, isNew, toggleFavorite, favorites, details, closeDetails }) {
    if (!details) return null; // No renderiza si no está activo
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-10 cursor-default" >
            <div className="bg-[#181818] p-2 pl-2 rounded-lg relative z-20 text-white w-3xl h-3/4 flex justify-between" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col justify-center w-1/3 h-full mr-2">
                    <span class="material-symbols-outlined bg-white text-black px-2 py-1 rounded-4xl cursor-pointer w-10 mt-[-20px]" onClick={(e) => { e.stopPropagation(); closeDetails(); }}>arrow_back</span>
                    <img className="w-[90%] mx-auto" src={cardImage} alt={name}/>
                    <h2 className="text-2xl font-bold mx-auto mt-5">{price}</h2>
                    <div className="flex justify-between items-center mt-2">
                        <span className="material-symbols-outlined bg-white text-black px-2 py-1 rounded-4xl cursor-pointer w-10">arrow_back</span>
                        <span className="material-symbols-outlined bg-white text-black px-2 py-1 rounded-4xl cursor-pointer w-10">arrow_forward</span>
                        <span className="material-symbols-outlined bg-white text-black px-2 py-1 rounded-4xl cursor-pointer w-10">arrow_forward</span>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-2/3 h-full p-10 border-l-4 border-white/60">
                    <h1 className="text-3xl font-bold uppercase">{name}</h1>
                    <ul className="flex gap-2 mt-2 text-xs w-full justify-between">
                        <li className="cursor-pointer">DETAILS</li>
                        <li className="cursor-pointer">MATERIALS</li>
                        <li className="cursor-pointer">SIZE GUIDE</li>
                        <li className="cursor-pointer">SHIPPING</li>
                    </ul>
                    <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3 className="text-2xs">SIZE</h3>
                    <ul className="flex gap-10 mt-2 mb-2 w-full text-xs">
                        <li className="cursor-pointer">XS</li>
                        <li className="cursor-pointer">S</li>
                        <li className="cursor-pointer">M</li>
                        <li className="cursor-pointer">L</li>
                        <li className="cursor-pointer">XL</li>
                    </ul>
                    <h3>COLOR</h3>
                    <ul className="flex gap-2 mt-2">
                        <li className="cursor-pointer">RED</li>
                        <li className="cursor-pointer">BLUE</li>
                        <li className="cursor-pointer">GREEN</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
