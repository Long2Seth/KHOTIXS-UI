    import React from 'react';
import RevenueDashboard from "@/components/organizer/revenue-table";
import PaymentTable from "@/components/organizer/table-payment";

const MyComponent = () => {
    return (
        <main className=" container mx-auto w-full space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px] px-5 md:px-10 ">
            <RevenueDashboard/>
            <PaymentTable/>

        </main>
    );
};

export default MyComponent;