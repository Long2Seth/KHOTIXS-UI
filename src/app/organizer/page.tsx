import React from 'react';
import OrganizerDashboard from "@/components/organizer/home/organizer-dash";
import InformationEventComponent from "@/components/organizer/home/InformationEventComponent";

const MyComponent = () => {
    return (

        <main className="  container mx-auto w-full px-5 md:px-10 ">
            <OrganizerDashboard/>
            <InformationEventComponent/>

        </main>
    );
};

export default MyComponent;