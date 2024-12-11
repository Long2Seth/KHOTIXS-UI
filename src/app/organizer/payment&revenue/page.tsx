import React from 'react';
import RevenueDashboard from "@/components/organizer/revenue-table";
import PaymentTable from "@/components/organizer/table-payment";

const MyComponent = () => {
    return (
        <main>
            <RevenueDashboard/>
            <PaymentTable/>

        </main>
    );
};

export default MyComponent;