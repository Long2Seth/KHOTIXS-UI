import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
    return (
        <section className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto h-auto flex justify-center items-center mb-5">
                <div className="rounded-lg w-full max-w-[1200px] flex flex-wrap justify-center gap-y-4">
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                </div>
            </div>
            <div className="w-full max-w-[1200px] mx-auto py-4">
                <Skeleton className="h-8 w-48 mb-6" />
                <div className="w-full flex flex-col md:flex-row justify-start items-center md:items-start gap-6">
                    <div className="relative w-[170px] rounded-lg shadow-lg">
                        <Skeleton className="aspect-square w-full rounded-lg" />
                        <Skeleton className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white p-2 shadow-lg" />
                    </div>
                    <div className="w-full md:w-[897px]">
                        <Skeleton className="h-10 w-full mb-2" />
                        <Skeleton className="h-10 w-full mb-2" />
                        <Skeleton className="h-10 w-full mb-2" />
                        <Skeleton className="h-10 w-full mb-2" />
                        <Skeleton className="h-10 w-full mb-2" />
                    </div>
                </div>
            </div>
        </section>
    );
}