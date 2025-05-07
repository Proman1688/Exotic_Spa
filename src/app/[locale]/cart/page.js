import Head from "next/head";
import Image from "next/image";
export default function Cart() {
    return (
        <>
        <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=add" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=remove" />
        </Head>
        <section className="relative min-h-screen bg-cover bg-center p-10"
            style={{ backgroundImage: "url('/bg-sign.jpg')" }}
        >
            {/* Capa de opacidad */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Contenido que no se ve afectado por la opacidad */}
            <div className="relative flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold">CART</h1>
                <div className="text-2xl mt-4 w-[70vw] bg-[#f5f5f5]/70 text-black p-5 rounded-lg shadow-lg flex gap-4 max-lg:text-base max-lg:w-[90vw] max-lg:p-2 max-md:flex-col max-md:gap-2 max-md:w-[70vw]"> 
                    <div className="w-[60%] max-md:w-full">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="flex items-center gap-3 bg-[#393535] mb-2 rounded-lg shadow-md max-sm:flex-col max-sm:gap-2 max-sm:p-2">
                            <Image 
                              src="/chaquetaSinFondo.png" 
                              alt="Product" 
                              width={500} 
                              height={0} 
                              className="w-36 h-auto object-cover rounded-lg border-2 border-[#524f4f] p-1" 
                            />
                            {/* Este div es el que debe ocupar el espacio restante */}
                            <div className="flex-1 flex flex-col justify-between p-2 gap-4">
                                <div className="flex justify-between items-center gap-2 pr-2.5 max-sm:flex-col max-sm:gap-1">
                                    <h1 className="text-white">Message Basket Bag</h1>
                                    <span className="text-white">$3000</span>
                                </div>
                                <div className="flex flex-col gap-2 text-left text-sm max-lg:text-xs">
                                    <p className="text-white">COLOR: Blanco</p>
                                    <p className="text-white mt-1">TALLA: M</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2 max-sm: mr-3">
                                            <span className="text-white">CANTIDAD:</span>
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined bg-white rounded-2xl !text-sm max-lg:!text-xs cursor-pointer">add</span>
                                                <span className="text-white px-2">1</span>
                                                <span className="material-symbols-outlined bg-white rounded-2xl !text-sm max-lg:!text-xs cursor-pointer">remove</span>
                                            </div>
                                        </div>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer max-lg:px-2 max-lg:py-1">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                          </div>
                          
                        ))}
                    </div>
                    <div className="w-[40%] max-md:w-full">
                        <div className="flex flex-col gap-2 max-sm:w-full">
                            <div className="w-full bg-[#393535] h-[40vh] text-white p-5 text-center">
                                <h1>DELIVERY SUMMARY</h1>
                                <div className="h-[1px] w-full bg-white mt-2"></div>
                                <div className="flex justify-between items-center mt-4 text-lg">
                                    <span>SUBTOTAL</span>
                                    <span>$3000</span>
                                </div>
                                <div className="flex justify-between items-center text-lg">
                                    <span>ENVIO</span>
                                    <span>$3000</span>
                                </div>
                                <div className="flex justify-between items-center text-lg">
                                    <span>IVA</span>
                                    <span>$3000</span>
                                </div>
                                <div className="h-[1.5px] w-full bg-white mt-2 mb-4"></div>
                                <span className="text-white">Total: $3000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}