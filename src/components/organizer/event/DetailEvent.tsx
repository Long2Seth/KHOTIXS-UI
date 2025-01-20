'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { RiCalendarLine, RiMap2Line, RiTimerLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { EventType } from "@/lib/customer/event";
import { useEffect, useState } from "react";

type PropType = {
    id: string;
}

export default function EventDetailsPage({ id }: PropType) {
    const router = useRouter();
    const [eventData, setEventData] = useState<EventType | null>(null);

    const getData = async () => {
        try {
            const response = await fetch(`/event-ticket/api/v1/events/organizer/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data: EventType = await response.json();
            setEventData(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        getData();
    }, [id]);

    console.log(" EVENT DATA ", eventData);

    return (
        <section className="space-y-6 ">
            <div className="flex items-center justify-between ">
                <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">EVENT DETAILS</h1>
                <Button
                    className="bg-primary-color text-secondary-color-text rounded-[6px] px-5 hover:bg-primary-color/80 dark:text-secondary-color-text"
                    onClick={() => router.push("/organizer/events/edit-event")}>
                    Edit Event
                </Button>
            </div>
            <div className='bg-white dark:bg-khotixs-background-dark dark:border dark:border-white rounded-[6px]'>
                <section className="p-6 space-y-6">
                    <h2 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">{eventData?.eventTitle}</h2>
                    <div className="items-end flex flex-col md:flex-row gap-4">
                        <section className="space-y-6 order-last md:-order-1 min-w-[50%] justify-start items-start ">
                            <section className="space-y-4 ">
                                <section className="space-y-4">
                                    <section className="space-y-2">
                                        <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">EVENT DATE</h3>
                                        <div className="flex items-center gap-2 text-muted-foreground dark:text-label-text-primary">
                                            <RiCalendarLine className="h-5 w-5" />
                                            <span className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">{eventData?.startedDate}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground dark:text-label-text-primary">
                                            <RiTimerLine className="h-5 w-5" />
                                            <span className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color ">{eventData?.startedDate}</span>
                                        </div>
                                    </section>
                                    <section className="space-y-2">
                                        <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">EVENT LOCATION</h3>
                                        <div className="flex items-center gap-2 text-muted-foreground dark:text-label-text-primary">
                                            <RiMap2Line className="h-5 w-5" />
                                            <span className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">{eventData?.location}</span>
                                        </div>
                                    </section>
                                </section>
                                {/* Event Description*/}
                                <section className="space-y-2">
                                    <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">EVENT DESCRIPTION</h3>
                                    <p className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                        {eventData?.description}
                                    </p>
                                </section>
                            </section>
                        </section>
                        <section
                            className="rounded-[8px] w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${eventData?.thumbnail})`, height: '250px' }}
                        >
                        </section>
                    </div>
                </section>
            </div>
        </section>
    )
}