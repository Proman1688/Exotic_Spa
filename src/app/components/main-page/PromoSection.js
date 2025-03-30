export function PromoSection() {
  return (
    <section className="grid grid-cols-3 grid-flow-col gap-5 h-[70vh] w-[60vw] my-5 max-md:w-[80vw] max-sm:grid-flow-row max-sm:grid-cols-2 max-sm:gap-2 max-sm:h-[50vh]">
        <div className="row-span-2 col-span-2 max-sm:col-span-2 bg-[url(/imagen1.jpg)] bg-cover bg-center bg-no-repeat"></div>
        <div className="bg-amber-300 col-span-3 max-sm:col-span-1 bg-[url(/imagen2.jpg)] bg-cover bg-center bg-no-repeat"></div>
        <div className="bg-amber-900 col-span-3 max-sm:col-span-1 bg-[url(/imagen3.jpg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
}