import React from 'react';
// import NavbarOrganizerComponent from "@/components/organizer/categoriesOrganizerComponent";
import HeaderOrganizer from "@/components/organizer/header-organizer";
import OrganizerDashboard from "@/components/organizer/organizer-dash";
import {EventsTable} from "@/components/organizer/event-table";
import CategoriesOrganizerComponent from "@/components/organizer/categoriesOrganizerComponent";

const MyComponent = () => {
    return (

        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <HeaderOrganizer name="CHHAYA DEV"/>
            <CategoriesOrganizerComponent/>


            <OrganizerDashboard/>
            <EventsTable/>

        </div>
    );
};

export default MyComponent;