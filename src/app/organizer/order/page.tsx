import React from 'react';
import {OrderDataComponent} from "@/components/organizer/order/data-table";

export default function OrderPage() {
    return (
        <main className="container mx-auto w-full space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px] md:px-10 ">
            <OrderDataComponent/>
        </main>
    );
};