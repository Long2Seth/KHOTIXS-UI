import {Skeleton} from "@/components/ui/skeleton";


export default function TitleAndDesComponentSkeleton() {
    return (
        <section className="flex flex-col items-center justify-center gap-2.5">
            <Skeleton className="h-[28px] w-[200px] lg:h-[48px] lg:w-[400px]"/>
            <div className="flex items-center gap-[5px]">
                <Skeleton className="h-[24px] w-[24px] rounded-full"/>
                <Skeleton className="h-[12px] w-[150px] lg:h-[18px] lg:w-[300px]"/>
            </div>
        </section>
    )
}