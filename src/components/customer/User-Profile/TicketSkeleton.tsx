import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function TicketsSkeleton() {
    return (
        <main className="container mx-auto mt-7 px-4 sm:px-6 lg:px-8">
            <div className="w-full mx-auto h-auto flex justify-center items-center mb-5">
                <div className="rounded-lg w-full max-w-[1200px] flex flex-wrap justify-center gap-y-4">
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                    <Skeleton className="h-[60px] w-[22%] rounded-lg" />
                </div>
            </div>
            <section className="w-full max-w-[1200px] mx-auto">
                <div className="max-w-[1200px] mx-auto flex justify-center items-center">
                    <div className="mb-5 w-full">
                        <div className="grid w-[400px] grid-cols-2">
                            <Skeleton className="h-full rounded-l-[5px] border-[1px] py-5" />
                            <Skeleton className="h-full rounded-r-[5px] border-[1px] py-5" />
                        </div>
                        <div className="pt-5">
                            <div className="flex flex-col">
                                <Skeleton className="h-20 w-full mb-2" />
                                <Skeleton className="h-20 w-full mb-2" />
                                <Skeleton className="h-20 w-full mb-2" />
                                <Skeleton className="h-20 w-full mb-2" />
                                <Skeleton className="h-20 w-full mb-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}