import { LuBadgeCheck } from "react-icons/lu";

export default function StepperComponent() {
    return (
        <ol className="flex items-center w-full lg:w-[670px] text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="flex md:w-full items-center text-secondary-color dark:text-secondary-color sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <LuBadgeCheck className="text-secondary-color me-2"/>
                    Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                </span>
            </li>
            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    Payment <span className="hidden sm:inline-flex sm:ms-2">Details</span>
                </span>
            </li>
            <li className="flex items-center">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    Pay <span className="hidden sm:inline-flex sm:ms-2">Now</span>
                </span>
            </li>
        </ol>
    )
}