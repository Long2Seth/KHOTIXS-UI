import React from 'react';
import AttendanceTable from "@/components/organizer/AttendanceTable";

const Page = () => {
    return (
        <div className="p-6 space-y-6 max-w-[90rem] mx-auto">
            <AttendanceTable/>
        </div>
    );
};

export default Page;