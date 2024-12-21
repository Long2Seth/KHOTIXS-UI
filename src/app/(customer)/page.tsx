import CardCategory from "@/components/customer/card/CardCategory";
import {UpcomingEventComponent} from "@/components/customer/home/UpcomingEventComponent";
import InfoCard from "@/components/customer/card/InfoCard";
import {eventData} from "@/lib/customer/upcomingData";
import {CardComponent} from "@/components/customer/card/CardComponent";
import Image from "next/image";

export default function Home() {

    return (
        <main
            className="flex flex-col bg-khotixs-background-white dark:bg-khotixs-background-dark space-y-[50px] md:space-y-[80px] xl:space-y-[100px] mb-[50px] md:mb-80px] xl:mb-[100px]">
            {/* Hero section */}
            <Image
                layout="responsive"
                width={100}
                height={100}
                src="/icons/hero-section.gif"
                alt="hero-section"
            />

            <CardCategory/>

            {/* Technology section */}
            <UpcomingEventComponent/>


            {/* Conference section */}
            <section
                className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-center h-auto">
                <InfoCard
                    title="TECHNOLOGY"
                    description="The General Event feature provides comprehensive information about a specific event, ensuring users have all the details needed to make an informed decision about attending or booking tickets."
                />
                <section
                    className="h-auto grid gap-2 grid-cols-2 max-w-[600px] sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center px-[30px] sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "TECHNOLOGY").map((event, index) => (
                        <CardComponent
                            key={index}
                            event={event}/>
                    ))}
                </section>
            </section>


            {/* Concert section */}
            <section
                className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-center h-auto">
                <InfoCard
                    title="CONCERTS"
                    description="The Concerts feature provides users with detailed information about live music events, tailored for music enthusiasts. It enhances the user experience by offering curated content and tools to explore, book, and engage with concert events."
                />
                <section
                    className="h-auto grid gap-2 grid-cols-2 max-w-[600px] sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center px-[30px] sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "CONCERTS").map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>
            </section>


            {/* Sport section */}
            <section
                className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-center h-auto">
                <InfoCard
                    title="SPORT"
                    description="The Sports Events feature provides users with comprehensive information about live sports
                        matches, tournaments, and activities. It caters to sports enthusiasts, offering an engaging and
                        interactive platform to explore, book, and participate in sports events."
                />
                <section
                    className="h-auto grid gap-2 grid-cols-2 max-w-[600px] sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center px-[30px] sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "SPORT").map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>
            </section>


            {/* Community section */}
            <section
                className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-center h-auto">
                <InfoCard
                    title="COMMUNITY"
                    description="The Community Events feature connects users with local gatherings, social activities, and events
                        that foster engagement within a community. It provides detailed information and tools to
                        explore, register, and participate in a variety of events focused on building connections and
                        supporting shared interests."
                />
                <section
                    className="h-auto grid gap-2 grid-cols-2 max-w-[600px] sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center px-[30px] sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "COMMUNITY").map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>
            </section>


            {/* Conference section */}
            <section
                className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-center h-auto">

                <InfoCard
                    title="CONFERENCES AND SEMINARS"
                    description="The General Event feature provides comprehensive information about a specific event, ensuring users have all the details needed to make an informed decision about attending or booking tickets."
                />
                <section
                    className="h-auto grid gap-2 grid-cols-2 max-w-[600px] sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center px-[30px] sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "CONFERENCES AND SEMINARS").map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>
            </section>


            {/* General section */}
            <section
                className="container mx-auto w-full dark:bg-khotixs-background-dark flex flex-col justify-center items-center h-auto">
                <InfoCard
                    title="GENERAL"
                    description="The General Event feature provides comprehensive information about a specific event, ensuring users have all the details needed to make an informed decision about attending or booking tickets."/>
                <section
                    className="h-auto grid gap-2 grid-cols-2 max-w-[600px] sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center px-[30px] sm:p-0 lg:px-[30px]">
                    {eventData.filter(event => event.eventType === "GENERAL").map((event, index) => (
                        <CardComponent key={index} event={event}/>
                    ))}
                </section>
            </section>
        </main>
    );
}