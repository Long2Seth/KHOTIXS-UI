import React from 'react';
import NavbarOrganizerComponent from "@/components/organizer/navbarOrganizerComponent";
import HeaderOrganizer from "@/components/organizer/header-organizer";
import OrganizerDashboard from "@/components/organizer/organizer-dash";
import {EventsTable} from "@/components/organizer/event-table";
import PaymentTable from "@/components/organizer/table-payment";
import RevenueDashboard from "@/components/organizer/revenue-table";

const MyComponent = () => {
    return (

        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <HeaderOrganizer name="CHHAYA DEV"/>
            <NavbarOrganizerComponent/>
            <OrganizerDashboard/>
            <EventsTable/>
            <RevenueDashboard/>
            <PaymentTable/>

        </div>
    );
};

export default MyComponent;