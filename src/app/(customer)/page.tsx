import {CardCategory} from "@/components/customer/CardCategory";
import {CardUpcoming} from "@/components/customer/CardUpcoming";
import {upcomingData,generalData} from "@/lib/customer/upcomingData";


export default function Home() {
    return (
        <main className=" flex flex-col ">

            {/* Hero section*/}
            <section className=" h-[520px] w-full ">

            </section>


            <CardCategory/>


            <section
                className=" w-full bg-khotixs-background-white px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text text-7xl font-bold  ">
                        UPCOMING EVENTS
                    </h1>
                    <p className=" max-w-[45%] text-2xl font-light my-[40px] text-center ">
                        The General Event feature provides comprehensive information about a specific event, ensuring
                        users have all the details needed to make an informed decision about attending or booking
                        tickets.
                    </p>
                </section>
                <section className=" h-auto mt-10 grid grid-cols-2 justify-center items-center gap-10">
                    {upcomingData.map((event, index) => (
                        <CardUpcoming key={index} event={event}/>
                    ))}
                </section>

            </section>


            <section
                className=" w-full bg-khotixs-background-white px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text text-7xl font-bold  ">
                        GENERAL EVENT
                    </h1>
                    <p className=" max-w-[45%] text-2xl font-light my-[40px] text-center ">
                        The General Event feature provides comprehensive information about a specific event, ensuring
                        users have all the details needed to make an informed decision about attending or booking
                        tickets.
                    </p>
                </section>


                <section className=" h-auto mt-10 grid grid-cols-3 justify-center items-center gap-10">
                    {generalData.map((event, index) => (
                        <CardUpcoming key={index} event={event}/>
                    ))}
                </section>

            </section>


            <section
                className=" w-full bg-khotixs-background-white px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text text-7xl font-bold  ">
                        CONCERTS
                    </h1>
                    <p className=" max-w-[45%] text-2xl font-light my-[40px] text-center ">
                        The Concerts feature provides users with detailed information about live music events, tailored for music enthusiasts. It enhances the user experience by offering curated content and tools to explore, book, and engage with concert events.
                    </p>
                </section>


                <section className=" h-auto mt-10 grid grid-cols-3 justify-center items-center gap-10">
                    {generalData.map((event, index) => (
                        <CardUpcoming key={index} event={event}/>
                    ))}
                </section>

            </section>


            <section
                className=" w-full bg-khotixs-background-white px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text text-7xl font-bold  ">
                        SPORT EVENTS
                    </h1>
                    <p className=" max-w-[45%] text-2xl font-light my-[40px] text-center ">
                        The Sports Events feature provides users with comprehensive information about live sports matches, tournaments, and activities. It caters to sports enthusiasts, offering an engaging and interactive platform to explore, book, and participate in sports events.
                    </p>
                </section>


                <section className=" h-auto mt-10 grid grid-cols-3 justify-center items-center gap-10">
                    {generalData.map((event, index) => (
                        <CardUpcoming key={index} event={event}/>
                    ))}
                </section>

            </section>


            <section
                className=" w-full bg-khotixs-background-white px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text text-7xl font-bold  ">
                        COMMUNITY EVENTS
                    </h1>
                    <p className=" max-w-[45%] text-2xl font-light my-[40px] text-center ">
                        The Community Events feature connects users with local gatherings, social activities, and events that foster engagement within a community. It provides detailed information and tools to explore, register, and participate in a variety of events focused on building connections and supporting shared interests.
                    </p>
                </section>


                <section className=" h-auto mt-10 grid grid-cols-3 justify-center items-center gap-10">
                    {generalData.map((event, index) => (
                        <CardUpcoming key={index} event={event}/>
                    ))}
                </section>

            </section>


            <section
                className=" w-full bg-khotixs-background-white px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text text-7xl font-bold  ">
                        CONFERENCES AND SEMINARS
                    </h1>
                    <p className=" max-w-[45%] text-2xl font-light my-[40px] text-center ">
                        The General Event feature provides comprehensive information about a specific event, ensuring
                        users have all the details needed to make an informed decision about attending or booking
                        tickets.
                    </p>
                </section>


                <section className=" h-auto mt-10 grid grid-cols-3 justify-center items-center gap-10">
                    {generalData.map((event, index) => (
                        <CardUpcoming key={index} event={event}/>
                    ))}
                </section>

            </section>


        </main>
    );
}