import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {Card, CardContent} from "@/components/ui/card";


export function ProfileComponentSkeleton() {
    return (
        <section className="container lg:max-w-[50%] mx-auto my-10 px-4">
            <Card className="w-full md:p-10 p-4 rounded-[6px] bg-white dark:backdrop-blur dark:bg-opacity-5">
                <CardContent className="w-full relative flex md:flex-row flex-col justify-between">
                    <section className="lg:max-w-[80%] items-start justify-center">
                        <div className="relative w-44 rounded-full border-4 border-gray-200 dark:border-white">
                            <div className="aspect-square shadow-2xl rounded-full overflow-hidden">
                                <Skeleton className="w-full h-full rounded-full"/>
                            </div>
                        </div>
                        <Skeleton className="h-8 w-[200px] mt-4"/>
                    </section>
                    <section className="absolute items-center right-0 justify-center">
                        <Skeleton className="h-10 w-[100px]"/>
                    </section>
                </CardContent>
            </Card>
            <section className="bg-white md:p-10 p-4 my-4 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5">
                <Skeleton className="h-8 w-[200px] mb-4"/>
                <Skeleton className="h-6 w-[150px] mb-4 ml-2"/>
                <Skeleton className="h-6 w-[200px] mb-4 ml-2"/>
            </section>
            <section className="bg-white md:p-10 p-4 my-4 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5">
                <Skeleton className="h-8 w-[200px] mb-4"/>
                <Skeleton className="h-6 w-[150px] mb-4 ml-2"/>
                <Skeleton className="h-6 w-[200px] mb-4 ml-2"/>
            </section>
            <section className="bg-white md:p-10 p-4 my-4 rounded-[6px] dark:backdrop-blur dark:bg-opacity-5">
                <Skeleton className="h-8 w-[200px] mb-4"/>
                <Skeleton className="h-6 w-[150px] mb-4 ml-2"/>
                <Skeleton className="h-6 w-[200px] mb-4 ml-2"/>
            </section>
        </section>
    );
}