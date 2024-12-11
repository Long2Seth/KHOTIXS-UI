import React from 'react';
import OrganizerDashboard from "@/components/organizer/organizer-dash";
import {EventsTable} from "@/components/organizer/event-table";

const MyComponent = () => {
    return (

        <main>
            <OrganizerDashboard/>
            <EventsTable/>

        </main>
    );
};

export default MyComponent;