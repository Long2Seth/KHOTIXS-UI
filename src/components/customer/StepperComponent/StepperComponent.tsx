'use client';
import { LuBadgeCheck } from "react-icons/lu";
import { usePathname } from "next/navigation";

export default function StepperComponent() {
    const pathname = usePathname();

    if (pathname === "/order-info-requirement") {
        return (
            <ol className="flex justify-between gap-6 lg:gap-10 items-center px-4 w-full cursor-pointer text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:w-[670px] sm:text-base">
                <li className="flex items-center md:w-full text-primary-color dark:text-primary-color">
                    <span
                        className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                        <LuBadgeCheck className="me-2 text-primary-color"/>
                        Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    </span>
                </li>
                <hr className="border-0.5 border-gray-400 w-full hidden md:inline-flex"/>
                <li className="flex items-center md:w-full cursor-pointer">
                    <span
                        className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                        Payment <span className="hidden sm:inline-flex sm:ms-2">Details</span>
                    </span>
                </li>
                <hr className="border-0.5 border-gray-400 w-full hidden md:inline-flex"/>
                <li className="flex items-center cursor-pointer">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                        Pay <span className="hidden sm:inline-flex sm:ms-2">Now</span>
                    </span>
                </li>
            </ol>
        );
    } else if (pathname === "/payment-details") {
        return (
            <ol className="flex gap-6 lg:gap-10 items-center px-4 w-full cursor-pointer text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:w-[670px] sm:text-base">
                <li className="flex items-center md:w-full text-primary-color dark:text-primary-color ">
                    <span
                        className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                        <LuBadgeCheck className="me-2 text-primary-color"/>
                        Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    </span>
                </li>
                <hr className="border-0.5 border-gray-400 w-full hidden md:inline-flex"/>
                <li className="flex items-center md:w-full text-primary-color dark:text-primary-color">
                    <span
                        className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                        <LuBadgeCheck className="me-2 text-primary-color"/>
                        Payment <span className="hidden sm:inline-flex sm:ms-2">Details</span>
                    </span>
                </li>
                <hr className="border-0.5 border-gray-400 w-full hidden md:inline-flex"/>
                <li className="flex items-center">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                        Pay <span className="hidden sm:inline-flex sm:ms-2">Now</span>
                    </span>
                </li>
            </ol>
        );
    }

    return (
        <ol className="flex justify-between gap-6 lg:gap-10 items-center px-4 w-full cursor-pointer text-sm font-medium text-center text-gray-500 dark:text-gray-400 lg:w-[670px] sm:text-base">
            <li className="flex items-center md:w-full text-primary-color dark:text-primary-color">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                    <LuBadgeCheck className="me-2 text-primary-color" />
                    Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                </span>
            </li>
            <hr className="border-0.5 border-gray-400 w-full hidden md:inline-flex"/>
            <li className="flex items-center md:w-full text-primary-color dark:text-primary-color ">
                <span
                    className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                    <LuBadgeCheck className="me-2 text-primary-color"/>
                    Payment <span className="hidden sm:inline-flex sm:ms-2">Details</span>
                </span>
            </li>
            <hr className="border-0.5 border-gray-400 w-full hidden md:inline-flex"/>
            <li className="flex items-center  text-primary-color">
                <span
                    className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500 dark:after:text-gray-500">
                    <LuBadgeCheck className="me-2 text-primary-color"/>
                    Pay <span className="hidden sm:inline-flex sm:ms-2">Now</span>
                </span>
            </li>
        </ol>
    );
}