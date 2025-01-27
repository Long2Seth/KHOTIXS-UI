import { upcomingData } from "@/lib/types/customer/upcomingData";
import {UpcomingCardComponent} from "@/components/customer/card/UpcomingCardComponent";

export function UpcomingEventComponent() {

    return (
        <section
            className="space-y-10 p-5 container mx-auto sm:w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-center h-auto ">
            <section className="space-y-4 w-full flex flex-col justify-center items-center ">
                <h1 className=" text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">
                    UPCOMING EVENTS
                </h1>
                <p className=" text-description-color text-base md:text-lg xl:text-xl max-w-[500px] lg:max-w-[800px] sm:px-0 md:px-0 md:text-md lg:text-lgnfont-light text-center dark:text-dark-description-color">
                    The General Event feature provides comprehensive information about a specific event,
                    ensuring users have all the details needed to make an informed decision about attending or booking tickets.
                </p>
            </section>
            <section
                className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 md:px-[0px] md:gap-5 lg:px-[190px] xl:px-[220px] xl:gap-10">
                {upcomingData.map((event, index) => (
                    <UpcomingCardComponent key={index} event={event} />
                ))}
            </section>
        </section>
    )
}