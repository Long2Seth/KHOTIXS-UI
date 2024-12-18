import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function PaymentDetailsSkeleton() {
    const detailStyle = "text-[16px] font-medium";

    return (
        <section className="w-full lg:w-[670px] flex flex-col gap-5">
            {/* Card Your Order */}
            <section>
                <div className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px]">
                    <Skeleton className="h-6 w-32" />
                    <div className="grid gap-2.5 lg:gap-0 grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center">
                            <Skeleton className={`h-4 w-full ${detailStyle}`} />
                        </div>
                        <div className="flex gap-2.5 flex-col lg:flex-row items-start lg:items-center lg:justify-between">
                            <Skeleton className={`h-4 w-full ${detailStyle}`} />
                            <section className="w-fit flex items-center justify-end gap-1 lg:gap-2">
                                <Skeleton className="h-10 w-10 rounded-[4px]" />
                                <Skeleton className="h-4 w-4" />
                                <Skeleton className="h-10 w-10 rounded-[4px]" />
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* Personal Details */}
            <section>
                <div className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px]">
                    <Skeleton className="h-6 w-32" />
                    <div className="flex flex-col gap-2.5">
                        <div className="grid grid-cols-2">
                            <Skeleton className={`h-4 w-full ${detailStyle}`} />
                            <Skeleton className={`h-4 w-full ${detailStyle}`} />
                        </div>
                        <div className="grid grid-cols-2">
                            <Skeleton className={`h-4 w-full ${detailStyle}`} />
                            <Skeleton className={`h-4 w-full ${detailStyle}`} />
                        </div>
                        <div className="grid grid-cols-2">
                            <Skeleton className={`h-4 w-full ${detailStyle}`} />
                            <Skeleton className={`h-4 w-full ${detailStyle}`} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Total */}
            <section>
                <div className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px]">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-8 w-24 text-[#B32615] font-bold text-[32px]" />
                </div>
            </section>
            {/* Payment Method */}
            <section>
                <div className="flex flex-col gap-5 w-full lg:w-[670px] border border-[#E5E7EB] rounded-[8px] p-[20px]">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-10 w-24" />
                </div>
            </section>
            {/* Button */}
            <section>
                <div className="flex gap-[10px] pt-[10px]">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                </div>
            </section>
        </section>
    );
}