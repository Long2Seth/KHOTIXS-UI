import React from 'react';
import HeaderOrganizer from "@/components/organizer/header-organizer";
import NavbarOrganizerComponent from "@/components/organizer/categoriesOrganizerComponent";
import ChangePassword from "@/components/organizer/ChangePassword";

const MyComponent = () => {
    return (
        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <HeaderOrganizer name="CHHAYA DEV"/>
            <NavbarOrganizerComponent/>
            <ChangePassword/>
        </div>
    );
};

export default MyComponent;