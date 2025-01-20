'use client'

import React from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {MinusIcon, PlusIcon} from "lucide-react";


export default function PaymentDetailsComponent() {

    // PreOrder Object
    const preOrder = {
        fullName: "John Doe",
        email: "john.doe@example.com",
        phoneNumber: "123-456-7890"
    };
    const router = useRouter();

    // Ticket Type
    enum TicketType {
        VIP = "VIP",
        Premium = "Premium",
        Regular = "Regular",
        Free = "Free"
    }

    // Style
    const detailStyle = "text-[16px] font-medium";

    // Total Price
    const totalPrice = `45.00`;

    // Pay Now
    function payNow() {
        router.push("/pay-now");
    }


    return (
        <>
            <div className="w-full lg:w-[670px] flex flex-col gap-5">
                {/* Card Your Order */}
                <section>
                    <div
                        className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] dark:border-none bg-white dark:backdrop-blur dark:bg-opacity-5 rounded-[8px] p-[20px]">
                        <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold uppercase dark:text-dark-description-color ">your
                            order</h2>
                        <div className="flex items-center justify-between">
                            <p className={`${detailStyle} dark:font-bold`}>The Q Of Rise The Queen</p>
                            <div
                                className="flex gap-2.5 flex-col lg:flex-row items-start lg:items-center lg:justify-between">
                                <p className={`${detailStyle} dark:font-bold`}><span className="dark:font-normal text-label-description dark:text-label-text-primary">Ticket Type: </span>{TicketType.Regular}</p>
                            </div>
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
                </section>
                {/* Personal Details */}
                <section>
                    <div
                        className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px] dark:border-none bg-white dark:backdrop-blur dark:bg-opacity-5">
                        <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold uppercase dark:text-dark-description-color ">personal
                            details</h2>
                        <div className="flex flex-col gap-2.5">
                            <div className="grid grid-cols-2">
                                <p className={`${detailStyle} text-label-description dark:text-label-text-primary`}>Name</p>
                                <p className={`${detailStyle} dark:font-bold`}>{preOrder.fullName ?? `Empty`}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className={`${detailStyle} text-label-description dark:text-label-text-primary`}>Email</p>
                                <p className={`${detailStyle} dark:font-bold`}>{preOrder.email ?? `Empty`}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className={`${detailStyle} text-label-description dark:text-label-text-primary`}>Phone Number</p>
                                <p className={`${detailStyle} dark:font-bold`}>{preOrder.phoneNumber ?? `Empty`}</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Total */}
                <section className="bg-white dark:backdrop-blur dark:bg-opacity-5 rounded-[8px]">
                    <div
                        className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] dark:border-none rounded-[8px] p-[20px]">
                        <h2 className="text-[18px] uppercase font-bold">total</h2>
                        <p className="text-[#B32615] font-bold text-[32px]">$ {totalPrice}</p>
                    </div>
                </section>
                {/* Payment Method */}
                <section className="bg-white dark:backdrop-blur dark:bg-opacity-5 rounded-[8px]">
                    <div
                        className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] dark:border-none rounded-[8px] p-[20px]">
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
                            className="w-full hover:bg-label-paid hover:bg-opacity-20 p-[12px] text-red-600 border-[1px] border-red-600 dark:bg-backdrop-blur dark:bg-opacity-5 dark:text-red-600 dark:border-red-600 rounded-[6px] "
                            onClick={() => router.back()}
                        >
                            Back
                        </Button>
                        <Button
                            onClick={payNow}
                            className="w-full text-secondary-color-text bg-primary-color hover:bg-primary-color/90 rounded-[6px] border border-primary-color "
                        >
                            Pay Now
                        </Button>
                    </div>
                </section>
            </div>
        </>
    )
}