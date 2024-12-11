import React from 'react';
import EventDetailsPage from "@/components/organizer/DetailEvent";
import TicketTable from "@/components/organizer/TicketTable";

const Page = () => {
    return (
        <div className=" container mx-auto w-full space-y-[50px] md:space-y-[80px] xl:space-y-[100px] mb-[50px] md:mb-[80px] xl:mb-[100px] ">
            <EventDetailsPage />
            <TicketTable/>
        </div>
    );
};

export default Page;