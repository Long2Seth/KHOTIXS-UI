import {Skeleton} from "@/components/ui/skeleton";
import React from "react";

export default function SkeletonEventByCategory() {
    return (
             // Card Event
            <section
                className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark py-[30px] md:py-[50px] flex flex-col justify-center items-center h-auto">
                <section className=" w-[300px] h-[50px] mt-10">
                    <Skeleton className=" w-full[500px] h-full "/>
                </section>
                <section
                    className="h-auto mt-10 grid gap-2 grid-cols-1 sm:grid-cols-2 sm:w-full md:gap-5 md:grid-cols-2 lg:max-w-full lg:grid-cols-3 justify-center items-center sm:p-0 lg:px-[30px]">
                    {Array.from({length: 12}).map((_, index) => (
                        <div key={index} className="flex flex-col space-y-3">
                            <Skeleton className="h-[200px] w-[250px] rounded-xl"/>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]"/>
                                <Skeleton className="h-4 w-[200px]"/>
                            </div>
                        </div>
                    ))}
                </section>
            </section>

    )
}