import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function FooterSkeletonComponent() {
    return (
        <footer className="w-full bg-white dark:bg-khotixs-background-dark py-[100px]">
            {/* Main Footer Section */}
            <section className="container mx-auto text-gray-400 grid md:grid-cols-2 xl:grid-cols-4 justify-center md:justify-between gap-y-20">
                {/* Logo and Description */}
                <div className="w-[200px]">
                    <Skeleton className="w-[100px] h-[100px] mb-4" />
                    <Skeleton className="text-[16px] max-w-[300px] h-[60px]" />
                </div>

                {/* Event Category */}
                <div className="w-[200px]">
                    <Skeleton className="font-bold text-lg mb-4 w-[150px] h-[24px]" />
                    <ul className="space-y-2">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <li key={index}>
                                <Skeleton className="h-[20px] w-[100px]" />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support & Information */}
                <div className="w-[200px]">
                    <Skeleton className="font-bold text-lg mb-4 w-[200px] h-[24px]" />
                    <ul className="space-y-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <li key={index}>
                                <Skeleton className="h-[20px] w-[100px]" />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sponsors and Organizer */}
                <div className="w-[200px]">
                    <Skeleton className="font-bold text-lg mb-4 w-[150px] h-[24px]" />
                    <div className="flex space-x-4 mb-4">
                        <Skeleton className="w-[100px] h-[100px]" />
                        <Skeleton className="w-[100px] h-[100px]" />
                    </div>
                    <Skeleton className="font-bold text-lg mb-4 w-[150px] h-[24px]" />
                    <Skeleton className="w-[300px] h-[100px]" />
                </div>
            </section>

            {/* Footer Bottom Section */}
            <section className="w-full font-medium text-lg text-center py-[50px] text-primary-color-text dark:text-secondary-color-text">
                <Skeleton className="w-[200px] h-[24px] mx-auto" />
            </section>
        </footer>
    );
}