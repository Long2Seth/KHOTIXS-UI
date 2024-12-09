import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function CardEventSkeletonComponent() {
    return (
        <section className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark py-[30px] md:py-[50px] flex flex-col justify-center items-center h-auto">
            <section className="w-full flex flex-col justify-center items-center">
                <Skeleton className="h-8 lg:h-10 xl:h-12 2xl:h-14 w-3/4 lg:w-1/2 xl:w-1/3" />
                <Skeleton className="mt-4 h-4 lg:h-6 xl:h-8 2xl:h-10 w-full lg:w-3/4 xl:w-2/3" />
            </section>
            <section
                className="w-full h-auto grid grid-cols-2 gap-2 md:gap-5 sm:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 md:mt-1 justify-center items-center px-[20px]">
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]"/>
                        <Skeleton className="h-4 w-[200px]"/>
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]"/>
                        <Skeleton className="h-4 w-[200px]"/>
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]"/>
                        <Skeleton className="h-4 w-[200px]"/>
                    </div>
                </div>
            </section>
        </section>
    );
}