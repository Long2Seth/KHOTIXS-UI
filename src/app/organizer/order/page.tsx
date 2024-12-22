import React from 'react';
import OrderTableComponent from "@/components/organizer/order/OrderTableComponent";

export default function OrderPage() {
    return (
        <main className="container mx-auto w-full space-y-[30px] md:space-y-[50px] xl:space-y-[80px] my-[30px] md:my-[50px] xl:my-[80px]  ">
            <OrderTableComponent/>
        </main>
    );
};

