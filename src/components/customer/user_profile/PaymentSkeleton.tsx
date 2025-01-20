import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function PaymentSkeleton() {
    return (
        <section className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">
            {/* List all tab have 4 */}
            <div className="w-full mx-auto h-auto flex justify-center items-center mb-5">
                <div className="rounded-lg w-full max-w-[1200px] flex flex-wrap justify-center gap-y-4">
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                </div>
            </div>

            <div className="w-full mx-auto h-auto flex justify-center items-center">
                <div className="w-full max-w-[1200px]">
                    <Skeleton className="h-8 w-48 mb-6" />
                    <div className="w-full mx-auto h-auto flex justify-center items-center">
                        <div className="w-full max-w-[1200px] p-2">
                            <Skeleton className="h-10 w-full mb-2" />
                            <Skeleton className="h-10 w-full mb-2" />
                            <Skeleton className="h-10 w-full mb-2" />
                            <Skeleton className="h-10 w-full mb-2" />
                            <Skeleton className="h-10 w-full mb-2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-center">
                <Skeleton className="h-10 w-32" />
            </div>
        </section>
    );
}