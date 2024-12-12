import React from 'react';
import HeaderOrganizer from "@/components/organizer/header-organizer";
import NavbarOrganizerComponent from "@/components/organizer/categoriesOrganizerComponent";
import Profile from "@/components/organizer/Profile";

const MyComponent = () => {
    return (
        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <HeaderOrganizer name="CHHAYA DEV"/>
            <NavbarOrganizerComponent/>
            <Profile/>
        </div>
    );
};

export default MyComponent;