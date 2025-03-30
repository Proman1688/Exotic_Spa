export function PromoSecondSection() {
    return (
      <section className="grid grid-cols-2 gap-5 h-[40vh] w-[80vw] my-5 max-md:h-[30vh] max-sm:grid-rows-2 max-sm:h-[50vh]">
          <div className="col-span-1 max-sm:col-span-2 bg-[url(/imagen4.jpg)] bg-cover bg-center bg-no-repeat"></div>
          <div className="bg-amber-300 col-span-1 max-sm:col-span-2 bg-[url(/imagen5.jpg)] bg-cover bg-center bg-no-repeat"></div>
      </section>
    );
  }