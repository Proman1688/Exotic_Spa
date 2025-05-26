import Card from "../components/servicesCard/card";

export default function Home() {
    return (
        <section className="relative flex flex-col items-center justify-center text-white p-10 rounded-2xl mb-10 max-[375px]:p-0">
            <h1 className="text-5xl font-bold flex items-center mb-3 text-center max-sm:text-3xl max-sm:flex-col"><span className="material-symbols-outlined !text-5xl mr-2 max-sm:!text-3xl">spa</span>Nuestros Servicios y Tratamiento</h1>
            <p className="text-base mb-10 max-sm:text-xs text-center">Descubre la variedad de experiencias rejuvenecedoras que hemos diseñado para tu bienestar</p>
            
            <div className="w-full flex flex-col items-start mb-10">
                <h1 className="text-2xl font-bold flex items-center mb-1 max-sm:flex-col text-center max-sm:text-xl"><span className="material-symbols-outlined !text-2xl mr-2">massage</span>Masajes Terapéuticos y Relajantes</h1>
                <span className="block w-full h-[3px] bg-white mb-5"></span>
                <div className="flex flex-wrap justify-center gap-5 mt-5 w-full">
                    <Card />
                    <Card />
                </div>
            </div>

            <div className="w-full flex flex-col items-start mb-10">
                <h1 className="text-2xl font-bold flex items-center mb-1 max-sm:flex-col text-center max-sm:text-xl"><span className="material-symbols-outlined !text-2xl mr-2">massage</span>Masajes Terapéuticos y Relajantes</h1>
                <span className="block w-full h-[3px] bg-white mb-5"></span>
                <div className="flex flex-wrap justify-center gap-5 mt-5 w-full">
                    <Card />
                    <Card />
                </div>
            </div>

            <div className="w-full flex flex-col items-start mb-10">
                <h1 className="text-2xl font-bold flex items-center mb-1 max-sm:flex-col text-center max-sm:text-xl"><span className="material-symbols-outlined !text-2xl mr-2">massage</span>Masajes Terapéuticos y Relajantes</h1>
                <span className="block w-full h-[3px] bg-white mb-5"></span>
                <div className="flex flex-wrap justify-center gap-5 mt-5 w-full">
                    <Card />
                </div>
            </div>
        </section>
    );
}