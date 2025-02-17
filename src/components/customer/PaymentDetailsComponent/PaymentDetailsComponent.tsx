'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import { useCreateOrderMutation } from "@/redux/feature/user/order/Order";
import { RootState } from "@/lib/store";
import { setOrderResponse } from "@/redux/feature/user/order/orderResponseSlice";


export default function PaymentDetailsComponent() {
    const router = useRouter();
    const dispatch = useDispatch();
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

        try {
            const orderPayload = {
                fullName: requirementData.formData?.fullName,
                email: requirementData.formData?.email,
                userUuid: orderData.userUuid ?? undefined,
                phoneNumber: requirementData.formData?.phoneNumber,
                eventId: orderData.eventId ?? undefined,
                tickets: orderData.tickets,
            };

            const response = await createOrder(orderPayload).unwrap();
            console.log("Order response success :", response);
            dispatch(setOrderResponse(response));
            router.push("/pay-now");

        } catch (error) {
            console.error("Error creating order:", error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="w-full lg:w-[670px] flex flex-col gap-5">
            {/* Order Details */}
            <section>
                <div className="flex flex-col gap-5 w-full border border-gray-300 bg-white rounded-lg p-5">
                    <h2 className="text-lg font-bold uppercase">Your Order</h2>
                    <p className={detailStyle}>{orderData?.eventTitle}</p>
                    <table className="w-full">
                        <thead>
                        <tr>
                            <th className="text-left">Ticket Type</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orderData.tickets?.map((ticket, index) => (
                            <tr key={index}>
                                <td>{ticket.ticketType}</td>
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
                <div className="flex flex-col gap-5 w-full border border-gray-300 rounded-lg p-5 bg-white">
                    <h2 className="text-lg font-bold uppercase">Personal Details</h2>
                    <p>{requirementData.formData?.fullName}</p>
                    <p>{requirementData.formData?.phoneNumber}</p>
                    <p>{requirementData.formData?.email}</p>
                </div>
            </section>

            {/* Total */}
            <section>
                <div className="flex flex-col gap-5 w-full border border-gray-300 rounded-lg p-5 bg-white">
                    <h2 className="text-lg font-bold">Total</h2>
                    <p className="text-red-600 font-bold text-2xl">${totalPrice.toFixed(2)}</p>
                </div>
            </section>

            {/* Payment Method */}
            <section>
                <div className="flex flex-col gap-5 w-full border border-gray-300 rounded-lg p-5 bg-white">
                    <h2 className="text-lg font-bold">Payment Method</h2>
                    <Image src="/khqr/khqr.png" width={100} height={40} alt="Payment Method" />
                </div>
            </section>

            {/* Buttons */}
            <section>
                <div className="flex gap-3 pt-3">
                    <Button className="w-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg"
                            onClick={() => router.back()}>
                        Back
                    </Button>
                    <Button onClick={payNow}
                            className="w-full text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
                            disabled={isLoading}>
                        {isLoading ? "Processing..." : "Pay Now"}
                    </Button>
                </div>
            </section>

        </div>
    );
}
