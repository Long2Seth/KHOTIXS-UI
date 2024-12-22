import React from 'react';
import EventDetailsPage from "@/components/organizer/DetailEvent";
import TicketTable from "@/components/organizer/TicketTable";

const Page = () => {
    return (
        <main className=" container mx-auto w-full space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px]  ">
            <EventDetailsPage />
            <TicketTable/>
        </main>
    );
};

export default Page;