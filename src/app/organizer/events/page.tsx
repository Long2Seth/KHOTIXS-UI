// import {CreateEventForm} from "@/components/organizer/FormCreateEvent";
import React from "react";
import EventComponent from "@/components/event/EventComponent";

export default function EventPage() {
    return (
        <main
            className=" container mx-auto w-full space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px]  px-5 md:px-10 ">
            {/*<CreateEventForm/>*/}
            <EventComponent/>
        </main>
    );
}