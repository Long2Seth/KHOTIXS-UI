export function CardCategory() {
    return (
        <section
            className="w-full bg-khotixs-background-white dark:bg-khotixs-background-dark px-[140px] py-[100px] font-bold flex flex-col justify-center items-center h-auto ">

            <h1 className="text-primary-color-text lg:text-xl xl:text-3xl 2xl:text-5xl font-bold dark:text-secondary-color-text ">EVENT CATEGORIES</h1>

            <section className="w-full  justify-center gap-4 mt-8 grid lg:overflow-auto xl:grid-cols-5">


                {/* Card: Concert */}
                <div
                    className="bg-primary-color rounded-[15px] w-full h-[200px] flex flex-col justify-center items-center shadow-lg">
                    <div className="text-white text-4xl mb-2">🎵</div>
                    <p className="text-white text-2xl">Concert</p>
                </div>


            </section>

        </section>
    );
}