// import InfoCard from "@/components/customer/card/InfoCard";
import {eventData} from "@/lib/customer/upcomingData";
import {CardComponent} from "@/components/customer/card/CardComponent";

export default function EventByCategory() {
    return (
        <section
            className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark flex flex-col justify-center items-center h-auto">

            <section
                className="h-auto grid gap-2 grid-cols-2 max-w-[600px] sm:w-full sm:grid-cols-3 md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center px-[30px] sm:p-0 lg:px-[30px]">
                {eventData.filter(event => event.eventType === "CONCERTS").map((event, index) => (
                    <CardComponent key={index} event={event}/>
                ))}
            </section>
        </section>

    );
}