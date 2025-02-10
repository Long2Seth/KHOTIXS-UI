"use client"
import React from "react";
import Link from "next/link";
import QRGenerate from "@/components/customer/payNow/QRGenerate";
import {useSelector} from "react-redux";
import {RootState} from "@/lib/store";


type QRGenerateProps = {
    orderId: string;
    userId: string;
    total: number;
}


export default function PayNowComponent({orderId, userId, total}: QRGenerateProps) {
    // const orderData = useSelector((state: RootState) => state.order);

    console.log(" Order Pay in paymentnow : " ,orderId);
    console.log(" User Pay in paymentnow : " ,userId);
    console.log(" Total Pay in paymentnow : " ,total);

    // console.log("  Order Data in paymentnow", orderData);

    // const totalAmount = orderData.tickets.reduce((total, ticket) => total + ticket.price * ticket.quantity, 0);

    return (
        <>
            <section className="w-full flex flex-col gap-5">
                {/* Card Your Order */}
                <section>
                    <div
                        className="flex flex-col gap-5 w-full rounded-[8px] p-5 bg-white dark:backdrop-blur dark:bg-opacity-5">
                        <div className="flex flex-col lg:flex-row md:gap-3 gap-5">
                            {/*<section className="w-full space-y-2">*/}
                            {/*    <p className="uppercase text-description-color text-sm md:text-base xl:text-lg dark:text-white font-semibold">{orderData.eventTitle}</p>*/}

                            {/*    {orderData.tickets.map((ticket, index) => (*/}
                            {/*        <div key={index}>*/}
                            {/*            <div className="flex">*/}
                            {/*            </div>*/}
                            {/*            <div className="flex">*/}
                            {/*                <p className="text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">QTY</p>*/}
                            {/*                <p className="text-description-color text-sm md:text-base xl:text-lg font-semibold dark:text-white">{ticket.quantity}</p>*/}
                            {/*            </div>*/}
                            {/*            <div className="flex">*/}
                            {/*                <p className="text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">TYPE</p>*/}
                            {/*                <p className="text-description-color text-sm md:text-base xl:text-lg font-semibold dark:text-white">{ticket.ticketType}</p>*/}
                            {/*            </div>*/}
                            {/*            <div className="flex">*/}
                            {/*                <p className="text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">PRICE</p>*/}
                            {/*                <p className="text-description-color text-sm md:text-base xl:text-lg font-semibold dark:text-white">${ticket.price}</p>*/}
                            {/*            </div>*/}
                            {/*            <div className="py-5">*/}
                            {/*                <hr className="border-[#E5E7EB] w-[90%]"/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    ))}*/}
                            {/*    <div className="flex">*/}
                            {/*        <p className="text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">AMOUNT</p>*/}
                            {/*        <p className="text-label-paid text-sm md:text-base xl:text-2xl font-semibold">${totalAmount}</p>*/}
                            {/*    </div>*/}
                            {/*</section>*/}
                            <section className="flex mt-5 lg:mt-0">
                                <div
                                    className="flex md:flex-row lg:gap-2 md:gap-10 gap-4 md:items-start lg:items-center lg:flex-col flex-col items-center">
                                    <QRGenerate userId={userId} total={total} orderId={orderId}/>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}