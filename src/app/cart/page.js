import Image from "next/image";
export default function Cart() {
    return (
        <section className="relative min-h-screen bg-cover bg-center p-10"
            style={{ backgroundImage: "url('/bg-sign.jpg')" }}
        >
            {/* Capa de opacidad */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Contenido que no se ve afectado por la opacidad */}
            <div className="relative flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold">CART</h1>
                <div className="text-2xl mt-4 w-[70vw] text-center bg-[#f5f5f5]/70 text-black p-5 rounded-lg shadow-lg flex gap-4"> 
                    <div className="w-[60%]">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="flex items-center gap-3 bg-[#393535] mb-2 rounded-lg shadow-md">
                            <Image 
                              src="/chaquetaSinFondo.png" 
                              alt="Product" 
                              width={500} 
                              height={0} 
                              className="w-36 h-auto object-cover rounded-lg border-2 border-[#524f4f] p-1" 
                            />
                            {/* Este div es el que debe ocupar el espacio restante */}
                            <div className="flex-1 flex flex-col justify-between p-2">
                                <div className="flex justify-between items-center gap-2 pr-2.5">
                                    <h1 className="text-white">title</h1>
                                    <span className="text-white">$3000</span>
                                </div>
                                <div>
                                    <p className="text-white">description</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-white">Cantidad: 1</span>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                          </div>
                          
                        ))}
                    </div>
                    <div className="w-[40%]">
                        <div className="flex flex-col gap-2">
                            <div className="w-full bg-[#393535] h-[40vh]">dos</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}