export default function DetailsCard({ id, name, price, cardImage, isNew, toggleFavorite, favorites, details, closeDetails }) {
    if (!details) return null; // No renderiza si no está activo
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10" >
            <div className="bg-white p-4 rounded-lg relative z-20 text-black" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{price}</p>
                <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mt-4" onClick={(e) => { e.stopPropagation(); closeDetails(); }}>Close</button>
            </div>
        </div>
    );
}
