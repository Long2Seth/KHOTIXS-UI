import React from 'react';
import HeaderOrganizer from "@/components/organizer/header-organizer";
import {CreateEventForm} from "@/components/organizer/FormCreateEvent";
import CategoriesOrganizerComponent from "@/components/organizer/categoriesOrganizerComponent";

const Page = () => {
    return (
        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <HeaderOrganizer name="CHHAYA DEV"/>
            <CategoriesOrganizerComponent />
            <CreateEventForm />
        </div>
    );
};

export default Page;