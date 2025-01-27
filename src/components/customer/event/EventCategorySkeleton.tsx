import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

export function EventCategorySkeleton() {
    return (
        <section className=" space-y-10" >
            <section
                className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark py-[30px] md:py-[50px] flex flex-col justify-center items-center h-auto">
                <section
                    className="container mx-auto h-auto mt-10 md:flex gap-5 justify-center items-center grid grid-col-3">
                    {Array.from({length: 3}).map((_, index) => (
                        <div key={index} className="flex flex-col space-y-3">
                            <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]"/>
                                <Skeleton className="h-4 w-[200px]"/>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
            <section
                className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark py-[30px] md:py-[50px] flex flex-col justify-center items-center h-auto">
                <section
                    className="container mx-auto h-auto mt-10 md:flex gap-5 justify-center items-center grid grid-col-3">
                    {Array.from({length: 3}).map((_, index) => (
                        <div key={index} className="flex flex-col space-y-3">
                            <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]"/>
                                <Skeleton className="h-4 w-[200px]"/>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </section>
    );
}