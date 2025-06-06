"use client";
import ChatFlotante from '../chatbot/ChatFlotante/page';
import Card from "../components/servicesCard/card";
import { servicesEN, servicesFR, serviciosES } from "../services.test.js";
import { useEffect, useState } from "react";
import { useTranslations } from "use-intl";

export default function Home() {
    const t = useTranslations("services");
    const [services, setServices] = useState([]);
    useEffect(() => {
        const pathParts = window.location.pathname.split("/");
        const langFromUrl = pathParts.find(part => ["en", "es", "fr"].includes(part));
        switch (langFromUrl) {
            case 'en':
                setServices(servicesEN);
                console.log(servicesEN);
                break;
            case 'fr':
                setServices(servicesFR);
                console.log(servicesFR);
                break;
            default:
                setServices(serviciosES);
                console.log(serviciosES);
                break; 
        }
    }
    , []);
    if (services.length === 0) return null
    return (
        <>
            <section className="relative flex flex-col items-center justify-center text-black/80 p-10 rounded-2xl mb-10 max-[375px]:p-0 bg-white w-[70%] mt-10 max-sm:p-5 max-sm:w-[90%]">
                <h1 className="text-5xl font-bold flex items-center mb-3 text-center max-sm:text-3xl max-md:flex-col"><span className="material-symbols-outlined !text-5xl mr-2 max-sm:!text-3xl">spa</span>{t('title')}</h1>
                <p className="text-base mb-10 max-sm:text-xs text-center">{t('description')}</p>
                
                <div className="w-full flex flex-col items-start mb-10">
                    <h1 className="text-2xl font-bold flex items-center mb-1 max-md:flex-col text-center max-sm:text-xl max-sm:px-4"><span className="material-symbols-outlined !text-2xl mr-2">massage</span>{t('massages')}</h1>
                    <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
                    <div className="flex flex-wrap justify-center gap-5 mt-5 w-full">
                        <Card title={services[0].title} description={services[0].description} image={services[0].image} duration={services[0].duration} price={services[0].price}/>
                        <Card title={services[1].title} description={services[1].description} image={services[1].image} duration={services[1].duration} price={services[1].price}/>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start mb-10">
                    <h1 className="text-2xl font-bold flex items-center mb-1 max-md:flex-col text-center max-sm:text-xl max-sm:px-4 w-full"><span className="material-symbols-outlined !text-2xl mr-2">massage</span>{t('facialTreatments')}</h1>
                    <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
                    <div className="flex flex-wrap justify-center gap-5 mt-5 w-full">
                        <Card title={services[2].title} description={services[2].description} image={services[2].image} duration={services[2].duration} price={services[2].price}/>
                        <Card title={services[3].title} description={services[3].description} image={services[3].image} duration={services[3].duration} price={services[3].price}/>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start mb-10">
                    <h1 className="text-2xl font-bold flex items-center mb-1 max-md:flex-col text-center max-sm:text-xl max-sm:px-4 w-full"><span className="material-symbols-outlined !text-2xl mr-2">massage</span>{t('bodyTreatments')}</h1>
                    <div className="w-full h-[0.5px] bg-black/40 mb-3"></div>
                    <div className="flex flex-wrap justify-center gap-5 mt-5 w-full">
                        <Card title={services[4].title} description={services[4].description} image={services[4].image} duration={services[4].duration} price={services[4].price}/>
                    </div>
                </div>
            </section>
            <ChatFlotante />
        </>
    );
}