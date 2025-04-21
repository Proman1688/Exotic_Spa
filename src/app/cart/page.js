export default function Cart() {
    return (
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/bg-sign.jpg')" }}
        >
            {/* Capa de opacidad */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Contenido que no se ve afectado por la opacidad */}
            <div className="relative flex items-center justify-center h-screen text-white">
                <h1 className="text-4xl font-bold">CART</h1>
            </div>
        </div>
    );
}