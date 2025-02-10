'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { useCreateOrderMutation } from "@/redux/feature/user/order/Order";
import { RootState } from "@/lib/store";

export default function PaymentDetailsComponent() {
    const router = useRouter();
    const [createOrder] = useCreateOrderMutation();
    const [isLoading, setIsLoading] = useState(false);

    // Get data from slices
    const orderData = useSelector((state: RootState) => state.order);
    const requirementData = useSelector((state: RootState) => state.requirement);

    const detailStyle = "text-[16px] font-medium";

    // Calculate total price
    const totalPrice = orderData.tickets?.reduce((total, ticket) => total + (ticket.price * ticket.quantity), 0) || 0;

    // Pay Now
    const payNow = async () => {
        setIsLoading(true);
        // Create order
        const orderPayload = {
            fullName: requirementData.formData?.fullName,
            email: requirementData.formData?.email,
            phoneNumber: requirementData.formData?.phoneNumber,
            eventId: orderData.eventId || undefined,
            tickets: orderData.tickets,
        };

        console.log("  orderPayload", orderPayload);

        await createOrder(orderPayload);

        router.push("/pay-now");
        setIsLoading(false);
    };

    return (
        <div className="w-full lg:w-[670px] flex flex-col gap-5">
            {/* Card Your Order */}
            <section>
                <div
                    className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] dark:border-none bg-white dark:backdrop-blur dark:bg-opacity-5 rounded-[8px] p-[20px]">
                    <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold uppercase dark:text-dark-description-color">
                        Your Order
                    </h2>
                    <p className={`${detailStyle} dark:font-bold`}>{orderData?.eventTitle}</p>
                    <table className="w-full">
                        <thead className={`font-medium`}>
                        <tr>
                            <th className="font-medium text-left">Ticket Type</th>
                            <th className="font-medium text-center">Quantity</th>
                            <th className="font-medium text-center">Price</th>
                            <th className="font-medium text-center">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orderData.tickets?.map((ticket, index) => (
                            <tr key={index}>
                                <td className={`${detailStyle} dark:font-bold`}>
                            <span className="dark:font-normal text-label-description dark:text-label-text-primary">
                                {ticket.ticketType}
                            </span>
                                </td>
                                <td className="text-center">{ticket.quantity}</td>
                                <td className="text-center">{ticket.price.toFixed(2)}</td>
                                <td className="text-center">{(ticket.price * ticket.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Personal Details */}
            <section>
                <div
                    className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px] dark:border-none bg-white dark:backdrop-blur dark:bg-opacity-5">
                    <h2 className="text-title-color text-base md:text-lg xl:text-xl font-bold uppercase dark:text-dark-description-color">
                        Personal Details
                    </h2>
                    <div className="flex flex-col gap-2.5">
                        <p>{requirementData.formData?.fullName}</p>
                        <p>{requirementData.formData?.phoneNumber}</p>
                        <p>{requirementData.formData?.email}</p>
                    </div>
                </div>
            </section>

            {/* Total */}
            <section className="bg-white dark:backdrop-blur dark:bg-opacity-5 rounded-[8px]">
                <div
                    className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] dark:border-none rounded-[8px] p-[20px]">
                    <h2 className="text-[18px] uppercase font-bold">Total</h2>
                    <p className="text-[#B32615] font-bold text-[32px]">${totalPrice.toFixed(2)}</p>
                </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white dark:backdrop-blur dark:bg-opacity-5 rounded-[8px]">
                <div
                    className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] dark:border-none rounded-[8px] p-[20px]">
                    <h2 className="text-[18px] uppercase font-bold">Payment Method</h2>
                    <Image src="/khqr/khqr.png" width={100} height={40} alt="Payment Method"/>
                </div>
            </section>

            {/* Button */}
            <section>
                <div className="flex gap-[10px] pt-[10px]">
                    <Button
                        className="w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-[6px]"
                        onClick={() => router.back()}>
                        Back
                    </Button>
                    <Button onClick={payNow}
                            className="w-full text-secondary-color-text bg-primary-color hover:bg-primary-color/90 rounded-[6px] border border-primary-color"
                            disabled={isLoading}>
                        Pay Now
                    </Button>
                </div>
            </section>
        </div>
    );
}