import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonNavbarComponent () {
    return (
        <nav className="w-full sticky top-[-60px] z-50 bg-white flex flex-col dark:bg-khotixs-background-dark">
            {/* Announcement Banner Skeleton */}
            <section className="container mx-auto w-full h-[60px] flex justify-center items-center gap-5 bg-white dark:bg-khotixs-background-dark">
                <Skeleton className="w-[40px] h-[40px] rounded-full" />
                <Skeleton className="h-10 w-[250px] rounded-[6px]" />
                <Skeleton className="h-10 w-[80px] rounded-[6px]" />
            </section>
        </nav>
    );
};
