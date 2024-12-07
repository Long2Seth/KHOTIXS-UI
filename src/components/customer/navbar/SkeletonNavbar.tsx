import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonNavbarComponent () {
    return (
        <nav className="w-full sticky top-[-60px] z-50 bg-white flex flex-col dark:bg-khotixs-background-dark">
            {/* Announcement Banner Skeleton */}
            <section className="container mx-auto w-full h-[60px] flex justify-center items-center gap-5 bg-white dark:bg-khotixs-background-dark">
                <Skeleton className="w-[40px] h-[40px] rounded-full" />
                <Skeleton className="h-6 w-[200px]" />
                <Skeleton className="h-10 w-[150px] rounded-md" />
            </section>

            {/* Navbar Skeleton */}
            <section className="container mx-auto w-full py-[15px]">
                <div className="flex justify-between items-center h-14">
                    {/* Logo Skeleton */}
                    <Skeleton className="w-[60px] h-[60px] rounded-full" />

                    {/* Search Form Skeleton */}
                    <div className="lg:w-[590px] flex items-center gap-2">
                        <Skeleton className="w-[30%] h-10 rounded-md" />
                        <Skeleton className="w-[180px] h-10 rounded-md hidden lg:block" />
                        <Skeleton className="w-[200px] h-10 rounded-md hidden md:block" />
                        <Skeleton className="w-[40px] h-10 rounded-md" />
                    </div>

                    {/* Buttons Skeleton */}
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-10 w-[50px] rounded-md" />
                        <Skeleton className="h-10 w-[120px] rounded-md hidden lg:block" />
                    </div>
                </div>
            </section>

            {/* Mobile Menu Skeleton */}
            <div className="lg:hidden flex justify-end items-center p-5">
                <Skeleton className="w-10 h-10 rounded-full" />
            </div>
            <div
                className={`lg:hidden px-5 mt-4 border rounded-md bg-white dark:bg-khotixs-background-dark hidden`}
            >
                <div className="flex flex-col space-y-2">
                    <Skeleton className="h-6 w-[150px]" />
                    <Skeleton className="h-6 w-[150px]" />
                    <Skeleton className="h-6 w-[150px]" />
                </div>
            </div>
        </nav>
    );
};
