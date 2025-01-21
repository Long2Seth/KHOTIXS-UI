"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useTicket} from "@/context/TicketContext";
import QRGenerate from "@/components/customer/payNow/QRGenerate";

export default function PayNowComponent() {

    const {ticket} = useTicket()



    return (
        <>
            <section className="w-full flex flex-col gap-5">
                {/* Card Your Order */}
                <section>
                    <div
                        className="flex flex-col  gap-5 w-full rounded-[8px] p-5 bg-white dark:backdrop-blur dark:bg-opacity-5">
                        <div className="flex flex-col lg:flex-row md:gap-3 gap-5">
                            <section className="w-full space-y-2">

                                {ticket.reserveTickets?.map((ticket, index) => (
                                    <div key={index} >
                                        <div className="flex">
                                            <p className="uppercase text-description-color text-sm md:text-base xl:text-lg dark:text-white font-semibold">{ticket.event}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="  text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">QTY</p>
                                            <p className=" text-description-color text-sm md:text-base xl:text-lg font-semibold dark:text-white">{ticket.quantity
                                            }</p>
                                        </div>
                                        <div className="flex">
                                            <p className="  text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">TYPE </p>
                                            <p className=" text-description-color text-sm md:text-base xl:text-lg font-semibold dark:text-white">{ticket.type}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="  text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">PRICE </p>
                                            <p className=" text-description-color text-sm md:text-base xl:text-lg font-semibold dark:text-white">$
                                                {ticket.price}</p>
                                        </div>
                                        <div className="py-5 ">
                                            <hr className="border-[#E5E7EB] w-[90%]"/>
                                        </div>
                                    </div>
                                ))}

                                <div className="flex">
                                    <p className="  text-sm md:text-base xl:text-lg text-gray-400 min-w-[120px] dark:text-dark-description-color">AMOUNT</p>
                                    <p className=" text-label-paid text-sm md:text-base xl:text-2xl font-semibold">$
                                        {ticket.total}</p>
                                </div>
                            </section>
                            <section className="flex mt-5 lg:mt-0">
                                <div
                                    className="flex md:flex-row lg:gap-2 md:gap-10 gap-4 md:items-start lg:items-center lg:flex-col flex-col items-center">
                                    <QRGenerate/>
                                    <Link
                                        className="text-sm md:text-base xl:text-lg underline underline-offset-4 font-bold hover:text-label-published/90 text-label-published"
                                        href="your-deeplink-url" target="_blank" rel="noopener noreferrer">Open app to
                                        pay</Link>
                                </div>
                            </section>

                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}