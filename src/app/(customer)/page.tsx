import {CardCategory} from "@/components/customer/CardCategory";
import {CardComponent} from "@/components/customer/CardComponent";
import {upcomingData, generalData} from "@/lib/customer/upcomingData";
import Image from "next/image";


export default function Home() {
    return (
        <main className=" flex flex-col bg-khotixs-background-white dark:bg-khotixs-background-dark ">

            {/* Hero section*/}
            <img className=" w-full " src="/icons/hero-section.gif"/>


            <CardCategory/>


            <section
                className=" w-full bg-khotixs-background-white dark:bg-khotixs-background-dark  px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text lg:text-xl xl:text-3xl 2xl:text-5xl font-bold dark:text-secondary-color-text ">
                        UPCOMING EVENTS
                    </h1>
                    <p className=" lg:max-w-[700px] xl:max-w-[60%] lg:text-lg xl:text-xl 2xl:text-xl font-light lg:my-[20px] xl:my-[40px] text-center ">
                        The General Event feature provides comprehensive information about a specific event, ensuring
                        users have all the details needed to make an informed decision about attending or booking
                        tickets.
                    </p>
                </section>
                <section className=" h-auto mt-10 grid lg:grid-cols-2 justify-center items-center gap-10">
                    {upcomingData.map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>

            </section>


            <section
                className=" w-full bg-khotixs-background-white dark:bg-khotixs-background-dark px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text lg:text-xl xl:text-3xl 2xl:text-5xl font-bold dark:text-secondary-color-text ">
                        GENERAL EVENT
                    </h1>
                    <p className=" lg:max-w-[700px] xl:max-w-[60%] lg:text-lg xl:text-xl 2xl:text-xl font-light lg:my-[20px] xl:my-[40px] text-center ">
                        The General Event feature provides comprehensive information about a specific event, ensuring
                        users have all the details needed to make an informed decision about attending or booking
                        tickets.
                    </p>
                </section>


                <section
                    className=" h-auto mt-10 grid lg:grid-cols-2  2xl:grid-cols-3 justify-center items-center gap-10">
                    {generalData.map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>

            </section>


            <section
                className=" w-full bg-khotixs-background-white dark:bg-khotixs-background-dark px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text lg:text-xl xl:text-3xl 2xl:text-5xl font-bold dark:text-secondary-color-text ">
                        CONCERTS
                    </h1>
                    <p className=" lg:max-w-[700px] xl:max-w-[60%] lg:text-lg xl:text-xl 2xl:text-xl font-light lg:my-[20px] xl:my-[40px] text-center ">
                        The Concerts feature provides users with detailed information about live music events, tailored
                        for music enthusiasts. It enhances the user experience by offering curated content and tools to
                        explore, book, and engage with concert events.
                    </p>
                </section>


                <section
                    className=" h-auto mt-10 grid lg:grid-cols-2  2xl:grid-cols-3 justify-center items-center gap-10">
                    {generalData.map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>

            </section>


            <section
                className=" w-full bg-khotixs-background-white dark:bg-khotixs-background-dark px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text lg:text-xl xl:text-3xl 2xl:text-5xl font-bold dark:text-secondary-color-text ">
                        SPORT EVENTS
                    </h1>
                    <p className=" lg:max-w-[700px] xl:max-w-[60%] lg:text-lg xl:text-xl 2xl:text-xl font-light lg:my-[20px] xl:my-[40px] text-center ">
                        The Sports Events feature provides users with comprehensive information about live sports
                        matches, tournaments, and activities. It caters to sports enthusiasts, offering an engaging and
                        interactive platform to explore, book, and participate in sports events.
                    </p>
                </section>


                <section
                    className=" h-auto mt-10 grid lg:grid-cols-2  2xl:grid-cols-3 justify-center items-center gap-10">
                    {generalData.map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>

            </section>


            <section
                className=" w-full bg-khotixs-background-white dark:bg-khotixs-background-dark px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text lg:text-xl xl:text-3xl 2xl:text-5xl font-bold dark:text-secondary-color-text ">
                        COMMUNITY EVENTS
                    </h1>
                    <p className=" lg:max-w-[700px] xl:max-w-[60%] lg:text-lg xl:text-xl 2xl:text-xl font-light lg:my-[20px] xl:my-[40px] text-center ">
                        The Community Events feature connects users with local gatherings, social activities, and events
                        that foster engagement within a community. It provides detailed information and tools to
                        explore, register, and participate in a variety of events focused on building connections and
                        supporting shared interests.
                    </p>
                </section>


                <section
                    className=" h-auto mt-10 grid lg:grid-cols-2  2xl:grid-cols-3 justify-center items-center gap-10">
                    {generalData.map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>

            </section>


            <section
                className=" w-full bg-khotixs-background-white dark:bg-khotixs-background-dark px-[140px] py-[100px] flex flex-col justify-center items-center h-auto ">
                <section className=" w-full flex flex-col justify-center items-center ">
                    <h1 className="text-primary-color-text lg:text-xl xl:text-3xl 2xl:text-5xl font-bold dark:text-secondary-color-text ">
                        CONFERENCES AND SEMINARS
                    </h1>
                    <p className=" lg:max-w-[700px] xl:max-w-[60%] lg:text-lg xl:text-xl 2xl:text-xl font-light lg:my-[20px] xl:my-[40px] text-center ">
                        The General Event feature provides comprehensive information about a specific event, ensuring
                        users have all the details needed to make an informed decision about attending or booking
                        tickets.
                    </p>
                </section>


                <section
                    className=" h-auto mt-10 grid lg:grid-cols-2  2xl:grid-cols-3 justify-center items-center gap-10">
                    {generalData.map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>

            </section>


        </main>
    );
}