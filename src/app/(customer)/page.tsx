

export default function Home() {
    return (
        <main className=" flex flex-col ">

            {/* Hero section*/}
            <section className=" h-[520px] w-full ">

            </section>


            <section className="w-full bg-khotixs-background-white px-[140px] py-[100px] text-[50px] font-bold flex flex-col justify-center items-center h-[500px]">
                <h1 className="text-primary-color-text ">EVENT CATEGORIES</h1>
                <section className="w-full flex justify-center gap-4 mt-8">
                    {/* Card: Concert */}
                    <div className="bg-primary-color rounded-[15px] w-full h-[170px] flex flex-col justify-center items-center shadow-lg">
                        <div className="text-white text-4xl mb-2">🎵</div>
                        <p className="text-white text-lg">Concert</p>
                    </div>
                    {/* Card: Sport Events */}
                    <div className="bg-primary-color rounded-[15px] w-full h-[170px] flex flex-col justify-center items-center shadow-lg">
                        <div className="text-white text-4xl mb-2">⚽</div>
                        <p className="text-white text-lg">Sport Events</p>
                    </div>
                    {/* Card: Community Events */}
                    <div className="bg-primary-color rounded-[15px] w-full h-[170px] flex flex-col justify-center items-center shadow-lg">
                        <div className="text-white text-4xl mb-2">👥</div>
                        <p className="text-white text-lg">Community Events</p>
                    </div>
                    {/* Card: Conferences */}
                    <div className="bg-primary-color rounded-[15px] w-full h-[170px] flex flex-col justify-center items-center shadow-lg">
                        <div className="text-white text-4xl mb-2">🏢</div>
                        <p className="text-white text-lg">Conferences</p>
                    </div>
                    {/* Card: General Events */}
                    <div className="bg-primary-color rounded-[15px] w-full h-[170px] flex flex-col justify-center items-center shadow-lg">
                        <div className="text-white text-4xl mb-2">📅</div>
                        <p className="text-white text-lg">General Events</p>
                    </div>
                </section>
            </section>


        </main>
    );
}