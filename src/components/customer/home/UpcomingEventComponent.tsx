'use client';
import {upcomingData} from "@/lib/customer/upcomingData";
import {CardComponent} from "@/components/customer/card/CardComponent";
import {useEffect, useState} from "react";
import {CardEventSkeletonComponent} from "@/components/customer/card/CardEventSkeletonComponent";

export function UpcomingEventComponent() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {
                isLoading ? <CardEventSkeletonComponent/> :
                    <section
                        className=" container mx-auto w-full bg-khotixs-background-white dark:bg-khotixs-background-dark py-[30px]  md:py-[50px] flex flex-col justify-center items-center h-auto ">
                        <section className=" w-full flex flex-col justify-center items-center ">
                            <h1 className=" text-primary-color-text lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold dark:text-secondary-color-text ">
                                UPCOMING EVENTS
                            </h1>
                            <p className=" text-2xl px-[20px] py-[8px] lg:max-w-[700px] xl:max-w-[60%] text-sm md:px-[120px] md:text-md lg:text-lg xl:px-[10px] xl:text-xl 2xl:text-xl font-light lg:my-[20px] text-center ">
                                The General Event feature provides comprehensive information about a specific event,
                                ensuring
                                users have all the details needed to make an informed decision about attending or
                                booking
                                tickets.
                            </p>
                        </section>
                        <section
                            className=" md:gap-5 h-auto px-[20px] sm:px-[120px] md:px-[145px] md:mt-1 grid grid-cols-2 justify-center items-center gap-2 lg:px-[20px] 2xl:px-[270px] ">
                            {upcomingData.map((event, index) => (
                                <CardComponent key={index} event={event}/>
                            ))}
                        </section>

                    </section>
            }
        </>
    )
}