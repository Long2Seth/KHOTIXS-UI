import React from 'react';
import HeaderOrganizer from "@/components/organizer/header-organizer";
import CategoriesOrganizerComponent from "@/components/organizer/categoriesOrganizerComponent";
import AttendanceTable from "@/components/organizer/AttendanceTable";

const Page = () => {
    return (
        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <HeaderOrganizer name="CHHAYA DEV"/>
            <CategoriesOrganizerComponent/>
            <AttendanceTable/>
        </div>
    );
};

export default Page;