import React from 'react';
import HeaderOrganizer from "@/components/organizer/header-organizer";
import EventDetailsPage from "@/components/organizer/DetailEvent";
import TicketTable from "@/components/organizer/TicketTable";
import CategoriesOrganizerComponent from "@/components/organizer/categoriesOrganizerComponent";

const Page = () => {
    return (
        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <HeaderOrganizer name="CHHAYA DEV"/>
            <CategoriesOrganizerComponent/>
            <EventDetailsPage />
            <TicketTable/>
        </div>
    );
};

export default Page;