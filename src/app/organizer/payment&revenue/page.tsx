import React from 'react';
import RevenueDashboard from "@/components/organizer/revenue-table";
import PaymentTable from "@/components/organizer/table-payment";
import HeaderOrganizer from "@/components/organizer/header-organizer";
import NavbarOrganizerComponent from "@/components/organizer/categoriesOrganizerComponent";

const MyComponent = () => {
    return (
        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <HeaderOrganizer name="CHHAYA DEV"/>
            <NavbarOrganizerComponent/>
            <RevenueDashboard/>
            <PaymentTable/>

        </div>
    );
};

export default MyComponent;