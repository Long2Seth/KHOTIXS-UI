'use client'
import CardCategory from "@/components/customer/card/CardCategory";
import {UpcomingEventComponent} from "@/components/customer/home/UpcomingEventComponent";
import InfoCard from "@/components/customer/card/InfoCard";
import {CardComponent} from "@/components/customer/card/CardComponent";
import {Button} from "@/components/ui/button";
import {IoMdArrowRoundForward} from "react-icons/io";
import {useRouter} from "next/navigation";
import {useRef} from "react";
import {SkeletonHomePageComponent} from "@/components/customer/card/SkeletonHomePageComponent";
import {useGetAllEventPublishQuery} from "@/redux/feature/user/Event";

export default function Home() {
    const route = useRouter();
    const { data: events = [], isLoading } = useGetAllEventPublishQuery();

    const technologyRef = useRef<HTMLDivElement>(null);
    const concertRef = useRef<HTMLDivElement>(null);
    const sportRef = useRef<HTMLDivElement>(null);
    const communityRef = useRef<HTMLDivElement>(null);
    const conferenceRef = useRef<HTMLDivElement>(null);
    const generalRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = (value: string) => {
        route.push(`/event-category/${value}`);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonHomePageComponent />
            ) : (
                <main className="flex flex-col space-y-10 bg-khotixs-background-white dark:bg-khotixs-background-dark">
                    <CardCategory
                        technologyRef={technologyRef}
                        concertRef={concertRef}
                        sportRef={sportRef}
                        communityRef={communityRef}
                        conferenceRef={conferenceRef}
                        generalRef={generalRef}
                    />

                    <UpcomingEventComponent />

                    {events.some(event => event.eventCategory.toUpperCase() === "TECHNOLOGY") && (
                        <section
                            ref={technologyRef}
                            className="container mx-auto px-[25px] w-full py-[15px] space-y-4 sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                            <InfoCard
                                title="TECHNOLOGY"
                                description="The General Event feature provides comprehensive information about a specific event, ensuring users have all the details needed to make an informed decision about attending or booking tickets."
                            />
                            <section className="flex flex-col w-[300px] sm:w-[100%] justify-end md:pr-[25px] lg:px-[30px] lg:flex-row xl:px-[33px] items-end">
                                <Button
                                    onClick={() => handleButtonClick("technology")}
                                    className=" w-auto lg:h-[45px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 "
                                >
                                    View All
                                    <span>
                                        <IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w-10 " />
                                    </span>
                                </Button>
                            </section>
                            <section
                                className="container mx-auto px-[25px] w-full py-[15px] grid gap-2 grid-cols-1 sm:grid-cols-2 sm:w-full md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px] xl:gap-10 ">
                                {events
                                    .filter((event) => event.eventCategory.toUpperCase() === "TECHNOLOGY")
                                    .slice(0, 6)
                                    .map((event, index) => (
                                        <CardComponent key={index} event={event} />
                                    ))}
                            </section>
                        </section>
                    )}

                    {events.some(event => event.eventCategory.toUpperCase() === "CONCERT") && (
                        <section
                            ref={concertRef}
                            className="container mx-auto px-[25px] w-full py-[15px] space-y-4 sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                            <InfoCard
                                title="CONCERTS"
                                description="The Concerts feature provides users with detailed information about live music events, tailored for music enthusiasts. It enhances the user experience by offering curated content and tools to explore, book, and engage with concert events."
                            />
                            <section
                                className="flex flex-col w-[300px] sm:w-[100%] justify-end md:pr-[25px] lg:px-[30px] lg:flex-row xl:px-[33px] items-end">
                                <div className=" sm:w-auto my-[10px] lg:my-0 ">
                                    <Button
                                        onClick={() => handleButtonClick("concert")}
                                        className=" w-auto lg:h-[45px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 ">
                                        View All
                                        <span>
                                                <IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w10 "/>
                                            </span>
                                    </Button>
                                </div>

                            </section>
                            <section
                                className="container mx-auto px-[25px] w-full py-[15px] grid gap-2 grid-cols-1 sm:grid-cols-2 sm:w-full md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px] xl:gap-10 ">
                                {events.filter(event => event.eventCategory.toUpperCase() === "CONCERT").slice(0, 6).map((event, index) => (
                                    <CardComponent key={index} event={event}/>
                                ))}
                            </section>
                        </section>
                    )}

                    {events.some(event => event.eventCategory.toUpperCase() === "SPORT") && (
                        <section
                            ref={sportRef}
                            className="container mx-auto px-[25px] w-full py-[15px] space-y-4 sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                            <InfoCard
                                title="SPORT"
                                description="The Sports Events feature provides users with comprehensive information about live sports
                            matches, tournaments, and activities. It caters to sports enthusiasts, offering an engaging and
                            interactive platform to explore, book, and participate in sports events."
                            />
                            <section
                                className="flex flex-col w-[300px] sm:w-[100%] justify-end md:pr-[25px] lg:px-[30px] lg:flex-row xl:px-[33px] items-end">

                                <div className=" sm:w-auto my-[10px] lg:my-0 ">
                                    <Button
                                        onClick={() => handleButtonClick("sport")}
                                        className=" w-auto lg:h-[45px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 ">
                                        View All
                                        <span>
                                                <IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w10 "/>
                                            </span>
                                    </Button>
                                </div>

                            </section>
                            <section
                                className="container mx-auto px-[25px] w-full py-[15px] grid gap-2 grid-cols-1 sm:grid-cols-2 sm:w-full md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px] xl:gap-10 ">
                                {events.filter(event => event.eventCategory.toUpperCase() === "SPORT").slice(0, 6).map((event, index) => (
                                    <CardComponent key={index} event={event}/>
                                ))}
                            </section>
                        </section>
                    )}

                    {events.some(event => event.eventCategory.toUpperCase() === "COMMUNITY") && (
                        <section
                            ref={communityRef}
                            className="container mx-auto px-[25px] w-full py-[15px] space-y-4 sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                            <InfoCard
                                title="COMMUNITY"
                                description="The Community Events feature connects users with local gatherings, social activities, and events
                            that foster engagement within a community. It provides detailed information and tools to
                            explore, register, and participate in a variety of events focused on building connections and
                            supporting shared interests."
                            />
                            <section
                                className="flex flex-col w-[300px] sm:w-[100%] justify-end md:pr-[25px] lg:px-[30px] lg:flex-row xl:px-[33px] items-end">

                                <div className=" sm:w-auto my-[10px] lg:my-0 ">
                                    <Button
                                        onClick={() => handleButtonClick("community")}
                                        className=" w-auto lg:h-[45px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 ">
                                        View All
                                        <span>
                                                <IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w10 "/>
                                            </span>
                                    </Button>
                                </div>

                            </section>
                            <section
                                className="container mx-auto px-[25px] w-full py-[15px] grid gap-2 grid-cols-1 sm:grid-cols-2 sm:w-full md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px] xl:gap-10 ">
                                {events.filter(event => event.eventCategory.toUpperCase() === "COMMUNITY").slice(0, 6).map((event, index) => (
                                    <CardComponent key={index} event={event}/>
                                ))}
                            </section>
                        </section>
                    )}

                    {events.some(event => event.eventCategory.toUpperCase() === "CONFERENCE") && (
                        <section
                            ref={conferenceRef}
                            className="container mx-auto px-[25px] w-full py-[15px] space-y-4 sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                            <InfoCard
                                title="CONFERENCES "
                                description="The General Event feature provides comprehensive information about a specific event, ensuring users have all the details needed to make an informed decision about attending or booking tickets."
                            />
                            <section
                                className="flex flex-col w-[300px] sm:w-[100%] justify-end md:pr-[25px] lg:px-[30px] lg:flex-row xl:px-[33px] items-end">
                                <div className=" sm:w-auto my-[10px] lg:my-0 ">
                                    <Button
                                        onClick={() => handleButtonClick("conference")}
                                        className=" w-auto lg:h-[45px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 ">
                                        View All
                                        <span>
                                                <IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w10 "/>
                                            </span>
                                    </Button>
                                </div>

                            </section>
                            <section
                                className="container mx-auto px-[25px] w-full py-[15px] grid gap-2 grid-cols-1 sm:grid-cols-2 sm:w-full md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px] xl:gap-10 ">
                                {events.filter(event => event.eventCategory.toUpperCase() === "CONFERENCE").slice(0, 6).map((event, index) => (
                                    <CardComponent key={index} event={event}/>
                                ))}
                            </section>
                        </section>
                    )}

                    {events.some(event => event.eventCategory.toUpperCase() === "GENERAL") && (
                        <section
                            ref={generalRef}
                            className="container mx-auto px-[25px] w-full py-[15px] space-y-4 sm:w-full dark:bg-khotixs-background-dark bg-khotixs-background-white flex flex-col justify-center items-center h-auto">
                            <InfoCard
                                title="GENERAL"
                                description="The General Event feature provides comprehensive information about a specific event, ensuring users have all the details needed to make an informed decision about attending or booking tickets."
                            />
                            <section
                                className="flex flex-col w-[300px] sm:w-[100%] justify-end md:pr-[25px] lg:px-[30px] lg:flex-row xl:px-[33px] items-end">
                                <div className=" sm:w-auto my-[10px] lg:my-0 ">
                                    <Button
                                        onClick={() => handleButtonClick("general")}
                                        className=" w-auto lg:h-[45px] text-white text-sm md:text-base xl:text-lg bg-primary-color hover:bg-primary-color/80 ">
                                        View All
                                        <span><IoMdArrowRoundForward className=" h-5 w-5 md:h-10 md:w10 "/></span>
                                    </Button>
                                </div>
                            </section>
                            <section
                                className="container mx-auto px-[25px] w-full py-[15px] grid gap-2 grid-cols-1 sm:grid-cols-2 sm:w-full md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px] xl:gap-10 ">
                                {events.filter(event => event.eventCategory.toUpperCase() === "GENERAL").slice(0, 6).map((event, index) => (
                                    <CardComponent key={index} event={event}/>
                                ))}
                            </section>
                        </section>
                    )}
                </main>
            )}
        </>
    )
}