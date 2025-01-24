'use client';
import React, {useEffect, useState} from 'react';
import {CardComponent} from "@/components/customer/card/CardComponent";
import {EventType} from "@/lib/customer/event";

type Props = {
    category: string;
}

export default function EventCategoryComponent({category}: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState<EventType[]>([]);

    console.log(" CATEGORY :", category)

    useEffect(() => {
        const data = async () => {
            try {
                const response = await fetch(`/event-ticket/api/v1/events/category/${category}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const result = await response.json();
                setEvents(result);
            } catch (error) {
                console.error("Failed to fetch events:", error);
                setEvents([]);
            } finally {
                setIsLoading(false);
            }
        };

        data().then(r => console.log("Data : ", r));
    }, [category]);

    console.log("Events", events);

    return (
        <section
            className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-start h-auto mb-[30px] md:mb-50px] xl:mb-[70px]">
            <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text uppercase p-[30px]">
                {category} Events <span>({events.length || 0})</span>
            </h1>
            <section
                className="h-auto grid gap-2 grid-cols-2 max-w-[600px] sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center px-[30px] sm:p-0 lg:px-[30px]">
                {events?.map((event: any, index) => (
                    <CardComponent key={index} event={event}/>
                ))}
            </section>
        </section>
    )
        ;
}