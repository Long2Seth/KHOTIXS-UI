import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function OrderInfoRequirementFormSkeleton() {
    return (
        <div className="w-full space-y-2.5 lg:w-[670px]">
            <div className="space-y-2.5">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2.5">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2.5">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-10 w-full" />
            </div>
            <div className="flex gap-[10px] pt-[10px]">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
            </div>
        </div>
    );
}