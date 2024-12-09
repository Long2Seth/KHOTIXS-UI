import React from 'react';
import HeaderOrganizer from "@/components/organizer/header-organizer";
import {EditEvent} from "@/components/organizer/EditEvent";
import CategoriesOrganizerComponent from "@/components/organizer/categoriesOrganizerComponent";

const Page = () => {
    return (
        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <HeaderOrganizer name="CHHAYA DEV"/>
            <CategoriesOrganizerComponent/>
            <EditEvent/>
        </div>
    );
};

export default Page;