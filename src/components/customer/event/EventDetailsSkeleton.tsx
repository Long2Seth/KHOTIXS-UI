import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

export default function EventDetailsSkeleton() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-black">
            <div className="container mx-auto px-2 py-8">
                {/* Breadcrumb skeleton */}
                <section className="mb-6 flex items-center gap-2">
                    <Skeleton className="h-4 w-40" />
                </section>

                {/* Event title skeleton */}
                <section className="flex space-x-2 mb-6">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-6 w-20" />
                </section>

                {/* Event details skeleton */}
                <section className="grid md:gap-2 lg:gap-8 md:grid-cols-2">
                    <div>
                        {/* Event cover skeleton */}
                        <Skeleton className="w-full aspect-video rounded-xl mb-6"/>

                        {/* Event info skeletons */}
                        <section className="space-y-2 mb-6">
                            <Skeleton className="h-6 w-40"/>
                            <Skeleton className="h-4 w-3/4"/>
                            <Skeleton className="h-4 w-3/4"/>
                        </section>

                        <section className="space-y-2 mb-6">
                            <Skeleton className="h-6 w-40"/>
                            <Skeleton className="h-4 w-full"/>
                        </section>

                        <section className="space-y-2 mb-6">
                            <Skeleton className="h-6 w-40"/>
                            <Skeleton className="h-4 w-full"/>
                            <Skeleton className="h-4 w-full"/>
                            <Skeleton className="h-4 w-full"/>
                        </section>
                        <Skeleton className="h-4 w-full"/>
                    </div>

                    {/* Tickets skeleton */}
                    <div className="space-y-6 mt-4 md:mt-0">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="flex rounded-xl border">
                                <Skeleton className="h-28 w-32 rounded-xl" />
                                <div className="flex justify-between w-full items-center p-4">
                                    <section>
                                        <Skeleton className="h-6 w-40 mb-2" />
                                        <Skeleton className="h-4 w-3/4 mb-2" />
                                        <Skeleton className="h-6 w-20" />
                                    </section>
                                        <Skeleton className="h-8 w-24" />
                                </div>
                            </div>
                        ))}

                        {/* Total and checkout button skeleton */}
                        <section className="mt-6 space-y-8">
                            <Skeleton className="h-5 w-full" />
                            <div className="flex items-center justify-between border p-4 rounded-[8px]">
                                <Skeleton className="h-8 w-24" />
                                <Skeleton className="h-12 w-40" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Skeleton className="h-5 w-5" />
                                <Skeleton className="h-4 w-60" />
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    )
}