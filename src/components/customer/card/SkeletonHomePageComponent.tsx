import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

export function SkeletonHomePageComponent() {
    return (
        <section className=" space-y-10">

            {/* Category Event*/}
            <section
                className="container mx-auto w-full py-12 font-bold flex flex-col justify-center items-center h-auto">
                {/* Title Skeleton */}
                <Skeleton className="my-5 w-2/3 h-8 rounded"/>

                {/* Cards Skeleton */}
                <section
                    className="px-5 mt-2 justify-center gap-3 flex flex-wrap sm:w-full sm:grid sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6">
                    {Array.from({length: 6}).map((_, index) => (
                        <div
                            key={index}
                            className=" bg-khotixs-background-white rounded-[6px] border  dark:bg-khotixs-background-dark w-[145px] h-[65px] sm:w-full sm:h-[85px] md:h-[100px] lg:h-[140px] flex flex-col justify-center items-center shadow-lg "
                        >
                            {/* Icon Skeleton */}
                            <Skeleton
                                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] rounded-full mb-3"/>
                            {/* Text Skeleton */}
                            <Skeleton className="w-2/3 h-4 rounded"/>
                        </div>
                    ))}
                </section>
            </section>

            {/* Card Event */}
            <section
                className="container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark py-[30px] md:py-[50px] flex flex-col justify-center items-center h-auto">
                <section className="w-full flex flex-col justify-center items-center">
                    <Skeleton className="h-8 lg:h-10 xl:h-12 2xl:h-14 w-3/4 lg:w-1/2 xl:w-1/3"/>
                    <Skeleton className="mt-4 h-4 lg:h-6 xl:h-8 2xl:h-10 w-full lg:w-3/4 xl:w-2/3"/>
                </section>
                <section
                    className="w-full h-auto grid grid-cols-3 gap-2 md:gap-5 sm:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 md:mt-1 justify-center items-center px-[20px]">
                    <div className="flex flex-col space-y-3 items-center w-full">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center w-full">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center w-full">
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
                    className="w-full h-auto grid grid-cols-3 gap-2 md:gap-5 sm:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 md:mt-1 justify-center items-center px-[20px]">
                    <div className="flex flex-col space-y-3 items-center w-full">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center w-full">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center w-full">
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
                    className="w-full h-auto grid grid-cols-3 gap-2 md:gap-5 sm:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 md:mt-1 justify-center items-center px-[20px]">
                    <div className="flex flex-col space-y-3 items-center w-full">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center w-full">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center w-full">
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
                    className="w-full h-auto grid grid-cols-3 gap-2 md:gap-5 sm:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 md:mt-1 justify-center items-center px-[20px]">
                    <div className="flex flex-col space-y-3 items-center w-full">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center w-full">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center w-full">
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
                    className="w-full h-auto grid grid-cols-3 gap-2 md:gap-5 sm:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 md:mt-1 justify-center items-center px-[20px]">
                    <div className="flex flex-col space-y-3 items-center w-full">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center w-full">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 items-center w-full">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}