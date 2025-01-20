import {upcomingData} from "@/lib/customer/upcomingData";
import {CardComponent} from "@/components/customer/card/CardComponent";

export function UpcomingEventComponent() {


    return (
        <section
            className=" container mx-auto w-[350px] p-5 sm:w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-center h-auto ">
            <section className=" w-full flex flex-col justify-center items-center ">
                <h1 className=" text-title-color text-lg md:text-2xl xl:text-4xl font-bold dark:text-secondary-color-text ">
                    UPCOMING EVENTS
                </h1>
                <p className=" text-description-color m-[10px] px-[40px] text-base md:text-lg xl:text-xl max-w-[500px] lg:max-w-[700px] xl:max-w-[60%] sm:px-0 md:text-md lg:text-lg xl:px-[10px] font-light lg:my-[20px] text-center dark:text-dark-description-color  ">
                    The General Event feature provides comprehensive information about a specific event,
                    ensuring
                    users have all the details needed to make an informed decision about attending or
                    booking
                    tickets.
                </p>
            </section>
            <section
                className=" grid grid-cols-2 gap-2 sm:px-[100px] md:px-[0px] md:gap-5 lg:px-[190px] xl:px-[220px] ">
                {upcomingData.map((event, index) => (
                    <CardComponent key={index} event={event}/>
                ))}
            </section>

        </section>
    )
}