import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function PolicySkeletonComponent() {
    return (
        <main className="container mx-auto w-full">
            <section className="w-full my-10 lg:my-20">
                <div className="w-full my-10">
                    <Skeleton className="w-full h-[40px] xl:h-[60px] mx-auto" />
                    <Skeleton className="w-[250px] h-[20px] xl:w-[400px] xl:h-[30px] mx-auto mt-4" />
                </div>

                <div className="flex gap-5 flex-col md:flex-row p-5 w-full ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {/* Privacy Policy */}
                        <div className="bg-white h-full dark:bg-secondary-color p-4 rounded-[6px] ">
                            <Skeleton className="w-auto h-[30%] mb-2" />
                            <Skeleton className="w-auto h-[70%] mb-2" />

                        </div>

                        {/* Responsibilities */}
                        <div className="bg-white h-full dark:bg-secondary-color p-4 rounded-[6px] ">
                            <Skeleton className="w-auto h-[30%] mb-2"/>
                            <Skeleton className="w-auto h-[70%] mb-2"/>

                        </div>

                        {/* Security Policy */}
                        <div className="bg-white h-full dark:bg-secondary-color p-4 rounded-[6px] ">
                            <Skeleton className="w-auto h-[30%] mb-2"/>
                            <Skeleton className="w-auto h-[70%] mb-2"/>

                        </div>

                        {/* Terms of Use */}
                        <div className="bg-white h-full dark:bg-secondary-color p-4 rounded-[6px] ">
                            <Skeleton className="w-auto h-[30%] mb-2"/>
                            <Skeleton className="w-auto h-[70%] mb-2"/>

                        </div>
                    </div>

                    <Skeleton className="rounded-[6px] hidden lg:block w-[50%] h-[400px]"/>
                </div>
            </section>
        </main>
    );
}