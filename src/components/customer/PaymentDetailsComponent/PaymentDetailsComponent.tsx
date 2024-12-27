'use client'

import React, { useState } from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {MinusIcon, PlusIcon} from "lucide-react";
import {PaymentDetailsSkeleton} from "@/components/customer/PaymentDetailsComponent/PaymentDetailsSkeleton";


export default function PaymentDetailsComponent() {

    // Router
    const router = useRouter();

    const [isLoading] = useState(true);

    // Ticket Type
    // enum TicketType {
    //     VIP = "VIP",
    //     Premium = "Premium",
    //     Regular = "Regular",
    //     Free = "Free"
    // }

    // Style
    const detailStyle = "text-[16px] font-medium";

    // Total Price
    // const totalPrice = `45.00`;

    // Pay Now 
    function payNow() {
        router.push("/pay-now");
    }


    return (
        <>
            {
                isLoading ? <PaymentDetailsSkeleton/> :
                    <section className="w-full lg:w-[670px] flex flex-col gap-5">
                        {/* Card Your Order */}
                        <section>
                            <div
                                className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px] bg-white dark:bg-khotixs-background-dark ">
                                <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold uppercase dark:text-dark-description-color ">your order</h2>
                                <div className="grid gap-2.5 lg:gap-0 grid-cols-1 lg:grid-cols-2">
                                    <div className="flex items-center">
                                        <p className={detailStyle}>The Q Of Rise The Queen</p>
                                    </div>
                                    <div
                                        className="flex gap-2.5 flex-col lg:flex-row items-start lg:items-center lg:justify-between">
                                        <p className={detailStyle}>Ticket Type:</p>
                                        {/*Count Button*/}
                                        <section className="w-fit flex items-center justify-end gap-1 lg:gap-2">
                                            <Button
                                                className="p-1 bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 text-label-premium w-[40px] h-[40px] rounded-[4px]"
                                            >
                                                <MinusIcon className="h-2 w-2"/>
                                            </Button>
                                            <span className="w-4 font-bold text-center">3</span>
                                            <Button
                                                className="p-1 bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 text-label-premium w-[40px] h-[40px] rounded-[4px]"
                                                size="sm"
                                            >
                                                <PlusIcon className="h-2 w-2"/>
                                            </Button>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Personal Details */}
                        <section>
                            <div
                                className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px] bg-white dark:bg-khotixs-background-dark ">
                                <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold uppercase dark:text-dark-description-color ">personal details</h2>
                                <div className="flex flex-col gap-2.5">
                                    <div className="grid grid-cols-2">
                                        <p className={detailStyle}>Name</p>
                                        <p className={detailStyle}></p>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <p className={detailStyle}>Email</p>
                                        <p className={detailStyle}></p>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <p className={detailStyle}>Phone Number</p>
                                        <p className={detailStyle}></p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Total */}
                        <section className="bg-white dark:bg-khotixs-background-dark ">
                            <div
                                className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px]">
                                <h2 className="text-[18px] uppercase font-bold">total</h2>
                                <p className="text-[#B32615] font-bold text-[32px]">$</p>
                            </div>
                        </section>
                        {/* Payment Method */}
                        <section className=" bg-white dark:bg-khotixs-background-dark  ">
                            <div
                                className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px]">
                                <h2 className="text-[18px] uppercase font-bold">payment method</h2>
                                <Image
                                    src="/khqr/khqr.png"
                                    width={100}
                                    height={40}
                                    alt="Payment Method"
                                />
                            </div>
                        </section>
                        {/* Button */}
                        <section>
                            <div className="flex gap-[10px] pt-[10px]">
                                <Button
                                    className="w-full bg-white p-[12px] text-red-600 border-[1px]  hover:text-white border-red-600 dark:text-label-paid dark:bg-khotixs-background-dark dark:border-red-600 hover:bg-red-500 dark:hover:bg-red-500 dark:hover:text-white dar:hover:text-white rounded-[6px] "
                                    onClick={() => router.back()}
                                >
                                    Back
                                </Button>
                                <Button
                                    onClick={payNow}
                                    className="w-full text-secondary-color-text bg-primary-color hover:bg-primary-color rounded-[6px] border border-primary-color hover:bg-primary-color/80 "
                                >
                                    Pay Now
                                </Button>
                            </div>
                        </section>
                    </section>
            }
        </>
    )
}