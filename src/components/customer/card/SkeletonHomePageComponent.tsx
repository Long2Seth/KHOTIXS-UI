import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

export function SkeletonHomePageComponent() {
    return (
        <section className=" space-y-10">

            {/* Banner Skeleton */}
            <section className=" w-full h-[500px] ">
                <Skeleton className="h-[500px] w-full"/>
            </section>

            {/* Card Event */}
            <section
                className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark py-[30px] md:py-[50px] flex flex-col justify-center items-center h-auto">
                <section className="w-full flex flex-col justify-center items-center">
                    <Skeleton className="h-8 lg:h-10 xl:h-12 2xl:h-14 w-3/4 lg:w-1/2 xl:w-1/3"/>
                    <Skeleton className="mt-4 h-4 lg:h-6 xl:h-8 2xl:h-10 w-full lg:w-3/4 xl:w-2/3"/>
                </section>
                <section
                    className="container mx-auto h-auto mt-10 md:flex gap-5 justify-center items-center grid grid-col-3">
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
            <section
                className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark py-[30px] md:py-[50px] flex flex-col justify-center items-center h-auto">
                <section className="w-full flex flex-col justify-center items-center">
                    <Skeleton className="h-8 lg:h-10 xl:h-12 2xl:h-14 w-3/4 lg:w-1/2 xl:w-1/3"/>
                    <Skeleton className="mt-4 h-4 lg:h-6 xl:h-8 2xl:h-10 w-full lg:w-3/4 xl:w-2/3"/>
                </section>
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
                <section className="w-full flex flex-col justify-center items-center">
                    <Skeleton className="h-8 lg:h-10 xl:h-12 2xl:h-14 w-3/4 lg:w-1/2 xl:w-1/3"/>
                    <Skeleton className="mt-4 h-4 lg:h-6 xl:h-8 2xl:h-10 w-full lg:w-3/4 xl:w-2/3"/>
                </section>
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
                <section className="w-full flex flex-col justify-center items-center">
                    <Skeleton className="h-8 lg:h-10 xl:h-12 2xl:h-14 w-3/4 lg:w-1/2 xl:w-1/3"/>
                    <Skeleton className="mt-4 h-4 lg:h-6 xl:h-8 2xl:h-10 w-full lg:w-3/4 xl:w-2/3"/>
                </section>
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
                <section className="w-full flex flex-col justify-center items-center">
                    <Skeleton className="h-8 lg:h-10 xl:h-12 2xl:h-14 w-3/4 lg:w-1/2 xl:w-1/3"/>
                    <Skeleton className="mt-4 h-4 lg:h-6 xl:h-8 2xl:h-10 w-full lg:w-3/4 xl:w-2/3"/>
                </section>
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