'use client';

import {eventData} from "@/lib/customer/upcomingData";
import {CardComponent} from "@/components/customer/card/CardComponent";
import {useParams} from 'next/navigation';
import {useEffect, useState} from "react";
import SkeletonEventByCategory from "@/components/customer/card/SkeletonEventByCategory";

export default function EventByCategory() {
    const params = useParams();
    const id = params.id as string;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const filteredEvents = eventData.filter(event => event.eventType.toLowerCase() === id.toLowerCase());

    return (
        <>
            {
                isLoading ? <SkeletonEventByCategory/> :
                    <section
                        className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-start h-auto">
                        <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text uppercase my-[20px] md:my-[30px] xl:my-10 ">
                            {id} Events
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