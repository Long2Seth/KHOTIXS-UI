import { Skeleton } from "@/components/ui/skeleton";

export function StepperComponentSkeleton() {
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