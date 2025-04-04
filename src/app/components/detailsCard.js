export default function DetailsCard({ id, name, price, cardImage, isNew, toggleFavorite, favorites, details, closeDetails }) {
    if (!details) return null; // No renderiza si no está activo
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-10" >
            <div className="bg-white p-4 rounded-lg relative z-20 text-black w-3xl h-3/4 flex" onClick={(e) => e.stopPropagation()}>
                <div>
                    <img src={cardImage} alt={name}/>
                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-2xl font-bold">{price}</h2>
                    </div>
                </div>
                <div>
                    <h1>{name}</h1>
                    <ul className="flex gap-2 mt-2">
                        <li>DETAILS</li>
                        <li>MATERIALS</li>
                        <li>SIZE GUIDE</li>
                        <li>SHIPPING</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3>SIZE</h3>
                    <ul className="flex gap-2 mt-2">
                        <li>XS</li>
                        <li>S</li>
                        <li>M</li>
                        <li>L</li>
                        <li>XL</li>
                    </ul>
                    <h3>COLOR</h3>
                    <ul className="flex gap-2 mt-2">
                        <li>RED</li>
                        <li>BLUE</li>
                        <li>GREEN</li>
                    </ul>
                </div>
                <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mt-4" onClick={(e) => { e.stopPropagation(); closeDetails(); }}>Close</button>
            </div>
        </div>
    );
}
