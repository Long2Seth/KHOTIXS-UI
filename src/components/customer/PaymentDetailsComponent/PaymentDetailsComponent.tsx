'use client'

import React, { useContext } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MinusIcon, PlusIcon } from "lucide-react";
import { OrderContext } from "@/app/(customer)/OrderContextProvider";



export default function PaymentDetailsComponent() {
    // Access order information from context
    const { orderInfo } = useContext(OrderContext)!; // Use non-null assertion operator if you're confident it's always available.

    const PreOrder = {
        fullName: orderInfo?.fullName,
        email: orderInfo?.email,
        phoneNumber: orderInfo?.phoneNumber,
    };

    const router = useRouter();

    // Style
    const detailStyle = "text-[16px] font-medium";

    // Total Price (Use dynamic or fetched value)
    const totalPrice = 45.0;

    // Pay Now
    function payNow() {
        router.push("/pay-now");
    }

    console.log("PreOrder:", PreOrder);

    return (
        <div className="w-full lg:w-[670px] flex flex-col gap-5">
            {/* Card Your Order */}
            <section>
                <div className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] dark:border-none bg-white dark:backdrop-blur dark:bg-opacity-5 rounded-[8px] p-[20px]">
                    <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold uppercase dark:text-dark-description-color">
                        Your Order
                    </h2>
                    <div className="flex items-center justify-between">
                        <p className={`${detailStyle} dark:font-bold`}>The Q Of Rise The Queen</p>
                        <div className="flex gap-2.5 flex-col lg:flex-row items-start lg:items-center lg:justify-between">
                            <p className={`${detailStyle} dark:font-bold`}>
                                <span className="dark:font-normal text-label-description dark:text-label-text-primary">
                                    Ticket Type:{" "}
                                </span>
                                Regular
                            </p>
                        </div>
                        {/* Count Button */}
                        <section className="w-fit flex items-center justify-end gap-1 lg:gap-2">
                            <Button
                                className="p-1 bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 text-label-premium w-[40px] h-[40px] rounded-[4px]"
                            >
                                <MinusIcon className="h-2 w-2" />
                            </Button>
                            <span className="w-4 font-bold text-center">3</span>
                            <Button
                                className="p-1 bg-blue-100 bg-opacity-70 hover:bg-blue-100 hover:bg-opacity-70 text-label-premium w-[40px] h-[40px] rounded-[4px]"
                                size="sm"
                            >
                                <PlusIcon className="h-2 w-2" />
                            </Button>
                        </section>
                    </div>
                </div>
            </section>

            {/* Personal Details */}
            <section>
                <div className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px] dark:border-none bg-white dark:backdrop-blur dark:bg-opacity-5">
                    <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold uppercase dark:text-dark-description-color">
                        Personal Details
                    </h2>
                    <div className="flex flex-col gap-2.5">
                        {Object.entries(orderInfo).map(([key, value]) => (
                            <div className="grid grid-cols-2" key={key}>
                                <p className={`${detailStyle} text-label-description dark:text-label-text-primary`}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </p>
                                <p className={`${detailStyle} dark:font-bold`}>{value ?? "Empty"}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Total */}
            <section className="bg-white dark:backdrop-blur dark:bg-opacity-5 rounded-[8px]">
                <div className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] dark:border-none rounded-[8px] p-[20px]">
                    <h2 className="text-[18px] uppercase font-bold">Total</h2>
                    <p className="text-[#B32615] font-bold text-[32px]">${totalPrice.toFixed(2)}</p>
                </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white dark:backdrop-blur dark:bg-opacity-5 rounded-[8px]">
                <div className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] dark:border-none rounded-[8px] p-[20px]">
                    <h2 className="text-[18px] uppercase font-bold">Payment Method</h2>
                    <Image src="/khqr/khqr.png" width={100} height={40} alt="Payment Method" />
                </div>
            </section>

            {/* Button */}
            <section>
                <div className="flex gap-[10px] pt-[10px]">
                    <Button
                        className="w-full hover:bg-label-paid hover:bg-opacity-20 p-[12px] text-red-600 border-[1px] border-red-600 dark:bg-backdrop-blur dark:bg-opacity-5 dark:text-red-600 dark:border-red-600 rounded-[6px]"
                        onClick={() => router.back()}
                    >
                        Back
                    </Button>
                    <Button
                        onClick={payNow}
                        className="w-full text-secondary-color-text bg-primary-color hover:bg-primary-color/90 rounded-[6px] border border-primary-color"
                    >
                        Pay Now
                    </Button>
                </div>
            </section>
        </div>
    );
}
