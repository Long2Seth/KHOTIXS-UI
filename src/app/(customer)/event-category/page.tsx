'use client';

import {CardComponent} from "@/components/customer/card/CardComponent";
import {useEffect, useState} from "react";
import SkeletonEventByCategory from "@/components/customer/card/SkeletonEventByCategory";
import {EventType} from "@/lib/customer/event";

export default function EventByCategory() {
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState<EventType[]>([]);


    const data =
        async () => {
        try {
            const response = await fetch(`event-ticket/api/v1/events`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            const data = result.content; // Access the content array from the response
            setEvents(data); // Set the events state with the fetched data
        } catch (error) {
            console.error("Failed to fetch events:", error);
            setEvents([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        data();
    }, []);
    console.log(" Events", events);


    const filteredEvents = events.filter(event => event.eventCategory.toLowerCase() );

    return (
        <>
            {
                isLoading ? <SkeletonEventByCategory/> :
                    <section
                        className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-start h-auto space-y-[30px] md:space-y-[50px] xl:space-y-[70px] mb-[30px] md:mb-50px] xl:mb-[70px] ">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text uppercase  ">
                             Events
                        </h1>
                        <section
                            className="h-auto grid gap-2 grid-cols-2 max-w-[600px] sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center px-[30px] sm:p-0 lg:px-[30px]">
                            {filteredEvents.map((event, index) => (
                                <CardComponent key={index} event={event}/>
                            ))}
                        </section>
                    </section>
            }
        </>

    )
        ;
}