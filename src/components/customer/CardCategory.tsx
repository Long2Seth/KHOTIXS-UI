export function CardCategory() {
    return (
        <section
            className="w-full bg-khotixs-background-white px-[140px] py-[100px] text-[50px] font-bold flex flex-col justify-center items-center h-auto ">
            <h1 className="text-primary-color-text text-7xl font-bold py-10 " >EVENT CATEGORIES</h1>
            <section className="w-full flex justify-center gap-4 mt-8">
                {/* Card: Concert */}
                <div
                    className="bg-primary-color rounded-[15px] w-full h-[200px] flex flex-col justify-center items-center shadow-lg">
                    <div className="text-white text-4xl mb-2">🎵</div>
                    <p className="text-white text-2xl">Concert</p>
                </div>
                {/* Card: Sport Events */}
                <div
                    className="bg-primary-color rounded-[15px] w-full h-[200px] flex flex-col justify-center items-center shadow-lg">
                    <div className="text-white text-4xl mb-2">⚽</div>
                    <p className="text-white text-2xl">Sport Events</p>
                </div>
                {/* Card: Community Events */}
                <div
                    className="bg-primary-color rounded-[15px] w-full h-[200px] flex flex-col justify-center items-center shadow-lg">
                    <div className="text-white text-4xl mb-2">👥</div>
                    <p className="text-white text-2xl">Community Events</p>
                </div>
                {/* Card: Conferences */}
                <div
                    className="bg-primary-color rounded-[15px] w-full h-[200px] flex flex-col justify-center items-center shadow-lg">
                    <div className="text-white text-4xl mb-2">🏢</div>
                    <p className="text-white text-2xl">Conferences</p>
                </div>
                {/* Card: General Events */}
                <div
                    className="bg-primary-color rounded-[15px] w-full h-[200px] flex flex-col justify-center items-center shadow-lg">
                    <div className="text-white text-4xl mb-2">📅</div>
                    <p className="text-white text-2xl">General Events</p>
                </div>
            </section>
        </section>
    );
}