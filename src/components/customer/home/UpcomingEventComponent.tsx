import * as React from "react";
import {useState, useEffect} from "react";
import {RiCalendarLine,} from "react-icons/ri";
import {useGetEventUpcomingQuery} from "@/redux/feature/user/Event";
import {router} from "next/client";
import {useRouter} from "next/navigation";

interface Event {
    id: string;
    startedDate: string;
    thumbnail: string;
    eventTitle: string;
}

export function UpcomingEventComponent() {
    const {data} = useGetEventUpcomingQuery();
    const router = useRouter();
    const [shuffledData, setShuffledData] = useState<Event[]>([]);

    // Function to shuffle the array
    const shuffleArray = (array: Event[]): Event[] => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        if (data) {
            const shuffleAndSetData = () => {
                setShuffledData(shuffleArray([...data]).slice(0, 5));
            };

            shuffleAndSetData();
            const intervalId = setInterval(shuffleAndSetData, 10000);

            return () => clearInterval(intervalId);
        }
    }, [data]);

    return (
        <section
            className="space-y-10 md:p-5 container mx-auto sm:w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex w-[300px] md:w-full flex-col justify-center items-center h-auto">
            <section className="space-y-4 w-full flex flex-col justify-center items-center">
                <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">
                    UPCOMING EVENTS
                </h1>
                <p className="text-description-color text-base md:text-lg xl:text-xl max-w-[500px] lg:max-w-[800px] sm:px-0 md:px-0 md:text-md lg:text-lgnfont-light text-center dark:text-dark-description-color">
                    The General Event feature provides comprehensive information about a specific event,
                    ensuring users have all the details needed to make an informed decision about attending or booking
                    tickets.
                </p>
            </section>

            <section className="w-full lg:px-40">
                <div className="grid grid-cols-12 gap-4 py-[15px] w-[300px] md:w-full justify-center items-center">
                    {shuffledData.map((event: Event, index: number) => {
                        const date = new Date(event.startedDate);
                        const day = date.getDate();
                        const month = date.toLocaleString("default", {month: "short"});
                        const year = date.getFullYear();

                        return (
                            <section
                                key={event.id}
                                onClick={() => router.push(`/event/${event.id}`)}
                                className={`${index < 2 ? "md:col-span-6 col-span-12" : "md:col-span-4 hidden md:block"} cursor-pointer rounded-[6px] items-center w-[300px] md:w-auto md:h-auto`}>
                                <div
                                    className="rounded-[6px] w-full md:h-72 h-60 bg-cover bg-center transform transition-transform duration-300 group-hover:scale-110 flex items-end"
                                    style={{backgroundImage: `url(${event.thumbnail})`}}>
                                     <div className="bg-secondary-color bg-opacity-70 rounded-t-[6px] w-full">
                                        <div className="flex relative md:px-10 p-4 md:py-[15px]">
                                            <div>
                                                <div className="flex items-center">
                                                    <RiCalendarLine className="md:mt-1 text-white my-2 w-[10px] h-[10px] md:w-[18px] md:h-[18px] lg:top-[-8px] lg:w-[20px] lg:h-[20px] xl:top-[-9px] xl:w-[25px] xl:h-[25px] dark:text-dark-description-color"/>
                                                    <h2 className="pl-2 text-white text-[10px] md:text-lg xl:text-xl uppercase dark:text-white line-clamp-1">
                                                        {day} {month} {year}
                                                    </h2>
                                                </div>
                                                <h1 className="text-white text-[10px] md:text-lg xl:text-xl font-bold uppercase dark:text-secondary-color-text line-clamp-1">
                                                    {event.eventTitle}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </section>
        </section>
    );
}