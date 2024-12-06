import React from 'react';
import NavbarOrganizerComponent from "@/components/organizer/navbarOrganizerComponent";
import HeaderOrganizer from "@/components/organizer/header-organizer";
import {EditEvent} from "@/components/organizer/EditEvent";

const Page = () => {
    return (
        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <HeaderOrganizer name="CHHAYA DEV"/>
            <NavbarOrganizerComponent/>
            <EditEvent/>
        </div>
    );
};

export default Page;