'use client'
import {Button} from "@/components/ui/button"
import Image from "next/image";
import {
    RiCalendarLine,
    RiMap2Line,
    RiTimerLine
} from "react-icons/ri";
import {useRouter} from "next/navigation";
import {EventType} from "@/lib/customer/event";

type PropType = {
    event: EventType | null;
}

export default function EventDetailsPage({event}: PropType) {
    const router = useRouter();


    console.log(" EVENT DATA ", event);

    return (
        <section className="space-y-6 ">
            <div className="flex items-center justify-between ">
                <h1 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">EVENT
                    DETAILS</h1>
                <Button
                    className="bg-primary-color text-secondary-color-text rounded-[6px] px-5  hover:bg-primary-color/80 dark:text-secondary-color-text"
                    onClick={() => router.push("/organizer/events/edit-event")}>
                    Edit Event
                </Button>
            </div>
            <div className=' bg-white dark:bg-khotixs-background-dark dark:border dark:border-white rounded-[6px]'>
                <section className="p-6 space-y-6">
                    <h2 className="text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text">{event?.eventTitle}</h2>
                    <div className="items-end flex flex-col md:flex-row gap-4">

                        <section className="space-y-6 order-last md:-order-1 min-w-[50%] justify-start items-start ">

                            <section className="space-y-4 ">
                                <section className="space-y-4">
                                    <section className="space-y-2">
                                        <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">EVENT
                                            DATE</h3>
                                        <div
                                            className="flex items-center gap-2 text-muted-foreground dark:text-label-text-primary">
                                            <RiCalendarLine className="h-5 w-5"/>
                                            <span
                                                className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">{event?.startedDate}</span>
                                        </div>
                                        <div
                                            className="flex items-center gap-2 text-muted-foreground dark:text-label-text-primary">
                                            <RiTimerLine className="h-5 w-5"/>
                                            <span
                                                className="text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color ">{event?.startedDate}</span>
                                        </div>
                                    </section>
                                    <section className="space-y-2">
                                        <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">EVENT
                                            LOCATION</h3>
                                        <div
                                            className="flex items-center gap-2 text-muted-foreground dark:text-label-text-primary">
                                            <RiMap2Line className="h-5 w-5"/>
                                            <span
                                                className=" text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">{event?.location}</span>
                                        </div>
                                    </section>
                                </section>
                                {/* Event Description*/}
                                <section className="space-y-2">
                                    <h3 className="text-title-color text-base md:text-lg xl:text-xl font-bold dark:text-dark-description-color">EVENT
                                        DESCRIPTION</h3>
                                    <p className=" text-description-color text-sm md:text-base xl:text-lg dark:text-dark-description-color">
                                        {event?.description}
                                    </p>
                                </section>
                            </section>

                        </section>

                        <section
                            className="rounded-[8px] w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${event?.thumbnail})` , height: '250px'}}
                        >
                        </section>
                    </div>
                </section>
            </div>
        </section>
    )
}