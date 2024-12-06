import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCardCategoryComponent() {
    return (
        <section className="container mx-auto w-full bg-white dark:bg-gray-800 py-12 font-bold flex flex-col justify-center items-center h-auto">
            {/* Title Skeleton */}
            <Skeleton className="my-5 w-2/3 h-8 rounded" />

            {/* Cards Skeleton */}
            <section className="px-5 mt-2 justify-center gap-3 flex flex-wrap sm:w-full sm:grid sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-300 dark:bg-gray-700 rounded-lg w-[145px] h-[65px] sm:w-full sm:h-[85px] md:h-[100px] lg:h-[140px] flex flex-col justify-center items-center shadow-lg"
                    >
                        {/* Icon Skeleton */}
                        <Skeleton className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] rounded-full mb-3" />
                        {/* Text Skeleton */}
                        <Skeleton className="w-2/3 h-4 rounded" />
                    </div>
                ))}
            </section>
        </section>
    );
}
