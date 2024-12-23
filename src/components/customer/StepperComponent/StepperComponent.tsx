'use client';
import { useState, useEffect } from 'react';
import { LuBadgeCheck } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export default function StepperComponent() {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    // Simulate loading state
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000); // 1 second delay
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <StepperComponentSkeleton />;
    }

    if (pathname === "/order-info-requirement") {
        return (
            <ol className="flex items-center w-full cursor-pointer text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:w-[670px] sm:text-base">
                <li className="flex items-center md:w-full text-primary-color dark:text-primary-color sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                        <LuBadgeCheck className="me-2 text-primary-color" />
                        Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    </span>
                </li>
                <li className="flex items-center md:w-full cursor-pointer after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                        Payment <span className="hidden sm:inline-flex sm:ms-2">Details</span>
                    </span>
                </li>
                <li className="flex items-center cursor-pointer">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                        Pay <span className="hidden sm:inline-flex sm:ms-2">Now</span>
                    </span>
                </li>
            </ol>
        );
    } else if (pathname === "/payment-details") {
        return (
            <ol className="flex items-center w-full text-sm font-medium text-center text-primary-color dark:text-primary-color lg:w-[670px] sm:text-base">
                <li className="flex items-center md:w-full  dark:text-primary-color sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after: dark:after:text-gray-500">
                        <LuBadgeCheck className="me-2 text-primary-color" />
                        Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    </span>
                </li>
                <li className="flex items-center md:w-full text-primary-color dark:text-primary-color after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-primary-color">
                        <LuBadgeCheck className="me-2 text-primary-color" />
                        Payment <span className="hidden sm:inline-flex sm:ms-2">Details</span>
                    </span>
                </li>
                <li className="flex items-center">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-primary-color">
                        Pay <span className="hidden sm:inline-flex sm:ms-2">Now</span>
                    </span>
                </li>
            </ol>
        );
    }

    return (
        <ol className="flex items-center w-full text-sm font-medium text-center text-primary-color dark:text-gray-400 lg:w-[670px] sm:text-base">
            <li className="flex items-center md:w-full text-primary-color dark:text-primary-color sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <LuBadgeCheck className="me-2 text-primary-color" />
                    Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                </span>
            </li>
            <li className="flex items-center md:w-full text-primary-color dark:text-primary-color after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <LuBadgeCheck className="me-2 text-primary-color" />
                    Payment <span className="hidden sm:inline-flex sm:ms-2">Details</span>
                </span>
            </li>
            <li className="flex items-center">
                <span className="flex items-center text-gray-200 after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-400 dark:after:text-primary-color">
                    <LuBadgeCheck className="me-2 text-primary-color" />
                    Pay <span className="hidden sm:inline-flex sm:ms-2 text-primary-color">Now</span>
                </span>
            </li>
        </ol>
    );
}

function StepperComponentSkeleton() {
    return (
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:w-[670px] sm:text-base">
            <li className="flex items-center md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <Skeleton className="h-6 w-24" />
            </li>
            <li className="flex items-center md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <Skeleton className="h-6 w-24" />
            </li>
            <li className="flex items-center">
                <Skeleton className="h-6 w-24" />
            </li>
        </ol>
    );
}
