'use client'

import React from "react";
import { useAppSelector } from "@/redux/hook";
import { selectPreOrder } from "@/redux/features/pre-order/preOrderSlice";
import { OrderInfoType } from "@/lib/definitions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PaymentDetailsComponent() {

    // Selectors
    const preOrder: OrderInfoType = useAppSelector(selectPreOrder);

    // Router
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

    return (
        <section className="flex flex-col gap-5">
            {/* Card Your Order */}
            <section>
                <div className="flex flex-col gap-5 lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px]">
                    <h2 className="text-[18px] uppercase font-bold">your order</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <p className={detailStyle}>The Q Of Rise The Queen</p>
                        <p className={detailStyle}>Ticket Type: {TicketType.Regular}</p>
                    </div>
                </div>
            </section>
            {/* Personal Details */}
            <section>
                <div className="flex flex-col gap-5 lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px]">
                    <h2 className="text-[18px] uppercase font-bold">personal details</h2>
                    <div className="flex flex-col gap-2.5">
                        <div className="grid grid-cols-2">
                            <p className={detailStyle}>Name</p>
                            <p className={detailStyle}>{preOrder.fullName ?? `Empty`}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className={detailStyle}>Email</p>
                            <p className={detailStyle}>{preOrder.email ?? `Empty`}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className={detailStyle}>Phone Number</p>
                            <p className={detailStyle}>{preOrder.phoneNumber ?? `Empty`}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Total */}
            <section>
                <div className="flex flex-col gap-5 lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px]">
                    <h2 className="text-[18px] uppercase font-bold">total</h2>
                    <p className="text-[#B32615] font-bold text-[32px]">$ {totalPrice}</p>
                </div>
            </section>
            {/* Payment Method */}
            <section>
                <div className="flex flex-col gap-5 lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px]">
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
                        className="w-full bg-white hover:bg-slate-200 text-primary-color-text border-solid border-[1px] border-black"
                        onClick={() => router.back()}
                    >
                        Back
                    </Button>
                    <Button
                        type="submit"
                        className="w-full bg-primary-color hover:bg-red-900"
                    >
                        Pay Now
                    </Button>
                </div>
            </section>
        </section>
    )
}