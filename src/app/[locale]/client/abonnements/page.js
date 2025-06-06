"use client";
import ChatFlotante from '../../chatbot/ChatFlotante/page';

export default function home() {

    const abonnements = [
        {
            title: "Plan Bronce Relax",
            color: "bg-[#c48b3b]",
            price: "$19.99/mes",
            features: ["Descuento del 10%", "Acceso a eventos exclusivos", "Soporte prioritario"]
        },
        {
            title: "Plan Plata Bienestar",
            color: "bg-gray-400",
            price: "$39.99/mes",
            features: ["Descuento del 20%", "Acceso a eventos VIP", "Soporte prioritario"]
        },
        {
            title: "Plan Oro Estelar",
            color: "bg-[#fbd407]",
            price: "$59.99/mes",
            features: ["Descuento del 30%", "Acceso a eventos exclusivos", "Soporte personalizado"]
        }
    ];

    return (
        <>
            <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
                <h1 className="text-4xl font-bold flex items-center text-center justify-center w-full mb-3 gap-2 max-sm:text-2xl max-sm:flex-col">
                    <span className="material-symbols-outlined icon-filled !text-4xl text-center">crown</span>
                    Nuestros Planes de Membresía</h1>
                <p className="text-xs mb-10 max-sm:text-xs text-center max-md:text-[10px]">Unete a nuestro exclusivo club de membresías y disfruta de beneficios especiales, descuentos y mucho más</p>

                <div className="w-full flex flex-col gap-4">
                    <h1 className="text-2xl font-bold flex items-center text-center w-full mb-3 gap-2 max-sm:text-2xl">
                    <span className="material-symbols-outlined icon-filled !text-2xl text-center">diamond</span>
                    Elige tu Plan Ideal</h1>
                </div>

                <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>

                <div className="w-full grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 mb-5">
                    {abonnements.map((abonnement, index) => (
                        <div key={index} className="w-full border-2 border-gray-200 rounded-lg shadow-md relative mb-5">
                            <div className={`w-full h-1/3 bg-[#c48b3b] px-10 py-15 ${abonnement.color} rounded-t-lg flex flex-col items-center justify-center gap-2`}>
                                <h1 className="text-lg font-bold text-white max-md:text-base max-sm:text-sm max-sm:top-[-10px]">{abonnement.title}</h1>
                                <p className="text-3xl font-semibold text-white">{abonnement.price}</p>
                            </div>
                            <ul className="list-disc pl-5 py-5 h-1/2">
                                {abonnement.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="text-sm px-5 list-none flex items-center gap-2 text-gray-700">
                                        <span className="material-symbols-outlined icon-filled !text-lg text-green-500">check</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="w-full border-t-2 border-gray-200 flex justify-center p-2">
                                <button className=" bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">Seleccionar Plan</button>
                            </div> 
                        </div>
                    ))}
                </div>

                <div className="w-full flex flex-col gap-4">
                    <h1 className="text-2xl font-bold flex items-center text-center w-full mb-3 gap-2 max-sm:text-2xl">
                    <span className="material-symbols-outlined icon-filled !text-2xl text-center">help</span>
                    Preguntas Frecuentes</h1>
                </div>

                <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>

                <div className="w-full flex flex-col gap-2">
                    <div className="w-full p-4 bg-gray-100 rounded-lg">
                        <h2 className="text-lg font-semibold">¿Cómo puedo cancelar mi membresía?</h2>
                        <p className="text-sm text-gray-600">Puedes cancelar tu membresía en cualquier momento desde tu perfil de usuario.</p>
                    </div>
                    <div className="w-full p-4 bg-gray-100 rounded-lg">
                        <h2 className="text-lg font-semibold">¿Puedo cambiar de plan?</h2>
                        <p className="text-sm text-gray-600">Sí, puedes cambiar de plan en cualquier momento desde tu perfil de usuario.</p>
                    </div>
                    <div className="w-full p-4 bg-gray-100 rounded-lg">
                        <h2 className="text-lg font-semibold">¿Qué métodos de pago aceptan?</h2>
                        <p className="text-sm text-gray-600">Aceptamos tarjetas de crédito, débito y PayPal.</p>
                    </div>
                    <div className="w-full p-4 bg-gray-100 rounded-lg">
                        <h2 className="text-lg font-semibold">¿Puedo compartir mi membresía con alguien más?</h2>
                        <p className="text-sm text-gray-600">No, cada membresía es personal e intransferible.</p>
                    </div>
                </div>
            </section>
            <ChatFlotante />
        </>
    );
}